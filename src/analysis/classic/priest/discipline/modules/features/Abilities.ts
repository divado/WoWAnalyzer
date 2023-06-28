import SPELLS from 'common/SPELLS/classic';
import CoreAbilities from 'parser/core/modules/Abilities';
import SPELL_CATEGORY from 'parser/core/SPELL_CATEGORY';

class Abilities extends CoreAbilities {
  spellbook() {
    return [
      // SPELLS ADDED HERE ARE DISPLAYED ON THE STATISTICS TAB
      // Rotational
      {
        spell: [SPELLS.POWER_WORD_SHIELD.id, ...SPELLS.POWER_WORD_SHIELD.lowRanks],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.PRAYER_OF_MENDING.id, ...SPELLS.PRAYER_OF_MENDING.lowRanks],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.FLASH_HEAL.id, ...SPELLS.FLASH_HEAL.lowRanks],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.PENANCE_HEALING.id],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.DIVINE_HYMN.id],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.INNER_FOCUS.id],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.SHADOW_FIEND.id],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.SMITE.id, ...SPELLS.SMITE.lowRanks],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.HOLY_FIRE.id, ...SPELLS.HOLY_FIRE.lowRanks],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.SHADOW_WORD_PAIN.id, ...SPELLS.SHADOW_WORD_PAIN.lowRanks],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      {
        spell: [SPELLS.DEVOURING_PLAGUE.id, ...SPELLS.DEVOURING_PLAGUE.lowRanks],
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: { base: 1500 },
      },
      // Rotational AOE

      // Cooldowns

      // Defensive

      // Other spells (not apart of the normal rotation)

      // Utility

      // Pet Related

      // Consumable
    ];
  }
}

export default Abilities;
