import { EPIC_LEGENDARY_BREAKPOINT } from './constants';
import { starter } from '../data/starter';
import { basic } from '../data/basic';
import { epic } from '../data/epic';
import { legendary } from '../data/legendary';
import { whitelist } from '../data/whitelist';
import isOrnnItem from '../helpers/isOrnnItem';
import { consumables } from '../data/consumables';

export function buildItemsData({
  usePBE = false,
  ddragonItemsMap = {},
  cdragonItemsMap = {},
  patchChanges = {},
}) {
  // Use cdragon or ddragon
  // cdragon if you want to show pbe
  const itemListBase = usePBE
    ? Object.values(cdragonItemsMap)
    : Object.values(ddragonItemsMap);

  const whitelistedItems = itemListBase.filter((item) => {
    const cost = usePBE ? item.priceTotal : item.gold?.total;
    const isWhitelisted = whitelist[item.id];
    const isBoots = item.tags.includes('Boots') && cost >= 900;
    return (cost && isWhitelisted && !isOrnnItem(item)) || isBoots;
  });

  const usableItems = whitelistedItems
    .sort((a, z) => z.gold.total - a.gold.total)
    .map((item) => {
      const itemCategories = patchChanges?.[item?.id]
        ? [...item.tags, 'Patch']
        : [...item.tags];
      const itemHasGrevious = item.description.includes('Grievous Wounds');
      if (itemHasGrevious) itemCategories.push('GreviousWounds');
      return {
        id: item.id,
        name: item.name,
        description: item.description.startsWith('GeneratedTip')
          ? "Unfortunately this item's description is missing at the moment"
          : item.description,
        categories: itemCategories,
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
      };
    });

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

  const boots = usableItems
    .filter(
      (item) =>
        item.stats.FlatMovementSpeedMod || item.categories.includes('Boots')
    )
    .filter((item) => item.name !== 'Slightly Magical Footware');

  const starters = usableItems.filter((item) => starter[item.id]);

  return {
    items: usableItems
      .map((item) => ({
        ...item,
        search: item.categories.map((c) => c.toLowerCase()).join() || '',
      }))
      .reduce((acc, cur, i) => {
        acc[cur.id] = cur;
        return acc;
      }, {}),

    all: {
      legendaries: legendaries.map((i) => i.id),
      epics: epics.map((i) => i.id),
      basics: basics.map((i) => i.id),
      starters: starters.map((i) => i.id),
      boots: boots.map((i) => i.id),
      consumables: Object.keys(consumables).map((id) => Number(id)),
    },
  };
}
