import {
  BLACKLISTED_ITEMS,
  EPIC_LEGENDARY_BREAKPOINT,
  USE_CDRAGON_DATA,
} from './constants';
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
      description: item.description,
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
    return item.priceTotal > EPIC_LEGENDARY_BREAKPOINT;
  });

  const epics = usableItems.filter(
    (item) =>
      item.priceTotal <= EPIC_LEGENDARY_BREAKPOINT &&
      item.priceTotal > 500 &&
      (item.from.length || item.name === 'Sheen')
  );

  const basics = usableItems.filter((item) => !item.from?.length);

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
