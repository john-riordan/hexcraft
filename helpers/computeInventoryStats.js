const computeInventoryStats = (inventoryItems) => {
  const inventoryStats = {};

  for (const item of inventoryItems) {
    const itemStats = Object.entries(item.stats);
    for (const [statKey, { flat, percent }] of itemStats) {
      if (!inventoryStats[statKey])
        inventoryStats[statKey] = { flat: 0, percent: 0 };
      inventoryStats[statKey].flat += flat;
      inventoryStats[statKey].percent += percent;
    }
  }

  return inventoryStats;
};

export default computeInventoryStats;
