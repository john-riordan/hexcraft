import { starter } from '../data/starter';

export function buildItemsData(items) {
  const itemsArr = Object.entries(items).map(([id, itemStats]) => ({
    ...itemStats,
    id,
  }));

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
      ...item,
      id: item.id,
      name: item.name,
      categories: item.tags || null,
      priceTotal: item.gold.total,
      from: item.from || [],
      stats: item.stats,
      iconPath: `${item.id}.png`,
      description: item.description,
    }));

  const mythics = usableItems.filter((item) =>
    item.description?.includes('Mythic Passive:')
  );

  const legendaries = usableItems.filter(
    (item) =>
      item.priceTotal > 1500 && !item.description.includes('Mythic Passive:')
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
      !item.name.includes('Stopwatch') &&
      item.name !== 'Sheen' &&
      item.id !== '2010' && // biscuit
      item.id !== '3040' && // seraphs
      item.id !== '3042' && // muramana
      item.id !== '3043' && // muramana
      item.id !== '3048' && // seraphs
      !item.categories.includes('Boots')
  );

  // const ornn = items
  //   .filter((item) => item.name.includes('%i:ornnIcon%'))
  //   .map((item) => ({
  //     id: item.id,
  //     name: item.name.replace('%i:ornnIcon% ', ''),
  //     categories: item.categories,
  //     priceTotal: item.gold.total,
  //     from: item.from,
  //     description: item.description
  //       .replace(/Immolate :/, 'Immolate:')
  //       .replace(/GeneratedTip_Item_7017_ExternalDescription/, deicide)
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

  const boots = usableItems.filter((item) => item.tags?.includes('Boots'));

  const starters = usableItems.filter((item) => starter[item.id]);

  return {
    ornn: {},
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
