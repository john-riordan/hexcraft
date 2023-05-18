import { BLACKLISTED_ITEMS, MYTHIC_WHITELIST } from './constants';
import { starter } from '../data/starter';

export function buildItemsData(items, cdragonItems, patchChanges) {
  const itemsArr = cdragonItems.map(itemStats => ({
    ...itemStats,
    id: Number(itemStats.id),
    tags: itemStats.categories ?? [],
    stats: items[itemStats.id]?.stats ?? {},
    gold: {
      total: itemStats.priceTotal,
    },
  }));

  const usableItems = itemsArr
    .filter(
      item =>
        item.gold.total &&
        /* Temporary due to Riot messing up info about items on maps */
        // item.maps[11] &&
        !Object.keys(BLACKLISTED_ITEMS).includes(item.id) &&
        item?.requiredAlly !== 'Ornn' &&
        !item.description.includes('ornnBonus') &&
        item.id !== 4403
    )
    .sort((a, z) => z.gold.total - a.gold.total)
    .map(item => ({
      id: item.id,
      name: item.name,
      categories: patchChanges?.[item?.id]
        ? [...item.tags, 'Patch']
        : [...item.tags],
      priceTotal: item.gold.total,
      from: item.from || [],
      stats: item.stats,
      iconPath: item.id ? `${item.id}.png` : '',
      iconPath: `${item.iconPath
        .replace(
          '/lol-game-data/assets/ASSETS',
          'https://raw.communitydragon.org/pbe/game/assets'
        )
        .toLowerCase()}`,
      patchChange: patchChanges?.[item?.id] || null,
      description: item.description
        .replace(
          /{{ Item_Range_Mod_0_Perc }}/,
          'restore (50% melee / 30% ranged)'
        )
        .replace(
          /{{ Item_Mythic_Passive }}/,
          '<rarityMythic>Mythic Passive:</rarityMythic>'
        ),
    }));

  const mythics = usableItems.filter(
    item =>
      MYTHIC_WHITELIST[item.id] || item.description?.includes('<rarityMythic>')
  );

  const legendaries = usableItems.filter(item => {
    return (
      item.priceTotal > 1500 &&
      !item.description.includes('Mythic Passive:') &&
      !MYTHIC_WHITELIST[item.id]
    );
  });

  const epics = usableItems.filter(
    item =>
      item.priceTotal <= 1500 &&
      item.priceTotal > 500 &&
      (item.from.length || item.name === 'Sheen')
  );

  const basics = usableItems.filter(
    item =>
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

  const ornn = cdragonItems
    .filter(item => item.description.includes('ornnBonus'))
    .map(item => ({
      id: item.id,
      name: item.name,
      categories: item.categories,
      priceTotal: item.priceTotal,
      from: item.from,
      description: item.description
        .replace(/Immolate :/, 'Immolate:')
        .replace(
          /<passive>Immolate:<\/passive>/,
          '<immolate> Immolate :</immolate>'
        ),
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }))
    .reduce(function (acc, cur, i) {
      acc[cur.from[0]] = cur;
      return acc;
    }, {});

  const boots = usableItems
    .filter(item => item.stats.FlatMovementSpeedMod)
    .filter(item => item.name !== 'Slightly Magical Footware');

  const starters = usableItems.filter(item => starter[item.id]);

  return {
    ornn: ornn,
    items: usableItems
      .map(item => ({
        ...item,
        search: item.categories.map(c => c.toLowerCase()).join() || '',
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
      boots,
    },
    mythicDictionary: mythics.reduce(function (acc, cur) {
      acc[cur.id] = cur.name;
      return acc;
    }, {}),
  };
}
