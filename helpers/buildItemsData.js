import { starter } from '../data/starter';

const divineSunderer = `
  <mainText>
    <stats>
      <attention> 40</attention> Attack Damage<br>
      <attention> 400</attention> Health<br>
      <attention> 20</attention> Ability Haste
    </stats><br>
    <li>
      <passive>Spellblade:</passive> After using an Ability, your next attack is enhanced with an additional <physicalDamage>10% target max Health physical damage</physicalDamage> (1.5s cooldown). If the target is a champion, <healing>restore (50% melee / 30% ranged)</healing> of the enhanced damage.
    </li>
    <li>
      <br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> 5%</attention> Armor Penetration.
    </li>  
  </mainText>
  `;

const relic = `
  <mainText>
    <stats>
      <attention> 5</attention> Ability Power<br>
      <attention> 30</attention> Health<br>
      <attention> 25%</attention> Base Health Regen<br>
      <attention> 2</attention> Gold Per 10 Seconds
    </stats><br>
    <li><passive>Spoils of War:</passive> While nearby an ally champion, Attacks execute minions below 0% of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).
    <li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Targon's Buckler</rarityGeneric>, gaining  <active>Active -</active> <active>Warding</active>.<br>
    <rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules>
  </mainText>
  `;

const shoulderguards = `
  <mainText>
    <stats>
      <attention> 3</attention> Attack Damage<br>
      <attention> 30</attention> Health<br>
      <attention> 25%</attention> Base Health Regen<br>
      <attention> 2</attention> Gold Per 10 Seconds
    </stats><br>
    <li><passive>Spoils of War:</passive> While nearby an ally champion, Attacks execute minions below 0% of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).
    <li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Runesteel Spaulders</rarityGeneric>, gaining  <active>Active -</active> <active>Warding</active>.<br>
    <rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules>
  </mainText>
  `;

export function buildItemsData(items) {
  const usableItems = items
    .filter(
      (item) =>
        (item.inStore ||
          item.name === 'Watchful Wardstone' ||
          item.id === 3042 ||
          item.id === 3048) &&
        item.priceTotal &&
        item.mapStringIdInclusions.includes('SR')
    )
    .sort((a, z) => a.priceTotal - z.priceTotal)
    .map((item) => ({
      id: item.id,
      name: item.name,
      categories: item.categories,
      priceTotal: item.priceTotal,
      description: item.description
        .replace(/<br>/, '<br>')
        .replace(/GeneratedTip_Item_6632_ExternalDescription/, divineSunderer)
        .replace(/GeneratedTip_Item_3858_ExternalDescription/, relic)
        .replace(/GeneratedTip_Item_3854_ExternalDescription/, shoulderguards)
        .replace(/Immolate :/, 'Immolate:')
        .replace(
          /<passive>Immolate:<\/passive>/,
          '<immolate> Immolate :</immolate>'
        ),
      from: item.from,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }));

  const mythics = usableItems.filter(
    (item) =>
      item.description.includes('Mythic Passive:') ||
      item.name === 'Divine Sunderer'
  );

  const legendaries = usableItems.filter(
    (item) =>
      item.priceTotal > 1500 &&
      !item.description.includes('Mythic Passive:') &&
      item.name !== 'Divine Sunderer'
  );

  const epics = usableItems.filter(
    (item) =>
      item.priceTotal <= 1500 &&
      item.priceTotal > 500 &&
      (item.from.length || item.name === 'Sheen') &&
      !item.isEnchantment &&
      !item.categories.includes('Boots')
  );

  const basics = usableItems.filter(
    (item) =>
      !starter[item.id] &&
      item.priceTotal &&
      !item.from.length &&
      !item.categories.includes('Consumable') &&
      item.name !== 'Sheen' &&
      item.name !== 'Broken Stopwatch' &&
      !item.categories.includes('Boots') &&
      !item.requiredBuffCurrencyCost
  );

  const boots = usableItems.filter((item) => item.categories.includes('Boots'));

  const starters = usableItems.filter((item) => starter[item.id]);

  return {
    items: usableItems
      .map((item) => ({
        ...item,
        search: item.categories.map((c) => c.toLowerCase()).join(),
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
