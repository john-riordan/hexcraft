export function calculateGoldEfficiency(item, statGoldValues = {}) {
  let statsValue = 0;

  if (!item) return statsValue;

  for (const [statKey, statValue] of Object.entries(item.stats)) {
    if (!statGoldValues[statKey]) continue;
    const statFlatValue = statGoldValues[statKey].flat;
    const statPercentValue = statGoldValues[statKey].percent;

    statsValue += statFlatValue * statValue.flat;
    statsValue += statPercentValue * statValue.percent;
  }

  const goldEfficiency = statsValue / item.priceTotal;

  return goldEfficiency;
}
