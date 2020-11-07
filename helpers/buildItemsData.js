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
      id: item.id,
      name: item.name,
      categories: item.categories,
      priceTotal: item.priceTotal,
      description: item.description,
      from: item.from,
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
    mythicDictionary: mythics.reduce(function (acc, cur) {
      acc[cur.id] = cur.name;
      return acc;
    }, {}),
  };
}
