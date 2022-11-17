import { change, date } from 'common/changelog';
import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import { TALENTS_MAGE, TALENTS_PRIEST } from 'common/TALENTS';
import {
  Abelito75,
  acornellier,
  AdamKelly,
  Adoraci,
  Amani,
  Anomoly,
  Arbixal,
  Barry,
  Barter,
  Buudha,
  ChagriAli,
  ChristopherKiss,
  Dambroda,
  emallson,
  flurreN,
  Guyius,
  Haelrail,
  HolySchmidt,
  Jafowler,
  jazminite,
  jos3p,
  joshinator,
  Juko8,
  Kartarn,
  Keraldi,
  Khazak,
  Kruzershtern,
  Mae,
  maestrohdude,
  Maldark,
  Moonrabbit,
  niseko,
  Procyon,
  Putro,
  Sharrq,
  Sref,
  Ssabbar,
  Soulhealer95,
  wmavis,
  Zeboot,
  Zerotorescue,
  niko,
  Pirrang,
  ChrisKaczor,
  Jeff,
  Trevor,
  bhawkins6177,
  xunai,
  xepheris,
  nullDozzer,
  Tialyss,
  Lucky0604,
  ToppleTheNun,
  Vetyst,
  Chizu,
  Tyndi,
  Khadaj,
  Jonfanz,
} from 'CONTRIBUTORS';
import { ItemLink } from 'interface';
import SpellLink from 'interface/SpellLink';
import { TALENTS_SHAMAN } from 'common/TALENTS';

export default [
  change(date(2022, 11, 15), 'Add SuggestionSection component to help transition into Guides.', ToppleTheNun),
  change(date(2022, 11, 13), 'Add weapon enhancements to preparation section of guide.', ToppleTheNun),
  change(date(2022, 11, 13), 'Hide Dragonflight warning on Classic logs that don\'t have a build selected', emallson),
  change(date(2022, 11, 12), 'Backend work on resource tracking, including light bug fixes and ability to query stats for specific time periods', Sref),
  change(date(2022, 11, 11), 'Add player icon lookup for configs to Classic specs.', jazminite),
  change(date(2022, 11, 9), 'Add spells for Classic Deathknights (no functionality yet).', jazminite),
  change(date(2022, 11, 10), 'Add missing default tooltip for preparation section of guide.', ToppleTheNun),
  change(date(2022, 11, 10), 'Hide rank for talents with only one rank.', ToppleTheNun),
  change(date(2022, 11, 9), 'Add bombs and cleanup Classic Engineering.', jazminite),
  change(date(2022, 11, 7), 'Update for Classic WCLs URL.', jazminite),
  change(date(2022, 11, 7), 'Configure Greater Spellpower enchant for WoTLK', Tialyss),
  change(date(2022, 11, 6), 'Update PlayerTile for Classic to clear console errors.', jazminite),
  change(date(2022, 11, 2), 'Add Dragonflight enchants.', ToppleTheNun),
  change(date(2022, 11, 1), 'Add Preparation section that can be included in Guides.', ToppleTheNun),
  change(date(2022, 11, 1), 'Re-add missing specs to the specializations page.', ToppleTheNun),
  change(date(2022, 10, 31), 'Add slightly more ergonomic talent cast efficiency wrapper.', ToppleTheNun),
  change(date(2022, 10, 31), 'Update patch compatibility for specs supporting Dragonflight.', ToppleTheNun),
  change(date(2022, 10, 30), 'Add Classic WotLK specs.', jazminite),
  change(date(2022, 10, 26), 'Convert most of report loading process to functions.', ToppleTheNun),
  change(date(2022, 10, 25), 'Improve patch version detection for retail and classic.', ToppleTheNun),
  change(date(2022, 10, 25), 'Exclude classic from patch version checking.', ToppleTheNun),
  change(date(2022, 10, 25), 'Add prepatch warning and add prepatch details.', ToppleTheNun),
  change(date(2022, 10, 25), 'Update stat scaling values for DF prepatch - and add values to easily swap over after prepatch ends', Putro),
  change(date(2022, 10, 24), 'Updating WOTLK Potions', Khadaj),
  change(date(2022, 10, 24), 'Updating WOTLK Foods, adding food suggestions', Khadaj),
  change(date(2022, 10, 22), 'Extract proxyRestrictedTable function for both retail and classic.', ToppleTheNun),
  change(date(2022, 10, 22), 'Add BiS Warlock Chest Enchant to Max enchants', jazminite),
  change(date(2022, 10, 22), 'Updating WOTLK to use custom spell definitions.', Khadaj),
  change(date(2022, 10, 22), 'Correct some issues with talent generation', Putro),
  change(date(2022, 10, 22), 'Updating Flask and Elixir list for WOTLK.', Khadaj),
  change(date(2022, 10, 22), 'Removing weapon enhancement checker for WOTLK.', Khadaj),
  change(date(2022, 10, 22), 'Updating Enchant list for WOTLK Classic.', Khadaj),
  change(date(2022, 10, 17), 'Use generated talent info for character pages.', ToppleTheNun),
  change(date(2022, 10, 16), 'Update SpellLink to accept Spell instances.', ToppleTheNun),
  change(date(2022, 10, 16), 'Add ability to determine if wearing T29 2pc or 4pc.', ToppleTheNun),
  change(date(2022, 10, 16), 'Adding sourceInstance to BuffEvent', Jonfanz),
  change(date(2022, 10, 14), 'Updates to EventLinkNormalizer to allow for more advanced usage.', Sref),
  change(date(2022, 10, 13), 'Adding Hyperspeed Accelerators to WOTLK analysis.', Khadaj),
  change(date(2022, 10, 13), 'Adding Frag Belt to WOTLK analysis.', Khadaj),
  change(date(2022, 10, 11), 'Remove Effusive Anima Accelerator analyzer.', ToppleTheNun),
  change(date(2022, 10, 11), 'Remove conduits and soulbinds from character page.', ToppleTheNun),
  change(date(2022, 10, 11), 'Convert Discord button to TypeScript.', ToppleTheNun),
  change(date(2022, 10, 9), 'Fixed an issue where DeathRecapTracker was being disabled by a bad Blessing of Sacrifice ID', Sref),
  change(date(2022, 10, 5), 'Add Vault of the Incarnates raid information.', ToppleTheNun),
  change(date(2022, 10, 4), 'Add Blessing of the Bronze as a raid buff.', ToppleTheNun),
  change(date(2022, 10, 3), 'Convert PreparationRule component to TypeScript.', ToppleTheNun),
  change(date(2022, 10, 3), 'Rename Shadowlands parser directory to Retail.', ToppleTheNun),
  change(date(2022, 10, 3), 'Rename TBC parser directory to Classic.', ToppleTheNun),
  change(date(2022, 10, 2), 'Update Specs page for Dragonflight.', ToppleTheNun),
  change(date(2022, 9, 23), 'Convert Character parses page to TypeScript.', ToppleTheNun),
  change(date(2022, 9, 10), 'Update known patch versions for Dragonflight.', ToppleTheNun),
  change(date(2022, 9, 10), 'Show Dragonflight talents on character page if able to detect them.', ToppleTheNun),
  change(date(2022, 9, 8), 'Bump supported versions of classic and retail.', ToppleTheNun),
  change(date(2022, 9, 8), 'Add support for Dragonflight talent detection.', emallson),
  change(date(2022, 9, 7), 'Added the beginnings of a Shared Code system to make spec maintenance easier.', Sharrq),
  change(date(2022, 8, 28), 'Add capability of auto-generating talents for Dragonflight based on gamedata', Putro),
  change(date(2022, 8, 25), 'Added support for querying cooldown status at any point in the fight', Sref),
  change(date(2022, 8, 23), 'Fixed a bug where the timeline\'s cooldown tooltips weren\'t showing properly', Sref),
  change(date(2022, 8, 22), 'Overhauled cooldown tracker, fixed a bug in the cooldown interactions between CDR and haste changes, and added preliminary support for cooldown rate changes', Sref),
  change(date(2022, 8, 19), <>Convert Abilities.SPELL_CATEGORIES to SPELL_CATEGORY enum.</>, Vetyst),
  change(date(2022, 8, 18), 'Updated lint-staged to newest version', Putro),
  change(date(2022, 8, 18), 'Resolve calculating the average item level if no gear is equipped.', Vetyst),
  change(date(2022, 8, 17), <>Bumped version to indicate 9.2.5 is supported.</>, Vetyst),
  change(date(2022, 8, 16), 'Rewrote spells and items to typescript', Chizu),
  change(date(2022, 8, 15), 'Added eslint rule that requires spreading parent module dependencies', Chizu),
  change(date(2022, 8, 14), 'Add soulbinds to character page.', ToppleTheNun),
  change(date(2022, 8, 14), 'Updated core Death Knight modules to Typescript', Chizu),
  change(date(2022, 8, 14), 'Improve boss phase typing.', ToppleTheNun),
  change(date(2022, 8, 14), 'Add spell and item data for missing Sanctum of Domination items.', ToppleTheNun),
  change(date(2022, 8, 13), 'Updated translations of core DK modules', Chizu),
  change(date(2022, 8, 12), 'Update patch information in order to warn that a report is from an earlier patch.', Vetyst),
  change(date(2022, 8, 12), 'Remove deprecated statisticOrder property on all Analyzers.', Vetyst),
  change(date(2022, 8, 9), 'Add support for tracking debuffs on timeline.', ToppleTheNun),
  change(date(2022, 8, 9), <>Add the ability to change max charges of a spell such as <SpellLink id={SPELLS.MIND_BLAST.id} /> combined with <SpellLink id={SPELLS.VOIDFORM.id} /> and <SpellLink id={SPELLS.DARK_THOUGHTS.id} />.</>, Vetyst),
  change(date(2022, 8, 9), <>Regenerated talents for season 4.</>, Vetyst),
  change(date(2022, 8, 9), <>Tracking stats for all versions of <ItemLink id={ITEMS.UNBOUND_CHANGELING.id} />.</>, Vetyst),
  change(date(2022, 8, 8), 'Apply season 4 trinket nerfs.', Vetyst),
  change(date(2022, 8, 8), 'Display equiped set pieces on tooltip.', Vetyst),
  change(date(2022, 8, 7), 'Update Buff tracking to TypeScript.', ToppleTheNun),
  change(date(2022, 8, 4), <>Add support for <ItemLink id={ITEMS.CACHE_OF_ACQUIRED_TREASURES.id} />.</>, ToppleTheNun),
  change(date(2022, 8, 3), <>Add spellsteal event for Mage's <SpellLink id={TALENTS_MAGE.SPELLSTEAL_TALENT.id} />.</>, Vetyst),
  change(date(2022, 7, 26), 'Updated translations and corrected some translation values in various places', Putro),
  change(date(2022, 7, 22), 'Show Death Knight Runeforge enchants on character overview.', Vetyst),
  change(date(2022, 7, 22), 'Add create event for handling spells like Demonic Circle.', ToppleTheNun),
  change(date(2022, 7, 21), 'Reflect the quality of an item through the border of gear shown on the character tab.', Vetyst),
  change(date(2022, 7, 21), 'Updated enchants on character overview for SL and TBC.', Vetyst),
  change(date(2022, 7, 20), 'Converted deprecated TraitStatisticBox to Statistic statistics.', Vetyst),
  change(date(2022, 7, 20), 'Replace TalentStatisticBox with Statistic.', Vetyst),
  change(date(2022, 7, 20), 'Replace DualStatisticBox with Statistic.', Vetyst),
  change(date(2022, 7, 22), <>Setup Evoker on specs overview.</>, [Vetyst, Tyndi]),
  change(date(2022, 7, 19), 'CN_translations: About page, help wanted page and some warlock specs translated.', Lucky0604),
  change(date(2022, 7, 10), 'Bump patch compatibility for all 9.2 specs to 9.2.5.', emallson),
  change(date(2022, 7, 9), 'Fix issue where time filtering could cause the report to hang.', emallson),
  change(date(2022, 6, 29), 'CN translations: add some parts of the report about tbc warlock trans', Lucky0604),
  change(date(2022, 6, 28), <>Fixed an issue where the final buff from <ItemLink id={ITEMS.SCARS_OF_FRATERNAL_STRIFE.id} /> falling would be counted as a Dispel.</>, Sref),
  change(date(2022, 6, 19), 'Triage Healing update.', Abelito75),
  change(date(2022, 6, 16), <>Added <ItemLink id={ITEMS.THE_FIRST_SIGIL.id} /> to Statistics and Timeline.</>, Sref),
  change(date(2022, 5, 29), 'Smattering of bugfixes.', emallson),
  change(date(2022, 5, 28), 'Fix statistics page for TBC logs when viewing a spec with incomplete support or switching builds.', emallson),
  change(date(2022, 5, 28), <>Added <ItemLink id={ITEMS.EARTHBREAKERS_IMPACT.id} /> to Statistics and Timeline.</>, nullDozzer),
  change(date(2022, 5, 20), 'Added a "total" resource breakdown tables', nullDozzer),
  change(date(2022, 5, 17), 'Fix issue with Dwarf racial.', emallson),
  change(date(2022, 5, 13), 'Merged EnemyInstances logic into the standard Enemies file', Putro),
  change(date(2022, 5, 10), <>Add statistics and tracking for <ItemLink id={ITEMS.INSCRUTABLE_QUANTUM_DEVICE.id} />, <ItemLink id={ITEMS.SHADOWGRASP_TOTEM.id} />, and <ItemLink id={ITEMS.SOULLETTING_RUBY.id} /></>, nullDozzer),
  change(date(2022, 5, 9), <>Fix crashing bug in TBC character pages.</>, emallson),
  change(date(2022, 5, 9), <>Handle "extraattacks" events for things like <SpellLink id={TALENTS_SHAMAN.WINDFURY_TOTEM_TALENT.id} /></>, nullDozzer),
  change(date(2022, 5, 6), 'Condensed helpful functions into one file.', Abelito75),
  change(date(2022, 5, 5), 'Add support for Ascended Vigor', xepheris),
  change(date(2022, 5, 5), 'Add support for Blood-Spattered Scale and Codex of the First Technique trinkets.', xepheris),
  change(date(2022, 5, 2), 'Increased event type safety.', Abelito75),
  change(date(2022, 4, 30), 'Fix legendary icons not working on Character parses page', nullDozzer),
  change(date(2022, 4, 30), 'Fix broken trinket icons and conduit links on the character page', nullDozzer),
  change(date(2022, 4, 27), 'Updated stat multiplier table for Shadowlands values', Putro),
  change(date(2022, 4, 20), 'Preformance increase for talent identification.', Abelito75),
  change(date(2022, 4, 19), 'Refactor reports component to fix state management issues', nullDozzer),
  change(date(2022, 4, 19), 'Prevent invalid spells from passing internal tests and getting deployed.', emallson),
  change(date(2022, 4, 17), 'Fix conduits not being parsed correctly in some cases', nullDozzer),
  change(date(2022, 4, 17), 'Fix CDR tracking from Effusive Anima Accelerator for Monks and Shamans.', emallson),
  change(date(2022, 4, 15), 'Track CDR from Effusive Anima Accelerator', Tialyss),
  change(date(2022, 4, 15), 'Update tests to produce the same snapshot no matter the locale of running machine', nullDozzer),
  change(date(2022, 4, 15), 'Improved conduit statistics to use the equipped itemlevel for the link and tooltip.', nullDozzer),
  change(date(2022, 4, 10), 'Added Ravenous Frenzy to Restoration Druid', Trevor),
  change(date(2022, 4, 8), 'Integrate functional analyzers into the analysis pipeline.', emallson),
  change(date(2022, 4, 8), 'Updated Augment Rune Checker to also tracker eteneral augment rune.', Abelito75),
  change(date(2022, 4, 7), 'Updated conduit ranks to assume the player has all empowered conduits unlocked.', xepheris),
  change(date(2022, 4, 7), 'Updated generated conduit information as of patch 9.2.5.43057', Putro),
  change(date(2022, 4, 6), 'Add Flametongue and Windfury weapon to max enhancement list', xunai),
  change(date(2022, 4, 2), 'Fix issue with Donut Chart failing to render.', emallson),
  change(date(2022, 3, 25), 'Handle Unity legendary.', emallson),
  change(date(2022, 3, 23), 'Fixed degraded experience for Venthyr Mistweaver', Trevor),
  change(date(2022, 3, 14), 'Correcting the spelling of Anduin Wrynn.', Abelito75),
  change(date(2022, 3, 14), 'Added Cosmic Healing Potion to potions list.', Abelito75),
  change(date(2022, 3, 13), 'Added has2Piece and has4Piece functions to the combatant to easily check if a player has tier equipped or not.', Putro),
  change(date(2022, 3, 11), 'Updated build tooling for improved performance during development.', Zerotorescue),
  change(date(2022, 3, 2), <>Added support for <ItemLink id={ITEMS.VANTUS_RUNE_SEPULCHER.id} />.</>, emallson),
  change(date(2022, 3, 1), 'Changed default zone from 28 to 29', bhawkins6177),
  change(date(2022, 2, 21), 'Added support for Sepulcher of the First Ones', emallson),
  change(date(2022, 2, 5), 'Fix issue where external absorbs were counted on Self-Healing Timing graphs.', emallson),
  change(date(2022, 1, 26), 'Tweak header display on report page.', emallson),
  change(date(2022, 1, 24), 'Enable ads. Premium users have ads disabled.', emallson),
  change(date(2022, 1, 22), 'Version bumps', emallson),
  change(date(2022, 1, 18), 'Enable ad test system.', emallson),
  change(date(2022, 1, 8), 'Synchronize package versions across all classes/specs.', emallson),
  change(date(2021, 12, 31), 'Begin Sonar Scan fixes.', Jeff),
  change(date(2021, 12, 31), 'Added names to event tab for mobs classified as enemy pets', Putro),
  change(date(2021, 12, 27), 'Removed unnecessary build step.', emallson),
  change(date(2021, 12, 14), 'Fixed translations.', emallson),
  change(date(2021, 12, 13), 'Refactored handling of player channel detection', Sref),
  change(date(2021, 12, 13), 'Added a filter by covenant toggle to the Similiar Kill Times module under the Character tab.', Putro),
  change(date(2021, 12, 12), 'Added a last spell cast condition to the APL checker module.', Putro),
  change(date(2021, 12, 4), 'Fixed an issue with stat tracking in Mythic+ dungeons. Mythic+ still not officially supported, but at least it shouldn\'t crash', emallson),
  change(date(2021, 12, 6), 'Updated some internal dependencies', Jeff),
  change(date(2021, 11, 30), 'Fixed Spiritual Mana Potion not being tracked issue.', Jeff),
  change(date(2021, 11, 27), 'Internal dependency updates.', emallson),
  change(date(2021, 11, 25), 'Fix compatibility issue with nodejs 16', Jeff),
  change(date(2021, 11, 25), 'Added greaterThanOrEqual & lessThanOrEqual option for checklist conditions', Trevor),
  change(date(2021, 11, 25), 'Force-update translations for Mistweaver', emallson),
  change(date(2021, 11, 23), 'Have relevant TBC build selected for the selected character.', Arbixal),
  change(date(2021, 11, 14), 'Clean up caching in GitHub actions CI.', Zerotorescue),
  change(date(2021, 11, 13), 'Removed Healthstone and Healing Pot from Mana Efficiency Tracker.', Abelito75),
  change(date(2021, 11, 11), 'Added an Icon to more easily display which cooldown is which in the cooldown tab.', Abelito75),
  change(date(2021, 11, 8), 'Bumping current version of wow from 9.1 -> 9.1.5', Abelito75),
  change(date(2021, 11, 8), 'Manual internationalization update to satisfy CI.', emallson),
  change(date(2021, 11, 6), 'Add additional functionality to APL checker to check for present/missing debuffs, fractional charges and remaining time of spell cooldowns', Putro),
  change(date(2021, 11, 5), 'Correctly adjust spell history to include prepull casts as they should count as casts related to the encounter.', Putro),
  change(date(2021, 10, 31), 'Prepare for "energize" event rename.', emallson),
  change(date(2021, 10, 27), 'Clean up character page for TBC characters.', emallson),
  change(date(2021, 10, 21), 'Remove paywall on timeline.', emallson),
  change(date(2021, 10, 20), 'Fix a crashing issue with Sanctum of Domination Vantus Runes.', emallson),
  change(date(2021, 10, 19), 'Fix issue with loading in boss data', Adoraci),
  change(date(2021, 10, 19), 'Added Sanctum of Domination boss phases and details.', Adoraci),
  change(date(2021, 10, 19), 'Fixed typo in footer links.', emallson),
  change(date(2021, 10, 18), 'Another batch of basic TypeScript conversions/improvements.', ChrisKaczor),
  change(date(2021, 10, 17), 'Improved APL checker performance.', emallson),
  change(date(2021, 10, 16), 'Add support for automatic checklist generation & timeline annotation from an APL.', emallson),
  change(date(2021, 10, 15), 'Another batch of basic TypeScript conversions and improvements.', ChrisKaczor),
  change(date(2021, 10, 14), 'Batch of basic TypeScript conversions and improvements.', ChrisKaczor),
  change(date(2021, 10, 13), 'Localization and TypeScript changes.', ChrisKaczor),
  change(date(2021, 9, 29), 'Fixed typo in error page.', emallson),
  change(date(2021, 9, 21), 'Added conduit view on character page', Pirrang),
  change(date(2021, 8, 31), 'Fixed an issue where Premium was immediately lost upon unsubscribing in Patreon, even if you were eligible for benefits for the remainder of the month.', Zerotorescue),
  change(date(2021, 8, 31), 'Fixed rare crash in Cast Efficiency module when an important spell was never cast.', Zerotorescue),
  change(date(2021, 8, 9), 'German translations for monk class', maestrohdude),
  change(date(2021, 8, 3), 'Update Game Version in constants to ensure correct warnings are triggering when modules are out of date.', Anomoly),
  change(date(2021, 8, 3), 'Reword spec out of date warning.', Zerotorescue),
  change(date(2021, 7, 29), 'Add median fight duration to the damage done statistic tooltip.', Zerotorescue),
  change(date(2021, 7, 28), 'Support issue warnings on the report page are now presented modally to make it clearer that the warning can be closed.', Zerotorescue),
  change(date(2021, 7, 27), 'Moved low rank spells config out of the ability config for better code isolation.', Zerotorescue),
  change(date(2021, 7, 25), <>Fixed a bug where <SpellLink id={SPELLS.SOOTHING_SHADE.id} /> procs could incorrectly cause casts to be marked as cancelled.</>, Sref),
  change(date(2021, 7, 22), 'German translations for mage class', maestrohdude),
  change(date(2021, 7, 18), 'Movement indicators in timeline show an indication of the amount of movement by height.', Zerotorescue),
  change(date(2021, 7, 18), 'Reduce visual obstructiveness of movement indicator in the timeline.', Zerotorescue),
  change(date(2021, 7, 14), 'Updated to handle changes to combatantinfo API, allowing Conduit and Soulbind stats to work again.', Sref),
  change(date(2021, 7, 4), 'Fixed a bug where erroneous costs could be assigned to pre-cast spells', Sref),
  change(date(2021, 7, 1), 'Clarify the error shown when a character has no analysis available (e.g. for TBC reports).', Zerotorescue),
  change(date(2021, 6, 29), 'Added Mountaineer Racial to Highmountain Taurens and the same to StatTracker', Soulhealer95),
  change(date(2021, 6, 28), 'Add movement indicator to the timeline.', Zerotorescue),
  change(date(2021, 6, 26), 'Fixed a bug in the calculation of whether a DoT refresh cast was wasteful', Sref),
  change(date(2021, 6, 22), 'Load spell info automatically from logs or the WCL API to avoid having to manually add every spell to the codebase.', Zerotorescue),
  change(date(2021, 6, 12), 'Fixed unit test', Sref),
  change(date(2021, 6, 10), 'Updated events tab with more event type coloring, spell IDs, and amount information', Sref),
  change(date(2021, 5, 31), 'Reordered events are now highlighted blue in the events listing, differentiating them from modified events.', Sref),
  change(date(2021, 5, 27), 'German translation fix', maestrohdude),
  change(date(2021, 5, 15), 'Fixed a bug that could cause the Mana Pool graph to crash', Sref),
  change(date(2021, 5, 4), 'German translations', maestrohdude),
  change(date(2021, 4, 26), <>Fixed <SpellLink id={SPELLS.CHAOS_BRAND.id} /> count in Raid Buffs</>, niko),
  change(date(2021, 4, 24), 'German translations', maestrohdude),
  change(date(2021, 4, 20), 'Normalized normalizers', Sref),
  change(date(2021, 4, 20), 'More German translations for the interface', maestrohdude),
  change(date(2021, 4, 20), 'Update README api key wording.', wmavis),
  change(date(2021, 4, 17), 'Added Shadowlands gems and trinket icons.', Adoraci),
  change(date(2021, 4, 14), 'Converted StatTracker to TypeScript', Sref),
  change(date(2021, 4, 8), 'More German translations for the interface', maestrohdude),
  change(date(2021, 4, 2), 'Added German translations in de/messages.json for the character parses section', maestrohdude),
  change(date(2021, 4, 1), 'Added German translations in de/messages.json for hunter section', maestrohdude),
  change(date(2021, 3, 29), 'Added German translations in de/messages.json for common, core abilities, death knight, demon hunter, and druid sections', maestrohdude),
  change(date(2021, 3, 20), <> Fixed food check warning when druid conduit's <SpellLink id={SPELLS.DRUID_BORN_ANEW.id} /> was present on fight start.</>, Kartarn),
  change(date(2021, 3, 16), 'Fixed issue with contributor icons.', emallson),
  change(date(2021, 3, 8), 'Converted most Report related components to TS', acornellier),
  change(date(2021, 3, 3), 'Converted dungeon files to TS and added Dungeon interface', Procyon),
  change(date(2021, 3, 3), 'Converted various components to functional components in TypeScript.', acornellier),
  change(date(2021, 2, 27), 'Fixed a crash resulting from precasting spells on druid specs.', Kartarn),
  change(date(2021, 2, 24), <>Fixed a crash triggered by <SpellLink id={SPELLS.CONVOKE_SPIRITS.id} /> casting 0 spells</>, acornellier),
  change(date(2021, 2, 23), 'Refactored the language switcher into a functional component', acornellier),
  change(date(2021, 2, 20), 'Added spell info for conduits, Venthyr soulbind\'s and some Kyrian SB\'s as well as legendary data', Buudha),
  change(date(2021, 2, 14), <>Update <ItemLink id={ITEMS.VANTUS_RUNE_CASTLE_NATHRIA.id} /> versatility value.</>, Adoraci),
  change(date(2021, 1, 24), 'Fix fight downtime toggle.', Zerotorescue),
  change(date(2021, 1, 20), 'Rework spec support: automatically mark specs as unsupported when patch does not match the game and added a toggle to mark a spec with partial support.', Zerotorescue),
  change(date(2021, 1, 20), 'Change homepage header to be consistent with report page.', Zerotorescue),
  change(date(2021, 1, 20), 'Updated the Missing Encounters warning to show always and prompt users to click Refresh if encounters are missing.', Sharrq),
  change(date(2021, 1, 20), 'Added raid preparation analysis for Veiled Augment Runes.', Maldark),
  change(date(2021, 1, 16), 'Clarify login buttons on the Premium page.', Zerotorescue),
  change(date(2021, 1, 16), 'The first 10 seconds of the timeline are always visible so openers can be reviewed properly.', Zerotorescue),
  change(date(2021, 1, 16), 'Address an issue where our potion modules thought that potions had infinite cooldown when used in combat.', Putro),
  change(date(2021, 1, 15), 'Made the timeline only available with WoWAnalyzer Premium. This is necessary to be able to continue to update WoWAnalyzer.', Zerotorescue),
  change(date(2021, 1, 14), 'Updated CastEfficiency to use the average cooldown for a spell instead of the configured static cooldown to improve cast efficiency stats for spells with effects that reduce the cooldown', Khazak),
  change(date(2021, 1, 13), 'Updated Mastery coefficients and baseline Critical Strike values for specs where it was necessary.', Putro),
  change(date(2021, 1, 3), 'Fixed a crash if you were trying to analyze an extremely short pull where players have cast basically 0 spells.', Putro),
  change(date(2021, 1, 2), <> Added Inneficient <SpellLink id={SPELLS.REGROWTH.id} /> to resto druid statistics and fixed bug in reporting of overwritten CC procs. </>, Barry),
  change(date(2021, 1, 2), <> Added <SpellLink id={SPELLS.LIFEBLOOM_HOT_HEAL.id} /> uptime to resto druid checklist. </>, Barry),
  change(date(2021, 1, 2), <><SpellLink id={SPELLS.SOUL_INFUSION.id} /> is now being shown as channeld in Timeline and fixed bad icon</>, flurreN),
  change(date(2021, 1, 1), 'Happy New Years! Added most used legendaries, conduits, covenants and soulbinds to the character page.', Putro),
  change(date(2020, 12, 29), <> Add support for <ItemLink id={ITEMS.OVERCHARGED_ANIMA_BATTERY.id} />. </>, Putro),
  change(date(2020, 12, 28), <>Resolved a crash that would occur if the player did not have a weapon equipped.</>, Sharrq),
  change(date(2020, 12, 28), <>Fixed the Changelog dropdown selector displaying incorrectly.</>, Adoraci),
  change(date(2020, 12, 22), <>Re-enabled the QElive button for healers that have it supported.</>, Abelito75),
  change(date(2020, 12, 22), <>Added support for <ItemLink id={ITEMS.DARKMOON_DECK_VORACITY.id} /> and corrected downtime issues in fights where you had <SpellLink id={TALENTS_PRIEST.POWER_INFUSION_TALENT.id} />.</>, Putro),
  change(date(2020, 12, 22), 'Resolved an issue in FilteredActiveTime that was not counting properly, resulting in > 100% active time.', Sharrq),
  change(date(2020, 12, 13), 'Reverted using the browser refresh on fight selection now correctly reloads the report from WCL.', Zerotorescue),
  change(date(2020, 12, 20), 'Removed the last remnants of Azerite across the codebase', Putro),
  change(date(2020, 12, 19), 'Add warnings for logs with Advanced Combat Logging disabled and when no encounters are found.', Sharrq),
  change(date(2020, 12, 19), <>Fix issues with <ItemLink id={ITEMS.INSCRUTABLE_QUANTUM_DEVICE.id} /> not accounting for the correct stat given. </>, Putro),
  change(date(2020, 12, 19), 'Adjust our weak Potion suggestion to only show if a weak potion was actually used', Putro),
  change(date(2020, 12, 17), 'Added phase information for Castle Nathria bosses', Sharrq),
  change(date(2020, 12, 16), 'Fix character API realm slugs for non-English realms.', Zerotorescue),
  change(date(2020, 12, 15), <>Add support for the Engineering scopes, <ItemLink id={ITEMS.ENCHANT_WEAPON_OPTICAL_TARGET_EMBIGGENER.id} /> and <ItemLink id={ITEMS.ENCHANT_WEAPON_INFRA_GREEN_REFLEX_SIGHT.id} />, to the enchant checker. </>, Putro),
  change(date(2020, 12, 15), 'Add support for Aura Broken events in our Events tab', Putro),
  change(date(2020, 12, 13), 'Using the browser refresh on fight selection now correctly reloads the report from WCL.', Zerotorescue),
  change(date(2020, 12, 12), 'Fix a few translation issues.', Zerotorescue),
  change(date(2020, 12, 11), 'Updated Healing Healing Efficiency to show two decimal places', Abelito75),
  change(date(2020, 12, 11), 'Converted some root files from JS to TS', Keraldi),
  change(date(2020, 12, 10), 'Removed Heart of Azeroth from player selection screen as well as added Anti-magic zone to the tracked cooldowns', Abelito75),
  change(date(2020, 12, 10), 'Update character lookup to show Castle Nathria instead of Ny\'alotha', Putro),
  change(date(2020, 12, 10), 'Speed up build workflow.', Zerotorescue),
  change(date(2020, 12, 9), 'Fixed a crash here and there.', Zerotorescue),
  change(date(2020, 12, 9), 'Fixed a bug in Cancelled Casts that was counting enchant procs and other effects as abilities that interrupted casts', Sharrq),
  change(date(2020, 12, 9), 'Updated Potions and Flask!', Abelito75),
  change(date(2020, 12, 8), <>Removed all changelog entries before October 2020 that were not related to Shadowlands development, and updated spec contributors to match. If you're interested in older changelogs, visit our <a href="https://github.com/WoWAnalyzer/WoWAnalyzer/tree/bfa">BFA GitHub branch</a>.</>, Putro),
  change(date(2020, 12, 8), 'Removed Azerite traits, Essences, and anything else BFA related from WoWAnalyzer.', Putro),
  change(date(2020, 12, 8), 'Updated Stat Tracking to use squished stat values, and added shadowlands food, potions, and flasks.', Sharrq),
  change(date(2020, 12, 7), 'Added background and headshot graphics for Castle Nathria bosses', Sharrq),
  change(date(2020, 12, 3), 'Removed Azerite Overview from the character panel', niseko),
  change(date(2020, 12, 1), 'Added Weapon Oils and Sharpening Stones/Weightstones to Checklist and added Weapon Enchants', Sharrq),
  change(date(2020, 11, 28), 'Removed all BFA Modules', Sharrq),
  change(date(2020, 11, 23), 'Updated i18n ids', jos3p),
  change(date(2020, 11, 19), 'Final Interface and Restoration Shaman localization, correction of typos', Amani),
  change(date(2020, 11, 15), 'Added ability to get the active time/downtime for a specified time frame', Sharrq),
  change(date(2020, 11, 7), 'Adjust our Soulbind, Covenant, Conduit scripts per latest raid testing', Putro),
  change(date(2020, 11, 4), 'Migrate Castle Nathria to TS', Guyius),
  change(date(2020, 11, 2), 'Converted the following components to TypeScript: ItemLink, ResourceLink, Rule and Expandable', Mae),
  change(date(2020, 10, 31), 'Update several component to Typescript and refactor to hooks', Guyius),
  change(date(2020, 11, 1), 'Eliminated x-axis padding in several charts.', emallson),
  change(date(2020, 11, 1), 'Shifted all spells to use the same generic Spell type', Putro),
  change(date(2020, 10, 31), 'Added IDs to i18n of PlayerLoader', jos3p),
  change(date(2020, 10, 31), 'Added i18n of Premium page', jos3p),
  change(date(2020, 10, 29), 'Update game components to Typescript', jos3p),
  change(date(2020, 10, 29), 'Update ResourceTracker to TypeScript', Khazak),
  change(date(2020, 10, 29), 'Updated Potions Checklist items to show potions used instead of pre Potions/second Potions.', Sharrq),
  change(date(2020, 10, 29), 'Update several component to Typescript, center player name in player gear header', Guyius),
  change(date(2020, 10, 28), 'Added more translateable elements.', niseko),
  change(date(2020, 10, 27), 'Fix encounter stats on the character pane', joshinator),
  change(date(2020, 10, 27), 'Russian localization of Interface and Restoration Shaman', [Amani, Haelrail, Kruzershtern]),
  change(date(2020, 10, 25), 'Enabled additional code quality rule (enforce camelcase).', Zeboot),
  change(date(2020, 10, 25), 'Update PlayerTile, characters to Typescript, create new HOA type file, refactor PlayerTile to hooks', Guyius),
  change(date(2020, 10, 25), 'Fixed Healing Efficiency Tracker showing errors', niseko),
  change(date(2020, 10, 24), 'Update Regular Article to Typescript', Ssabbar),
  change(date(2020, 10, 24), 'Update PlayerSection to Typescript', Guyius),
  change(date(2020, 10, 23), 'Added initial Russian localization', [Amani, Haelrail, Kruzershtern]),
  change(date(2020, 10, 23), 'Healing Efficiency Tracker TypeScript conversion', niseko),
  change(date(2020, 10, 22), 'Update Footer to Typescript', Ssabbar),
  change(date(2020, 10, 22), 'Update Progressbar to Typescript', Guyius),
  change(date(2020, 10, 21), 'Update some news components to Typescript', ChagriAli),
  change(date(2020, 10, 21), 'Update to "2018-01-31-1st-Anniversary" Typescript', ChagriAli),
  change(date(2020, 10, 19), 'Converted Boring components to TypeScript', Khazak),
  change(date(2020, 10, 19), 'Updated some react components, and adjusted our ContributorDetails modal to more accurately show what it represents', Putro),
  change(date(2020, 10, 19), 'Removed legacy event listener support and enabled camelcase lint rule', Zeboot),
  change(date(2020, 10, 18), 'Updated talent row levels.', Abelito75),
  change(date(2020, 10, 18), 'Added drain event', Zeboot),
  change(date(2020, 10, 18), 'Converted components in interface/common to functional components in TypeScript.', Barter),
  change(date(2020, 10, 18), 'Refactored Contributor and fixed some typing of ContributorDetails', Dambroda),
  change(date(2020, 10, 18), 'Updated core legacy event listeners to event filters', Zeboot),
  change(date(2020, 10, 15), 'Updated the Spec tab styles', Dambroda),
  change(date(2020, 10, 15), 'Updated the Spec tab styles to clearly indicate unmaintained specs', Dambroda),
  change(date(2020, 10, 15), 'Added a warning message when loading Classic Logs', Sharrq),
  change(date(2020, 10, 14), 'Fixed the character page.', Abelito75),
  change(date(2020, 10, 14), <>Adjusted the values of <SpellLink id={SPELLS.ARCANE_INTELLECT.id} /> and <SpellLink id={SPELLS.BATTLE_SHOUT.id} />.</>, niseko),
  change(date(2020, 10, 13), 'Internationalization for each spec', Jafowler),
  change(date(2020, 10, 13), 'Fixed typo in the Timeline buffs timelineHighlight propery', Sharrq),
  change(date(2020, 10, 13), 'Converted DistancedMoved and DispelTracker modules to TypeScript', Dambroda),
  change(date(2020, 10, 13), 'Convert Js files to typescript', Ssabbar),
  change(date(2020, 10, 13), 'Fixed Putros StatTracker', niseko),
  change(date(2020, 10, 13), 'Updated our StatTracker to reflect prepatch stat values and the diminishing return system added in Shadowlands', Putro),
  change(date(2020, 10, 13), 'Converted StatisticsSectionTitle/TABS to TypeScript', ChagriAli),
  change(date(2020, 10, 13), 'Throughput & Language files TypeScript conversion', niseko),
  change(date(2020, 10, 13), 'Converted BAD_ICONS, aprilFools, colorForPerformance, Alerts, ContributorButton, Modal to TypeScript', Barter),
  change(date(2020, 10, 13), 'Converted AbilityTracker, Enemy, Enemies, Pet, and Pets to TypeScript', Dambroda),
  change(date(2020, 10, 13), 'Allow the use of any of the threshold breakpoints (minor, average, major) as the primary breakpoint for suggestions', Dambroda),
  change(date(2020, 10, 13), 'Merged CooldownTrackers to remove duplicated code and converted them to TypeScript', Putro),
  change(date(2020, 10, 13), 'Converted Items to TypeScript', Zeboot),
  change(date(2020, 10, 13), 'Converted Spells to TypeScript', Zeboot),
  change(date(2020, 10, 13), 'Converted Consumable Checkers to TypeScript', Zeboot),
  change(date(2020, 10, 13), 'Converted Combatants to TypeScript', niseko),
  change(date(2020, 10, 13), 'Changed code quality rules.', Zerotorescue),
  change(date(2020, 10, 13), 'Added a new event map for catch-all event types. Converted SpellUsable to TypeScript.', Dambroda),
  change(date(2020, 10, 13), 'Converted WCL API Access to TypeScript', Zeboot),
  change(date(2020, 10, 13), 'Cleaned up the console a little bit.', Abelito75),
  change(date(2020, 10, 13), 'Added a toggle-all button to the EventTab.', niseko),
  change(date(2020, 10, 13), 'Added dispel to filterable type for EventTab.', Moonrabbit),
  change(date(2020, 10, 13), 'Added Castle Nathria boss configs and updated the default report header image.', Sharrq),
  change(date(2020, 10, 13), 'Added pet tracking to the Cooldown tab.', Abelito75),
  change(date(2020, 10, 13), 'Converted charts to new library.', emallson),
  change(date(2020, 10, 13), 'Added a new search option to the homepage to view a guild\'s recent reports.', Dambroda),
  change(date(2020, 10, 13), 'Updated mana costs for all healers.', Abelito75),
  change(date(2020, 10, 13), 'Updated abilities effiency tracker to default to 0 if no casts were possible.', Abelito75),
  change(date(2020, 10, 13), 'Added holy power tracking for prot and holy paladin specs.', HolySchmidt),
  change(date(2020, 10, 13), 'Updated search in Event tab to allow for multi-word searching in quotes.', Abelito75),
  change(date(2020, 10, 13), 'Add some early checks to see if a player has a given conduit, soulbind or covenant.', Putro),
  change(date(2020, 10, 13), 'Add some scripts for generating conduit information.', Putro),
  change(date(2020, 10, 13), 'Fixed cast efficiency calculations for channeled spells. They are now no longer adding channeled time on top of cooldown as time they were unavailable', Juko8),
  change(date(2020, 10, 7), 'Updated the report header design: moved phase and time selection slightly out of view.', Zerotorescue),
  change(date(2020, 10, 6), 'Provide the ability to analyse anonymous reports.', AdamKelly),
  change(date(2020, 10, 6), 'Fixed guild and character search so they can be submitted.', ChristopherKiss),
  change(date(2020, 10, 5), 'Convert TimeInput/TimeFilter to typescript', ChagriAli),
  change(date(2020, 10, 4), 'Removed remaining trackers', Zerotorescue),
  change(date(2020, 10, 2), 'Updated project dependencies.', Zerotorescue),
];
