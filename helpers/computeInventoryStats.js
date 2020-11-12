const computeInventoryStats = (inventoryItems) => {
  const inventoryStats = {};

  for (const item of inventoryItems) {
    const itemStats = Object.entries(item.stats);
    for (const [key, value] of itemStats) {
      if (inventoryStats[key]) {
        inventoryStats[key] += value;
      } else {
        inventoryStats[key] = value;
      }
    }
  }

  return inventoryStats;
};

export default computeInventoryStats;
