import { starter } from '../data/starter';
import { assassin } from '../data/assassin';
import { fighter } from '../data/fighter';
import { mage } from '../data/mage';
import { marksman } from '../data/marksman';
import { support } from '../data/support';
import { tank } from '../data/tank';

export function buildItemsData(items) {
  const usableItems = items.filter(
    (item) => item.inStore && item.mapStringIdInclusions.includes('SR')
  );

  const mythics = usableItems
    .filter(
      (item) =>
        item.description.includes('Mythic Passive:') ||
        item.name === 'Divine Sunderer'
    )
    .map((item) => ({
      ...item,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }))
    .sort((a, z) => a.priceTotal - z.priceTotal);
  const legendaries = usableItems
    .filter(
      (item) =>
        item.priceTotal > 1500 &&
        !item.description.includes('Mythic Passive:') &&
        item.name !== 'Divine Sunderer'
    )
    .map((item) => ({
      ...item,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }))
    .sort((a, z) => a.priceTotal - z.priceTotal);
  const epics = usableItems
    .filter(
      (item) =>
        item.priceTotal <= 1500 &&
        item.priceTotal > 500 &&
        (item.from.length ||
          item.name === 'Sheen' ||
          item.name === 'Stirring Wardstone') &&
        !item.isEnchantment &&
        !item.categories.includes('Boots')
    )
    .map((item) => ({
      ...item,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }))
    .sort((a, z) => a.priceTotal - z.priceTotal);
  const basics = usableItems
    .filter(
      (item) =>
        !starter[item.id] &&
        item.priceTotal &&
        !item.from.length &&
        !item.categories.includes('Consumable') &&
        item.name !== 'Sheen' &&
        item.name !== 'Broken Stopwatch' &&
        item.name !== 'Stirring Wardstone' &&
        !item.categories.includes('Boots') &&
        !item.requiredBuffCurrencyCost
    )
    .map((item) => ({
      ...item,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }))
    .sort((a, z) => a.priceTotal - z.priceTotal);
  const starters = usableItems
    .filter((item) => starter[item.id])
    .map((item) => ({
      ...item,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }))
    .sort((a, z) => a.priceTotal - z.priceTotal);

  return {
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
    },
    fighter: {
      mythics: mythics.filter((i) => fighter.mythic[i.id]),
      legendaries: legendaries.filter((i) => fighter.legendary[i.id]),
      epics: epics.filter((i) => fighter.epic[i.id]),
      basics: basics.filter((i) => fighter.basic[i.id]),
    },
    mage: {
      mythics: mythics.filter((i) => mage.mythic[i.id]),
      legendaries: legendaries.filter((i) => mage.legendary[i.id]),
      epics: epics.filter((i) => mage.epic[i.id]),
      basics: basics.filter((i) => mage.basic[i.id]),
    },
    marksman: {
      mythics: mythics.filter((i) => marksman.mythic[i.id]),
      legendaries: legendaries.filter((i) => marksman.legendary[i.id]),
      epics: epics.filter((i) => marksman.epic[i.id]),
      basics: basics.filter((i) => marksman.basic[i.id]),
    },
    support: {
      mythics: mythics.filter((i) => support.mythic[i.id]),
      legendaries: legendaries.filter((i) => support.legendary[i.id]),
      epics: epics.filter((i) => support.epic[i.id]),
      basics: basics.filter((i) => support.basic[i.id]),
    },
    tank: {
      mythics: mythics.filter((i) => tank.mythic[i.id]),
      legendaries: legendaries.filter((i) => tank.legendary[i.id]),
      epics: epics.filter((i) => tank.epic[i.id]),
      basics: basics.filter((i) => tank.basic[i.id]),
    },
  };
}
