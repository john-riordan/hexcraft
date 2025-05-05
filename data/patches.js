import { CHANGE_TYPES } from "../helpers/constants";

export const PATCHES = {
  "15.9.1": {
    3009: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
					<a href="https://www.leagueoflegends.com/en-us/how-to-play/" class="reference-link"><img src="https://am-a.akamaihd.net/image?f=https://ddragon.leagueoflegends.com/cdn/15.8.1/img/item/3009.png"></a>
					<h3 id="patch-Boots-of-Swiftness" class="change-title"><a href="https://www.leagueoflegends.com/en-us/how-to-play/">Boots of Swiftness</a></h3>
					<blockquote class="blockquote context">
						Boots of Swiftness are a bit overpowered relative to other boots, leading to champions zipping around combat more than we’d like. Ultimately, we’re going with a small direct nerf that should keep it in line with other boot options.
						
					</blockquote>
					<ul>
						<li><strong>Movement Speed</strong>: 60 ⇒ 55</li>
					</ul>
				</div>
      `,
    },
    3010: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
					<a href="https://www.leagueoflegends.com/en-us/how-to-play/" class="reference-link"><img src="https://am-a.akamaihd.net/image?f=https://ddragon.leagueoflegends.com/cdn/15.8.1/img/item/3010.png"></a>
					<h3 id="patch-Symbiotic-Soles" class="change-title"><a href="https://www.leagueoflegends.com/en-us/how-to-play/">Symbiotic Soles</a></h3>
					<blockquote class="blockquote context">
						Symbiotic Soles are a solid option for supports, which we’re very happy about, but they’re too game-warping for laners, as the empowered Recall lets them quickly reset every few waves, removing all sense of attrition. So we’re making some adjustments to retain their power for roaming around the map but make them worse when spamming Recall over and over.
						
					</blockquote>
					<ul>
						<li><strong>NEW</strong>: Now grants 10 out of combat Movement Speed</li>
						<li><strong>REMOVED</strong>: No longer grants Empowered Recall</li>
					</ul>
				</div>
      `,
    },
    6657: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
					<a href="https://www.leagueoflegends.com/en-us/how-to-play/" class="reference-link"><img src="https://am-a.akamaihd.net/image?f=https://ddragon.leagueoflegends.com/cdn/15.8.1/img/item/6657.png"></a>
					<h3 id="patch-Rod-of-Ages" class="change-title"><a href="https://www.leagueoflegends.com/en-us/how-to-play/">Rod of Ages</a></h3>
					<blockquote class="blockquote context">
						Rod of Ages’ new build path has made it overtake mage mana itemization, and as a result, its high durability has slowed down champion interactions below what we think makes for the best gameplay. We think as a whole, mages are rather balanced and we intend to ship a larger pass on mage itemization to make sure all AP items are worthy of purchasing in an upcoming patch, but right now we want to tap the newly-popular Rod of Ages to make sure bursty champions can attack more normal-sized health pools.
						
					</blockquote>
					<ul>
						<li><strong>Initial Health</strong>: 400 ⇒ 350</li>
						<li><strong>Maximum Health</strong>: 500 ⇒ 450</li>
						<li><strong>Initial Ability Power</strong>: 50 ⇒ 45</li>
						<li><strong>Maximum Ability Power</strong>: 80 ⇒ 75</li>
					</ul>
				</div>
      `,
    },
    3174: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<h4 class="change-detail-title">Armored Advance</h4>
					<ul>
						<li><strong>Cost</strong>: 750 ⇒ 500 gold</li>
					</ul>
				</div>
      `,
    },
    3173: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<h4 class="change-detail-title">Armored Advance</h4>
					<ul>
						<li><strong>Cost</strong>: 750 ⇒ 500 gold</li>
					</ul>
				</div>
      `,
    },
    3171: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<h4 class="change-detail-title">Armored Advance</h4>
					<ul>
						<li><strong>Cost</strong>: 750 ⇒ 500 gold</li>
					</ul>
				</div>
      `,
    },
    3176: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<h4 class="change-detail-title">Forever Forward</h4>
					<ul>
						<li><strong>Cost</strong>: 750 ⇒ 500 gold</li>
						<li><strong>Total Bonus Movespeed Out of Combat</strong>: 10% ⇒ 8%</li>
					</ul>
				</div>
      `,
    },
    3172: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<h4 class="change-detail-title">Armored Advance</h4>
					<ul>
						<li><strong>Cost</strong>: 750 ⇒ 500 gold</li>
					</ul>
				</div>
      `,
    },
    3175: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<h4 class="change-detail-title">Spellslinger’s Shoes</h4>
					<ul>
						<li><strong>Cost</strong>: 750 ⇒ 500 gold</li>
						<li><strong>Magic Penetration</strong>: 8% ⇒ 7%</li>
					</ul>
				</div>
      `,
    },
    3170: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<h4 class="change-detail-title">Swiftmarch</h4>
					<ul>
						<li><strong>Cost</strong>: 750 ⇒ 500 gold</li>
						<li><strong>Movement Speed</strong>: 70 ⇒ 65</li>
						<li><strong>REMOVED</strong>: No longer grants 4% increased total Movement Speed</li>
						<li><strong>NEW</strong>: Now grants Adaptive Force equal to 5% of total Movement Speed</li>
					</ul>
				</div>
      `,
    },
  },
};
