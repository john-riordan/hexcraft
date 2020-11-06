import { starter } from '../data/starter';
import { assassin } from '../data/assassin';
import { fighter } from '../data/fighter';
import { mage } from '../data/mage';
import { marksman } from '../data/marksman';
import { support } from '../data/support';
import { tank } from '../data/tank';

export function buildItemsData(items) {
  const usableItems = items
    .filter(
      (item) =>
        (item.inStore || item.name === 'Watchful Wardstone') &&
        item.priceTotal &&
        item.mapStringIdInclusions.includes('SR')
    )
    .sort((a, z) => a.priceTotal - z.priceTotal)
    .map((item) => ({
      ...item,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }));

  const mythics = usableItems.filter(
    (item) =>
      item.description.includes('Mythic Passive:') ||
      item.name === 'Divine Sunderer'
  );

  const legendaries = usableItems.filter(
    (item) =>
      item.priceTotal > 1500 &&
      !item.description.includes('Mythic Passive:') &&
      item.name !== 'Divine Sunderer'
  );

  const epics = usableItems.filter(
    (item) =>
      item.priceTotal <= 1500 &&
      item.priceTotal > 500 &&
      (item.from.length || item.name === 'Sheen') &&
      !item.isEnchantment &&
      !item.categories.includes('Boots')
  );

  const basics = usableItems.filter(
    (item) =>
      !starter[item.id] &&
      item.priceTotal &&
      !item.from.length &&
      !item.categories.includes('Consumable') &&
      item.name !== 'Sheen' &&
      item.name !== 'Broken Stopwatch' &&
      !item.categories.includes('Boots') &&
      !item.requiredBuffCurrencyCost
  );

  const starters = usableItems.filter((item) => starter[item.id]);

  return {
    items: usableItems
      .map((item) => ({
        ...item,
        search: item.categories.map((c) => c.toLowerCase()).join(),
      }))
      .reduce(function (acc, cur, i) {
        acc[cur.id] = cur;
        return acc;
      }, {}),
    all: {
      mythics,
      legendaries,
      epics,
      basics,
      starters,
    },
    assassin: {
      mythics: mythics.filter((i) => assassin.mythic[i.id]),
      legendaries: legendaries.filter((i) => assassin.legendary[i.id]),
      epics: epics.filter((i) => assassin.epic[i.id]),
      basics: basics.filter((i) => assassin.basic[i.id]),
      starters: starters.filter((i) => assassin.starter[i.id]),
    },
    fighter: {
      mythics: mythics.filter((i) => fighter.mythic[i.id]),
      legendaries: legendaries.filter((i) => fighter.legendary[i.id]),
      epics: epics.filter((i) => fighter.epic[i.id]),
      basics: basics.filter((i) => fighter.basic[i.id]),
      starters: starters.filter((i) => fighter.starter[i.id]),
    },
    mage: {
      mythics: mythics.filter((i) => mage.mythic[i.id]),
      legendaries: legendaries.filter((i) => mage.legendary[i.id]),
      epics: epics.filter((i) => mage.epic[i.id]),
      basics: basics.filter((i) => mage.basic[i.id]),
      starters: starters.filter((i) => mage.starter[i.id]),
    },
    marksman: {
      mythics: mythics.filter((i) => marksman.mythic[i.id]),
      legendaries: legendaries.filter((i) => marksman.legendary[i.id]),
      epics: epics.filter((i) => marksman.epic[i.id]),
      basics: basics.filter((i) => marksman.basic[i.id]),
      starters: starters.filter((i) => marksman.starter[i.id]),
    },
    support: {
      mythics: mythics.filter((i) => support.mythic[i.id]),
      legendaries: legendaries.filter((i) => support.legendary[i.id]),
      epics: epics.filter((i) => support.epic[i.id]),
      basics: basics.filter((i) => support.basic[i.id]),
      starters: starters.filter((i) => support.starter[i.id]),
    },
    tank: {
      mythics: mythics.filter((i) => tank.mythic[i.id]),
      legendaries: legendaries.filter((i) => tank.legendary[i.id]),
      epics: epics.filter((i) => tank.epic[i.id]),
      basics: basics.filter((i) => tank.basic[i.id]),
      starters: starters.filter((i) => tank.starter[i.id]),
    },
    mythicDictionary: mythics.reduce(function (acc, cur) {
      acc[cur.id] = cur.name;
      return acc;
    }, {}),
  };
}
