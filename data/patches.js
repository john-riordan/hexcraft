import { CHANGE_TYPES } from "../helpers/constants";

export const PATCHES = {
  "15.7.1": {
    3803: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
					<a href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2b8e1f1789cc6d60d7531669106723c4da8e3b68-512x512.png"></a>
					<h3 id="patch-Catalyst-of-Eons" class="change-title"><a href="https://www.leagueoflegends.com/">Catalyst of Aeons</a></h3>
					<blockquote class="blockquote context">
						Catalyst of Eons is a little weak for a laning epic. We'd like to preserve its distinct price point from Lost Chapter in order to retain some laning variance, but the item shouldn't be so painful to buy and we'd like its mana to keep up with its sibling.
					</blockquote>
					<ul>
						<li><strong>Build Path</strong>: Ruby Crystal + Sapphire Crystal + 600 gold ⇒ <strong>Ruby Crystal + Ruby Crystal + Sapphire Crystal + 200 gold</strong></li>
						<li><strong>Total Gold Cost</strong>: Unchanged</li>
						<li><strong>Mana</strong>: 300 ⇒ <strong>375</strong></li>
						<li><strong>Eternity Mana Restored from Damage Taken</strong>: 7% ⇒ <strong>10%</strong> (Rog of Ages will also receive the same change)</li>
					</ul>
				</div>
      `,
    },
    6657: {
      change: CHANGE_TYPES.buff,
      details: `
				<div>
					<a href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f2294a3ca2f9f1cb85b9ce5e9678e3b28ca7a543-512x512.png"></a>
					<h3 id="patch-Rod-of-Ages" class="change-title"><a href="https://www.leagueoflegends.com/">Rod of Ages</a></h3>
					<blockquote class="blockquote context">
						Adjusting the Eternity effect to match the Catalyst buff above.
					</blockquote>
					<ul>
						<li><strong>Eternity Mana Restored from Damage Taken</strong>: 7% ⇒ <strong>10%</strong> (Rog of Ages will also receive the same change)</li>
					</ul>
				</div>
			`,
    },
    3179: {
      change: CHANGE_TYPES.change,
      details: `
				<div>
					<a href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3cc34c434e06d1395639cbf1169e28a833e5dddf-512x512.png"></a>
					<h3 id="patch-Umbral-Glaive" class="change-title"><a href="https://www.leagueoflegends.com/">Umbral Glaive</a></h3>
					<blockquote class="blockquote context">
						Umbral Glaive has been in a weak state for a while but we've been hesitant to just strictly buff it due to its extremely powerful passive. We've decided to tone down the frequency of the passive to be less oppressive against enemy vision while buffing its stats and cost. Overall we expect this to be a net buff to the item.
					</blockquote>
					<ul>
						<li><strong>Total Gold Cost</strong>: 2600 ⇒ <strong>2500</strong></li>
						<li><strong>Attack Damage</strong>: 50 ⇒ <strong>55</strong></li>
						<li><strong>Blackout Cooldown</strong>: 50 ⇒ <strong>90</strong></li>
					</ul>
				</div>
			`,
    },
  },
};
