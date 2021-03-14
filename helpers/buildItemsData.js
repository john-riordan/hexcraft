import { starter } from '../data/starter';

export function buildItemsData(
  items,
  cdragonItems,
  patchChanges
) {
  const itemsArr = Object.entries(items).map(
    ([id, itemStats]) => ({
      ...itemStats,
      id,
    })
  );

  const usableItems = itemsArr
    .filter(
      (item) =>
        item.gold.total &&
        item.maps[11] &&
        item.id !== '3040' && // muramana
        item.id !== '3042' // seraphs
    )
    .sort((a, z) => a.gold.total - z.gold.total)
    .map((item) => ({
      id: item.id,
      name: item.name,
      categories: item.tags || null,
      priceTotal: item.gold.total,
      from: item.from || [],
      stats: item.stats,
      iconPath: `${item.id}.png`,
      patchChange: patchChanges[item.id] || null,
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
    (item) =>
      item.description?.includes('Mythic Passive:') ||
      item.id === '6632'
  );

  const legendaries = usableItems.filter(
    (item) =>
      item.priceTotal > 1500 &&
      !item.description.includes('Mythic Passive:')
  );

  const epics = usableItems.filter(
    (item) =>
      item.priceTotal <= 1500 &&
      item.priceTotal > 500 &&
      (item.from.length || item.name === 'Sheen') &&
      !item.categories.includes('Boots')
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
      item.id !== '2010' && // biscuit
      item.id !== '3040' && // seraphs
      item.id !== '3042' && // muramana
      item.id !== '3043' && // muramana
      item.id !== '3048' && // seraphs
      !item.categories.includes('Boots')
  );

  const ornn = cdragonItems
    .filter((item) => item.name.includes('%i:ornnIcon%'))
    .map((item) => ({
      id: item.id,
      name: item.name.replace('%i:ornnIcon% ', ''),
      categories: item.categories,
      priceTotal: item.priceTotal,
      from: item.from,
      description: item.description
        .replace(/Immolate :/, 'Immolate:')
        .replace(
          /<passive>Immolate:<\/passive>/,
          '<immolate> Immolate :</immolate>'
        ),
      iconPath: item.iconPath
        .split('/')
        .slice(-1)[0]
        .toLowerCase(),
    }))
    .reduce(function (acc, cur, i) {
      acc[cur.from[0]] = cur;
      return acc;
    }, {});

  const boots = usableItems
    .filter((item) => item.stats.FlatMovementSpeedMod)
    .filter(
      (item) => item.name !== 'Slightly Magical Footware'
    );

  const starters = usableItems.filter(
    (item) => starter[item.id]
  );

  return {
    ornn: ornn,
    items: usableItems
      .map((item) => ({
        ...item,
        search:
          item.categories
            .map((c) => c.toLowerCase())
            .join() || '',
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
