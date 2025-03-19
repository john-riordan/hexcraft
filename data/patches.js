import { CHANGE_TYPES } from "../helpers/constants";

export const PATCHES = {
  "15.6.1": {
    6694: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<a href="https://www.leagueoflegends.com/en-us/how-to-play/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d3a31846a12cb0f6f76bdaa470620b169069b5b4-512x512.png"></a>
               		<h3 id="patch-Serylda-grudge" class="change-title"><a href="https://www.leagueoflegends.com/en-us/how-to-play/">Serylda's Grudge</a></h3>
					<blockquote class="blockquote context">
						Serylda's is being adjusted this patch to better match assassins by being pushed toward armor penetration and away from ability haste. This isn't meant to be a very large buff, but should feel better to use for most assassin champions.
					</blockquote>
					<ul>
						<li><strong>Armor Penetration</strong>: 30 ⇒ 35%</li>
						<li><strong>Ability Haste</strong>: 20 ⇒ 15</li>
					</ul>
				</div>
      `,
    },
    3083: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<a href="https://www.leagueoflegends.com/en-us/how-to-play/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/792d82c5ffc09fc88b3c6c43908d0cebdabef4a9-512x512.png"></a>
               		<h3 id="patch-Warmog-armor" class="change-title"><a href="https://www.leagueoflegends.com/en-us/how-to-play/">Warmog's Armor</a></h3>
					<blockquote class="blockquote context">
						Warmogs had a pretty significant power shift moving into this season, and unfortunately it ended up on the weaker side. This patch we're buffing up the capstone effect to make sure this item stays a later-in-the-game purchase on most champions and lowering the gold cost now that it is less in danger of being poached by supports.
					</blockquote>
					<ul>
						<li><strong>Gold Cost</strong>: 3300 ⇒ 3100</li>
						<li><strong>Warmog's Vitality</strong>: Gain bonus health equal to 10% of bonus health from items ⇒ Gain bonus health equal to <strong>12%</strong> of bonus health from items</li>
					</ul>
				</div>
      `,
    },
  },
};
