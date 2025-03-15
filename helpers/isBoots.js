const BLACKLIST = {
  3172: true, // Gunmetal Greaves doesnt have a "boots" tag for some reason
  2422: true, // Slightly Magical Footware
};

export default function isBoots(item) {
  const categories = item.categories || [];
  const tags = item.tags || [];
  return [...categories, ...tags].includes("Boots") && !BLACKLIST[item.id];
}
