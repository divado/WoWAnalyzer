import Analyzer, { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import SpellUsable from 'parser/shared/modules/SpellUsable';
import TALENTS from 'common/TALENTS/shaman';
import Events, {
  DamageEvent,
  ApplyBuffEvent,
  RefreshBuffEvent,
  EventType,
  RemoveBuffEvent,
} from 'parser/core/Events';
import MAGIC_SCHOOLS, { isMatchingDamageType } from 'game/MAGIC_SCHOOLS';
import { calculateEffectiveDamage } from 'parser/core/EventCalculateLib';
import SPELLS from 'common/SPELLS';
import { formatNumber, formatPercentage } from 'common/format';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_ORDER from 'parser/ui/STATISTIC_ORDER';
import STATISTIC_CATEGORY from 'parser/ui/STATISTIC_CATEGORY';
import ItemDamageDone from 'parser/ui/ItemDamageDone';
import UptimeIcon from 'interface/icons/Uptime';
import DamageIcon from 'interface/icons/Damage';
import { SpellLink } from 'interface';
import TalentSpellText from 'parser/ui/TalentSpellText';
import { IGNORED_DAMAGE_EVENTS, MERGE_SPELLS } from '../../constants';

const DAMAGE_AMP_PERCENTAGE: Record<number, number> = { 1: 0.05, 2: 0.25 };

class LegacyOfTheFrostWitch extends Analyzer {
  static dependencies = {
    spellUsable: SpellUsable,
  };

  protected spellUsable!: SpellUsable;

  protected accumulatedSpend = 0;
  protected damageAmpPercentage = 0;
  protected buffedSpells: Record<number, number> = [];
  protected stormStrikeResets = 0;
  protected windStrikeResets = 0;
  protected lastApply = 0;
  protected appliedDuration = 0;

  constructor(options: Options) {
    super(options);

    this.active = this.selectedCombatant.hasTalent(TALENTS.LEGACY_OF_THE_FROST_WITCH_TALENT);

    if (!this.active) {
      return;
    }

    this.damageAmpPercentage =
      DAMAGE_AMP_PERCENTAGE[
        this.selectedCombatant.getTalentRank(TALENTS.LEGACY_OF_THE_FROST_WITCH_TALENT)
      ];

    this.addEventListener(Events.damage.by(SELECTED_PLAYER), this.onDamage);
    this.addEventListener(
      Events.applybuff.by(SELECTED_PLAYER).spell(SPELLS.LEGACY_OF_THE_FROST_WITCH_BUFF),
      this.onProcLegacyOfTheFrostWitch,
    );
    this.addEventListener(
      Events.refreshbuff.by(SELECTED_PLAYER).spell(SPELLS.LEGACY_OF_THE_FROST_WITCH_BUFF),
      this.onProcLegacyOfTheFrostWitch,
    );
    this.addEventListener(
      Events.removebuff.by(SELECTED_PLAYER).spell(SPELLS.LEGACY_OF_THE_FROST_WITCH_BUFF),
      this.onRemoveBuff,
    );
  }

  onDamage(event: DamageEvent) {
    if (IGNORED_DAMAGE_EVENTS.includes(event.ability.guid)) {
      return;
    }
    if (
      this.selectedCombatant.hasBuff(SPELLS.LEGACY_OF_THE_FROST_WITCH_BUFF.id) &&
      isMatchingDamageType(event.ability.type, MAGIC_SCHOOLS.ids.PHYSICAL)
    ) {
      if (event.amount > 0) {
        const spellId =
          MERGE_SPELLS.find((x) => x.SpellIds.includes(event.ability.guid))?.NewSpell ??
          event.ability.guid;
        if (!spellId) {
          return;
        }
        if (this.buffedSpells[spellId] === undefined) {
          this.buffedSpells[spellId] = 0;
        }
        this.buffedSpells[spellId] += calculateEffectiveDamage(event, this.damageAmpPercentage);
      }
    }
  }

  onRemoveBuff(event: RemoveBuffEvent) {
    this.appliedDuration += event.timestamp - this.lastApply!;
  }

  onProcLegacyOfTheFrostWitch(event: ApplyBuffEvent | RefreshBuffEvent) {
    if (event.type === EventType.ApplyBuff) {
      this.lastApply = event.timestamp;
    }
    if (this.spellUsable.isOnCooldown(TALENTS.STORMSTRIKE_TALENT.id)) {
      this.spellUsable.endCooldown(TALENTS.STORMSTRIKE_TALENT.id, event.timestamp, true);
      if (!this.selectedCombatant.hasBuff(TALENTS.ASCENDANCE_ENHANCEMENT_TALENT.id)) {
        this.stormStrikeResets += 1;
      }
    }

    if (this.spellUsable.isOnCooldown(SPELLS.WINDSTRIKE_CAST.id)) {
      this.spellUsable.endCooldown(SPELLS.WINDSTRIKE_CAST.id, event.timestamp, true);
      if (this.selectedCombatant.hasBuff(TALENTS.ASCENDANCE_ENHANCEMENT_TALENT.id)) {
        this.windStrikeResets += 1;
      }
    }
  }

  get uptime() {
    return this.appliedDuration / this.owner.fightDuration;
  }

  get extraDamage() {
    return Object.keys(this.buffedSpells)
      .map((guid) => this.buffedSpells[Number(guid)])
      .reduce((current, total) => (total += current));
  }

  get spellBreakdown() {
    return (
      <>
        {Object.keys(this.buffedSpells)
          .map((guid) => ({ spellId: Number(guid), damage: this.buffedSpells[Number(guid)] }))
          .map((spell) => (
            <>
              <li>
                <SpellLink spell={spell.spellId} /> - <strong>{formatNumber(spell.damage)}</strong>
              </li>
            </>
          ))}
      </>
    );
  }

  statistic() {
    return (
      <Statistic
        position={STATISTIC_ORDER.OPTIONAL()}
        category={STATISTIC_CATEGORY.TALENTS}
        size="flexible"
        tooltip={
          <>
            Reset breakdown:
            <ul>
              <li>
                <strong>{this.stormStrikeResets}</strong>{' '}
                <SpellLink spell={TALENTS.STORMSTRIKE_TALENT} /> resets
              </li>
              <li>
                <strong>{this.windStrikeResets}</strong>{' '}
                <SpellLink spell={SPELLS.WINDSTRIKE_CAST} /> resets
              </li>
            </ul>
            Buff details:
            <ul>
              <li>
                <UptimeIcon /> <strong>{formatPercentage(this.uptime)}</strong> % uptime
              </li>
              <li>
                <DamageIcon /> <strong>{formatNumber(this.extraDamage)}</strong> added damage
              </li>
            </ul>
            Spell breakdown:
            <ul>{this.spellBreakdown}</ul>
          </>
        }
      >
        <TalentSpellText talent={TALENTS.LEGACY_OF_THE_FROST_WITCH_TALENT}>
          <>
            <ItemDamageDone amount={this.extraDamage} />
            <br />
            <UptimeIcon /> {formatNumber(this.stormStrikeResets + this.windStrikeResets)}{' '}
            <small>resets</small>
          </>
        </TalentSpellText>
      </Statistic>
    );
  }
}

export default LegacyOfTheFrostWitch;
