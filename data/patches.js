import { CHANGE_TYPES } from '../helpers/constants';

export const PATCHES = {
  '14.10.1': {
    2503: {
      change: CHANGE_TYPES.new,
      details: `
        <div>
          <a class="reference-link" href="https://www.leagueoflegends.com/en-us/how-to-play/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5e3ca448dd772c95/663c17f5f807b22771e9bbf2/Blackfire_Torch.png?disposition=inline"></a>
          <h3 class="change-title" id="patch-blackfire-torch"><span class="new">new</span> <a href="https://www.leagueoflegends.com/en-us/how-to-play/">Blackfire Torch</a></h3>
          <blockquote class="blockquote context">
            We have identified a problem that the mage item system is lacking a strong mana item option for sustained damage dealers. The introduction of Blackfire Torch and adjustments on Luden's Companion are both aiming to resolve the problem by offering a variety of mana item choices: Blackfire Torch is designed to appeal to battlemages and control mages that want to do sustained damage, while Luden's Companion can focus more on burst and AoE damage dealers. In terms of roles, we position this item to be good for both mage junglers and laners as long as it fits their needs.
            
          </blockquote>
          <hr class="divider">
          <ul>
            <li><strong>Build Path</strong>: Lost Chapter + Fated Ashes + 700 Gold (2800 gold total cost)</li>
            <li><strong>Ability Power</strong>: 90</li>
            <li><strong>Mana</strong>: 600</li>
            <li><strong>Haste</strong>: 25</li>
            <li><strong>Baleful Blaze</strong>: Dealing damage with abilities causes enemies to burn for 20 + 2% AP magic damage per second for 3 seconds. Deals 20 bonus damage per second to monsters.</li>
            <li><strong>Blackfire</strong>: For each enemy Champion, Epic Monster, and Large Monster affected by your Baleful Blaze, gain 4% AP</li>
          </ul>
        </div>
      `,
    },
    2501: {
      change: CHANGE_TYPES.new,
      details: `
        <div>
          <a class="reference-link" href="https://www.leagueoflegends.com/en-us/how-to-play/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blted3415d80282ac03/663e7957a4bb5f115ffb1b3d/OverlordsBloodMail.png?disposition=inline"></a>
          <h3 class="change-title" id="patch-overlords-bloodmail"><span class="new">new</span><a href="https://www.leagueoflegends.com/en-us/how-to-play/">Overlord's Bloodmail</a></h3>
          <blockquote class="blockquote context">
            Overlord's Bloodmail is intended to fill in the third-ish item slot for health-heavy fighter builds. We believe converting health into damage is a compelling fantasy for fighters and want to create it with this item.
          </blockquote>
          <hr class="divider">
          <ul>
            <li><strong>Build Path</strong>: Tunneler + Tunneler + 1000 Gold</li>
            <li><strong>Total Gold Cost</strong>: 3300 Gold</li>
            <li><strong>Attack Damage</strong>: 40</li>
            <li><strong>Health</strong>: 500</li>
            <li><strong>Tyranny</strong>: Gain 2% of your bonus Health as Attack Damage</li>
            <li><strong>Retribution</strong>: Gain up to 10% increased Attack Damage based on your percent missing Health (Maximum Retribution bonus while below 30% Health)</li>
          </ul>
        </div>
      `,
    },
    3032: {
      change: CHANGE_TYPES.new,
      details: `
        <div>
          <span class="new">new</span><a class="reference-link" href="https://www.leagueoflegends.com/en-us/how-to-play/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1c046bcce6fada81/6643e3ad66b81d2e4433e863/Yun_Tal_Wildarrows.png?disposition=inline"></a>
          <h3 class="change-title" id="patch-yun-tal-wildarrows"><a href="https://www.leagueoflegends.com/en-us/how-to-play/"><span class="new">new</span>Yun Tal Wildarrows</a></h3>
          <blockquote class="blockquote context">
            Our goal with Yun Tal Wildarrows is to add an additional option for AD/Crit users that enables them to keep building offensively while only choosing 1 (or zero) attack speed options. This item should be useful for for those who have a lot of AD (hello Jhin) or those that can quickly deal multiple critical strikes.
          </blockquote>
          <hr class="divider">
          <ul>
            <li><strong>Build Path</strong>: Pickaxe + Noonquiver + 925 Gold (3200 gold total cost)</li>
            <li><strong>Critical Strike Chance</strong>: 25%</li>
            <li><strong>Attack Damage</strong>: 65</li>
            <li><strong>Passive - Serrated Edge</strong>: Critical strikes deal 35% total AD additional physical damage over 2 seconds.</li>
          </ul>
        </div>
      `,
    },
    3172: {
      change: CHANGE_TYPES.new,
      details: `
        <div>
          <a class="reference-link" href="https://www.leagueoflegends.com/en-us/how-to-play/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/3172.png"></a>
          <h3 class="change-title" id="patch-Zephyr"><a href="https://www.leagueoflegends.com/en-us/how-to-play/">Zephyr</a></h3>
          <blockquote class="blockquote context">
            Zephyr is back! This is mostly an experimental take on attempting to give a class that already scales well a way to scale even better. We're mostly interested in seeing if there's any interest in this kind of “full build capstone” effect that we can add to make champions feel satisfied when their build is actually completed.
          </blockquote>
          <hr class="divider">
          <ul>
            <li><strong>Build Path</strong>: Berserker's Greaves + 2000 Gold</li>
            <li>Total Gold Cost: 3100 Gold</li>
            <li>Upgrade from Berserker's Greaves that becomes available after you reach level 15. Still counts as a Boots slot item.</li>
            <li><strong>Attack Speed</strong>: 45</li>
            <li><strong>Move Speed</strong>: 45</li>
            <li>Passive: Gain 5% Move Speed for 6 seconds, stacking up to 15%</li>
          </ul>
        </div>
      `,
    },
  },
};
