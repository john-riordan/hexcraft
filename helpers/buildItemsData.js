import { EPIC_LEGENDARY_BREAKPOINT, USE_CDRAGON_DATA } from './constants';
import { starter } from '../data/starter';
import { basic } from '../data/basic';
import { epic } from '../data/epic';
import { legendary } from '../data/legendary';
import { whitelist } from '../data/whitelist';
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
      const isWhitelisted = whitelist[item.id];

      return hasCost && isWhitelisted && !isOrnnItem(item);
    })
    .sort((a, z) => z.gold.total - a.gold.total)
    .map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description.startsWith('GeneratedTip')
        ? "Unfortunately this item's description is missing at the moment"
        : item.description,
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
    const minPrice = item.priceTotal > EPIC_LEGENDARY_BREAKPOINT;
    return legendary[item.id] || minPrice;
  });

  const epics = usableItems.filter((item) => {
    const epicWhitelist = epic[item.id];
    const lowerPrice = item.priceTotal <= EPIC_LEGENDARY_BREAKPOINT;
    const minPrice = item.priceTotal > 500;
    const consumable = (item.categories || []).includes('Consumable');
    const boots = (item.categories || []).includes('Boots');
    const isBasic = basic[item.id];

    return (
      epicWhitelist ||
      (!consumable && !boots && !isBasic && lowerPrice && minPrice)
    );
  });

  const basics = usableItems.filter((item) => basic[item.id]);

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
      legendaries: legendaries.map((i) => i.id),
      epics: epics.map((i) => i.id),
      basics: basics.map((i) => i.id),
      starters: starters.map((i) => i.id),
      boots: boots.map((i) => i.id),
    },
  };
}
