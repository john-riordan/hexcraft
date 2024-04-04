import { CHANGE_TYPES } from '../helpers/constants';

export const PATCHES = {
  '14.7.1': {
    3871: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
					<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.6.1/img/item/3871.png"></a>
					<h3 class="change-title" id="patch-Statikk-Shiv"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Zaz’Zak’s Realmspike</a></h3><br>
					<blockquote class="blockquote context">
						We’re taking a long look at the damage coming out of the support role and this patch we’re going after some exclusively-damage sections.
					</blockquote>
					<p>Zaz’Zak’s is bound to mage supports where champions like Xerath and Lux have support as their strongest role, which leaves us little room to buff them in places like mid lane. Bloodsong creates similar problems for fighters like Camille and Pantheon with respect to their top lane power. In general, we don’t expect these damage-focused champions to switch support items, but would like if enchanters and tanks would build these items less frequently. Imperial Mandate rounds out this list as a support item that provides almost exclusively damage.</p>
					<ul>
						<li><strong>Void Explosion Damage</strong>: 20 (+20%AP) (+4% Target Max HP) ⇒ 10 (+20% AP) (+3% Target Max HP)</li>
						<li><strong>Cooldown</strong>: 8/7/6 at level 1/11/16 ⇒ 10</li>
					</ul>
				</div>
      `,
    },
    3877: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
          <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.6.1/img/item/3877.png"></a>
          <h3 class="change-title" id="patch-Bloodsong"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Bloodsong</a></h3><br>
          <blockquote class="blockquote context">
            See Zaz’Zak for more context.
          </blockquote>
          <ul>
            <li><strong>Spellblade AD Ratio</strong>: 150% ⇒ 100%</li>
          </ul>
        </div>
      `,
    },
    4005: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
          <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.6.1/img/item/4005.png"></a>
          <h3 class="change-title" id="patch-Bloodsong"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Imperial Mandate</a></h3><br>
          <blockquote class="blockquote context">
            See Zaz’Zak for more context.
          </blockquote>
          <ul>
            <li><strong>Current HP Damage</strong>: 12% ⇒ 10%</li>
          </ul>
        </div>
      `,
    },
    3087: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
          <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.6.1/img/item/3087.png"></a>
          <h3 class="change-title" id="patch-Statikk-Shiv"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Statikk Shiv</a></h3><br>
          <blockquote class="blockquote context">
            Statikk Shiv is a bit too strong now that crit ADCs have a great late game awaiting them. So we’ve adjusted the cost so that it doesn’t hastily bring them to the late game as much as it did in the past.
          </blockquote>
          <ul>
            <li><strong>Total Cost</strong>: 2700 ⇒ 2900</li>
          </ul>
        </div>
      `,
    },
  },
};
