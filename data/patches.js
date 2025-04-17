import { CHANGE_TYPES } from "../helpers/constants";

export const PATCHES = {
  "15.8.1": {
    3137: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<h4 class="change-detail-title ability-title"><img src="https://am-a.akamaihd.net/image?f=https://ddragon.leagueoflegends.com/cdn/15.7.1/img/item/3137.png">Cryptbloom</h4>
					<blockquote class="blockquote context">
						Cryptbloom has fallen completely behind Void Staff for mages and we'd like this comparison to be fairer. As a result, we're delivering a light buff to Cryptbloom that should help to keep it distinct based on what you're looking for.
					</blockquote>
					<hr class="divider">
					<ul>
						<li><strong>Ability Haste</strong>: 15 ⇒ <strong>20</strong></li>
					</ul>
				</div>
      `,
    },
    3742: {
      change: CHANGE_TYPES.nerf,
      details: `
				<div>
					<h4 class="change-detail-title ability-title"><img src="https://am-a.akamaihd.net/image?f=https://ddragon.leagueoflegends.com/cdn/15.7.1/img/item/3742.png">Dead Man's Plate</h4>
					<blockquote class="blockquote context">
						The slow resistance stat on Dead Man's Plate has been too effective at covering a few champion's core weakness lately and we feel like this is a good time to reduce the potency of the slow resist on a single purchase.
					</blockquote>
					<hr class="divider">
					<ul>
						<li><strong>Slow Resist</strong>: 25% ⇒ <strong>15%</strong></li>
					</ul>
				</div>
			`,
    },
    6701: {
      change: CHANGE_TYPES.buff,
      details: `
				<div>
					<h4 class="change-detail-title ability-title"><img src="https://am-a.akamaihd.net/image?f=https://ddragon.leagueoflegends.com/cdn/15.7.1/img/item/6701.png">Opportunity</h4>
					<blockquote class="blockquote context">
						Opportunity has dropped in popularity over time and could use a buff to make it a more competitive option in the Lethality item space. Additionally we're lowering the passive Lethality gain on the ranged split so ranged users don't benefit quite as much from the base stat buffs as melee users do.
					</blockquote>
					<hr class="divider">
					<ul>
						<li><strong>Lethality</strong>: 15 ⇒ <strong>18</strong></li>
						<li><strong>Preparation</strong>: After being out-of-combat with enemy champions for 8 seconds, gain 11 (melee) / 7 (ranged) lethality. ⇒ After being out-of-combat with enemy champions for 8 seconds, gain <strong>11 (melee) / 5 (ranged)</strong> lethality.</li>
					</ul>
				</div>
			`,
    },
    2501: {
      change: CHANGE_TYPES.buff,
      details: `
				<div>
					<h4 class="change-detail-title ability-title"><img src="https://am-a.akamaihd.net/image?f=https://ddragon.leagueoflegends.com/cdn/15.7.1/img/item/2501.png">Overlord's Bloodmail</h4>
					<blockquote class="blockquote context">
						Overlord's has been fine, but not exceptionally powerful, for most of its lifetime. Looking to buff it into a position where it's clearly better than some other items for heavier fighters, especially in the later slots.
					</blockquote>
					<hr class="divider">
					<ul>
						<li><strong>Tyranny</strong>: Bonus AD equal to 2% of bonus health ⇒ <strong>Bonus AD equal to 2.5% of bonus health</strong></li>
						<li><strong>Retribution</strong>: 0-10% (based on missing health) bonus AD ⇒ <strong>0-12% (based on missing health) bonus AD</strong></li>
					</ul>
				</div>
			`,
    },
  },
};
