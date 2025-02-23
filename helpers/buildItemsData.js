import { EPIC_LEGENDARY_BREAKPOINT } from "./constants";
import { starter } from "../data/starter";
import { basic } from "../data/basic";
import { epic } from "../data/epic";
import { legendary } from "../data/legendary";
import { whitelist } from "../data/whitelist";
import isOrnnItem from "../helpers/isOrnnItem";
import { consumables } from "../data/consumables";
import { baseItems } from "../data/base-items";

export function buildItemsData({
  usePBE = false,
  ddragonItemsMap = {},
  cdragonItemsMap = {},
  merakiItemsMap = {},
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
    const isBoots =
      item.id === 1001 || (item.tags.includes("Boots") && cost >= 900);
    return (cost && isWhitelisted && !isOrnnItem(item)) || isBoots;
  });

  const usableItems = whitelistedItems
    .sort((a, z) => z.gold.total - a.gold.total)
    .map((item) => {
      const itemCategories = patchChanges?.[item?.id]
        ? [...item.tags, "Patch"]
        : [...item.tags];
      const itemHasGrevious = item.description.includes("Grievous Wounds");
      if (itemHasGrevious) itemCategories.push("GreviousWounds");

      const stats = merakiItemsMap[item.id]?.stats || {};

      return {
        id: item.id,
        name: item.name,
        description: item.description.startsWith("GeneratedTip")
          ? "Unfortunately this item's description is missing at the moment"
          : item.description,
        categories: itemCategories,
        priceTotal: item.gold.total,
        from: item.from || [],
        // stats: item.stats,
        stats,
        iconPath: `${cdragonItemsMap[item.id]?.iconPath
          .replace(
            "/lol-game-data/assets/ASSETS",
            "https://raw.communitydragon.org/pbe/game/assets"
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
    const consumable = (item.categories || []).includes("Consumable");
    const boots = (item.categories || []).includes("Boots");
    const isBasic = basic[item.id];

    return (
      epicWhitelist ||
      (!consumable && !boots && !isBasic && lowerPrice && minPrice)
    );
  });

  const basics = usableItems.filter((item) => basic[item.id]);

  const boots = usableItems
    .filter((item) => item.categories.includes("Boots"))
    .filter((item) => item.name !== "Slightly Magical Footware");

  const starters = usableItems.filter((item) => starter[item.id]);

  const items = usableItems
    .map((item) => ({
      ...item,
      search: item.categories.map((c) => c.toLowerCase()).join() || "",
    }))
    .reduce((acc, cur, i) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

  const statGoldValues = {};
  // First pass basic items
  for (const [statKey, { flat, percent }] of Object.entries(baseItems)) {
    statGoldValues[statKey] = {
      flat: 0,
      percent: 0,
    };
    const baseItemFlat = items[flat];
    const baseItemPercent = items[percent];
    if (!baseItemFlat?.from?.length) {
      statGoldValues[statKey].flat = baseItemFlat?.stats?.[statKey]?.flat
        ? baseItemFlat.priceTotal / baseItemFlat.stats[statKey].flat
        : 0;
    }
    if (!baseItemPercent?.from?.length) {
      statGoldValues[statKey].percent = baseItemPercent?.stats?.[statKey]
        ?.percent
        ? baseItemPercent.priceTotal / baseItemPercent.stats[statKey].percent
        : 0;
    }
  }
  // Second pass for non-basic items
  for (const [statKey, { flat, percent }] of Object.entries(baseItems)) {
    if (flat && !statGoldValues[statKey].flat) {
      const item = items[flat];
      if (!item) continue;
      // Remove the value of stats we already calculated from the basic items(ex: attack damage)
      const priceTotal = item
        ? Object.entries(item.stats || {}).reduce((acc, curr) => {
            const [statKey, { flat, percent }] = curr;
            const goldToRemove =
              flat * statGoldValues[statKey].flat +
              percent * statGoldValues[statKey].percent;
            return acc - goldToRemove;
          }, item.priceTotal)
        : 0;
      statGoldValues[statKey].flat = item.stats[statKey].flat
        ? priceTotal / item.stats[statKey].flat
        : 0;
    }
    if (percent && !statGoldValues[statKey].percent) {
      const item = items[percent];
      if (!item) continue;
      // Remove the value of stats we already calculated from the basic items(ex: attack damage)
      const priceTotal = item
        ? Object.entries(item.stats || {}).reduce((acc, curr) => {
            const [statKey, { flat, percent }] = curr;
            const goldToRemove =
              flat * statGoldValues[statKey].flat +
              percent * statGoldValues[statKey].percent;
            return acc - goldToRemove;
          }, item.priceTotal)
        : 0;
      statGoldValues[statKey].percent = item.stats[statKey].percent
        ? priceTotal / item.stats[statKey].percent
        : 0;
    }
  }

  return {
    items,
    statGoldValues,
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
