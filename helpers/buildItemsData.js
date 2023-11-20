import { BLACKLISTED_ITEMS, USE_CDRAGON_DATA } from './constants';
import { starter } from '../data/starter';
import isOrnnItem from '../helpers/isOrnnItem';

export function buildItemsData({
  ddragonItemsMap = {},
  cdragonItemsMap = {},
  patchChanges = {},
}) {
  // Use cdragon or ddragon
  // cdragon if you want to show pbe
  const itemListBase = USE_CDRAGON_DATA
    ? Object.values(cdragonItemsMap)
    : Object.values(ddragonItemsMap);

  const usableItems = itemListBase
    .filter((item) => {
      const hasCost = item.gold?.total;
      const isBlacklisted = BLACKLISTED_ITEMS[item.id];
      const idIsTooLong = `${item.id}`.length > 4;
      return hasCost && !isBlacklisted && !idIsTooLong;
    })
    .sort((a, z) => z.gold.total - a.gold.total)
    .map((item) => ({
      id: item.id,
      name: item.name,
      categories: patchChanges?.[item?.id]
        ? [...item.tags, 'Patch']
        : [...item.tags],
      priceTotal: item.gold.total,
      from: item.from || [],
      stats: item.stats,
      iconPath: `${cdragonItemsMap[item.id]?.iconPath
        .replace(
          '/lol-game-data/assets/ASSETS',
          'https://raw.communitydragon.org/pbe/game/assets'
        )
        .toLowerCase()}`,
      patchChange: patchChanges?.[item.id] || null,
    }));

  const legendaries = usableItems.filter((item) => {
    return item.priceTotal > 1500;
  });

  const epics = usableItems.filter(
    (item) =>
      item.priceTotal <= 1500 &&
      item.priceTotal > 500 &&
      (item.from.length || item.name === 'Sheen')
  );

  const basics = usableItems.filter(
    (item) =>
      !starter[item.id] &&
      item.priceTotal &&
      !item.from.length &&
      !item.categories.includes('Consumable') &&
      !starter[item.id] &&
      !item.categories.includes('GoldPer') &&
      !item.name.includes('Broken Stopwatch') &&
      !item.name.includes('Perfectly Timed Stopwatch') &&
      item.name !== 'Sheen' &&
      item.id !== 1040 &&
      item.id !== 2001 &&
      item.id !== 2007 &&
      item.id !== 2008 &&
      item.id !== 2010 && // biscuit
      item.id !== 3004 && // Manamune
      item.id !== 3042 && // Muramana
      item.id !== 3043 && // Archangel's Staff
      item.id !== 3040 && // Seraph's Embrace
      item.id !== 3119 && // Winter's Approach
      item.id !== 3121 && // Fimbulwinter
      !item.categories.includes('Boots')
  );

  // const ornn = cdragonItems
  //   .filter((item) => item.description.includes('ornnBonus'))
  //   .map((item) => ({
  //     id: item.id,
  //     name: item.name,
  //     categories: item.categories,
  //     priceTotal: item.priceTotal,
  //     from: item.from,
  //     description: item.description
  //       .replace(/Immolate :/, 'Immolate:')
  //       .replace(
  //         /<passive>Immolate:<\/passive>/,
  //         '<immolate> Immolate :</immolate>'
  //       ),
  //     iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
  //   }))
  //   .reduce(function (acc, cur, i) {
  //     acc[cur.from[0]] = cur;
  //     return acc;
  //   }, {});

  const boots = usableItems
    .filter((item) => item.stats.FlatMovementSpeedMod)
    .filter((item) => item.name !== 'Slightly Magical Footware');

  const starters = usableItems.filter((item) => starter[item.id]);

  return {
    // ornn: ornn,
    items: usableItems
      .map((item) => ({
        ...item,
        search: item.categories.map((c) => c.toLowerCase()).join() || '',
      }))
      .reduce(function (acc, cur, i) {
        acc[cur.id] = cur;
        return acc;
      }, {}),

    all: {
      legendaries,
      epics,
      basics,
      starters,
      boots,
    },
  };
}
