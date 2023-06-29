import { t } from '@lingui/macro';
import { formatPercentage } from 'common/format';
import { SpellIcon, SpellLink } from 'interface';
import Analyzer, { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import { ThresholdStyle, When } from 'parser/core/ParseResults';
import Events, { ApplyDebuffEvent } from 'parser/core/Events';

import SPELLS from 'common/SPELLS/classic';
import Combatants from 'parser/shared/modules/Combatants';

interface PowerWordShieldTracker {
  applicationTime: number;
}

class PowerWordShield extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  };
  protected combatants!: Combatants;

  private powerWordShieldTracker: { [targetId: number]: PowerWordShieldTracker } = {};

  private overwrittenShadowWordPains = 0;
  private shadowWeavingDurationByStack = [0, 0, 0, 0, 0, 0];

  get uptime() {
    return this.combatants.getBuffUptime(SPELLS.POWER_WORD_SHIELD.id) / this.owner.fightDuration;
  }

  constructor(options: Options) {
    super(options);

    this.addEventListener(
      Events.applydebuff.by(SELECTED_PLAYER).spell({ id: SPELLS.POWER_WORD_SHIELD.id }),
      this.pwsApplication,
    );
  }

  pwsApplication(event: ApplyDebuffEvent) {
    this.powerWordShieldTracker[event.targetID] = this.powerWordShieldTracker[event.targetID] || {};
    this.powerWordShieldTracker[event.targetID].applicationTime = event.timestamp;
  }

  get uptimeSuggestionThresholds() {
    return {
      actual: this.uptime,
      isLessThan: {
        minor: 0.95,
        average: 0.9,
        major: 0.8,
      },
      style: ThresholdStyle.PERCENTAGE,
    };
  }

  suggestions(when: When) {
    when(this.uptimeSuggestionThresholds).addSuggestion((suggest, actual, recommended) =>
      suggest(
        <span>
          Your <SpellLink id={SPELLS.POWER_WORD_SHIELD.id} /> uptime can be improved. Try to pay
          more attention to your <SpellLink id={SPELLS.POWER_WORD_SHIELD.id} /> on the combatants.
        </span>,
      )
        .icon('spell_discipline_powerwordshield')
        .actual(
          t({
            id: 'priest.discipline.suggestions.powerWordShield.uptime',
            message: `${formatPercentage(actual)}% Power Word: Shield uptime`,
          }),
        )
        .recommended(`>${formatPercentage(recommended)}% is recommended`),
    );
  }

  subStatistic() {
    return (
      <div className="flex">
        <div className="flex-sub icon">
          <SpellIcon id={SPELLS.POWER_WORD_SHIELD.id} />
        </div>
        <div className="flex-sub value" style={{ width: 140 }}>
          {formatPercentage(this.uptime, 0)}% <small>uptime</small>
        </div>
      </div>
    );
  }
}

export default PowerWordShield;
