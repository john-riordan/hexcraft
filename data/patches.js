import { CHANGE_TYPES } from '../helpers/constants';

export const PATCHES = {
  '13.10.1': {
    3124: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3124.png"></a>
        <h3 class="change-title" id="patch-Guinsoos-Rageblade"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Guinsoo's Rageblade</a></h3>
        <blockquote class="blockquote context">
          Guinsoo’s Rageblade is back as the pinnacle hybrid on-hit item! Many of its old rules like extra on-hits and converting crit chance into on-hit damage are still in place. But now it has a specific focus on enabling hybrid damage champions through its mixed-penetration mythic passive (since neither Void Staff nor Last Whisper upgrades typically make sense on such champions.)
        </blockquote>
        <hr class="divider">
        <ul>
          <li><span class="new">new</span><strong>Tier Change</strong>: Legendary Tier ⇒ Mythic Tier</li>
          <li><strong>Total Cost</strong>: 2600 ⇒ 3200</li>
          <li><strong>Item Recipe</strong>: Rageknife + Cloak of Agility + Dagger + 900 gold ⇒ Amplifying Tome + Rageknife + Pickaxe + 690 Gold</li>
          <li><span class="new">new</span><strong>Attack Damage</strong>: 30</li>
          <li><span class="new">new</span><strong>Ability Power</strong>: 30</li>
          <li><strong>Attack Speed</strong>: 45% ⇒ 25%</li>
          <li><span class="new">new</span><strong>Unique Passive - Wrath</strong>: Attacks apply 30 magic damage On-Hit. Convert your Critical Strike Chance into up to 150 more.</li>
          <li><span class="new">new</span><strong>Unique Passive - Seething Strike</strong>: Basic attacks grant a stack of 8% attack speed, up to 4 times. At max stacks, every third attack applies on-hit effects twice.</li>
          <li><span class="new">new</span><strong>Mythic Passive</strong>: Empowers each of your other Legendary items with 5% Armor Penetration and 6% Magic Penetration.</li>
        </ul>
      </div>
      `,
    },
    3072: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3072.png"></a>
				<h3 class="change-title" id="patch-Bloodthirster"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Bloodthirster</a></h3>
				<blockquote class="blockquote context">
					With Immortal Shieldbow moving to a Legendary slot for all crit users, Bloodthirster needs a new niche within the life steal item space. So, buying BT is a shot call that you’ll remain healthy and undisturbed on the back line and helps top off your health between engagements.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 3200 <em>(Note: Unchanged)</em></li>
					<li><strong>Item Recipe</strong>: B.F. Sword + Cloak of Agility + Vampiric Scepter + 400 Gold <em>(Note: Unchanged)</em></li>
					<li><strong>Attack Damage</strong>: 55 <em>(Note: Unchanged)</em></li>
					<li><strong>Critical Strike Chance</strong>: 20% <em>(Note: Unchanged)</em></li>
					<li><strong>Life Steal</strong>: 15% ⇒ 18%</li>
					<li><span class="new">new</span><strong>Unique Passive - Engorge</strong>: While above 50% Health, gain an additional 10-40 Attack Damage (based on level). <em></em></li>
				</ul>
			</div>
      `,
    },
    6671: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6671.png"></a>
				<h3 class="change-title" id="patch-Galeforce"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Galeforce</a></h3>
				<blockquote class="blockquote context">
					Galeforce is the one crit mythic item that’s remaining mythic. The opportunity cost of Infinity Edge, Quickblades, or Rageblade is meaningful in terms of DPS but if your path to victory is through helping assassinate a squishy champion (or not being assassinated yourself), 90% DPS is much better than 0%.<br>
					<br>
					The specific numbers on Galeforce land it squarely stronger than the old version against squishies but requires building more crit chance to make use of that power, which should help keep it from being poached by assassins.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 3400 <em>(Note: Unchanged)</em></li>
					<li><strong>Item Recipe</strong>: Noonquiver + Cloak of Agility + Pickaxe + 625 gold ⇒ B. F. Sword + Zeal + Long Sword + 650 Gold</li>
					<li><strong>Attack Damage</strong>: 60 ⇒ 55</li>
					<li><strong>Attack Speed</strong>: 20% ⇒ 15%</li>
					<li><strong>Critical Strike Chance</strong>: 20% <em>(Note: Unchanged)</em></li>
					<li><span class="new">new</span><strong>Bonus Movement Speed</strong>: 7%</li>
					<li><strong>Active - Cloudburst</strong>: Dash and deal 150-350 (plus up to 250, based on Critical Strike Chance) physical damage to the lowest health nearby enemy, prioritizing champions. Damage is increased based on your target's missing health. (Cooldown: 90 seconds) <em>(Note: Maximum execution threshold: 25% current health, Maximum execution strength: 60% bonus damage.)</em></li>
					<li><strong>Mythic Passive</strong>: Empowers each of your other Legendary items with 5 Attack Damage.</li>
				</ul>
			</div>
      `,
    },
    3051: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3051.png"></a>
				<h3 class="change-title" id="patch-Hearthbound-Axe"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Hearthbound Axe</a></h3>
				<blockquote class="blockquote context">
					Alongside the various large mythic and legendary updates, we’re also making a slew of efficiency-focused changes to epic items. Hearthbound Axe was one underperforming epic that’s received efficiency buffs.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 1000 ⇒ 1100</li>
					<li><strong>Item Recipe</strong>: Long Sword + Dagger + 350 gold ⇒ Long Sword + Dagger + Long Sword + 100 gold</li>
					<li><strong>Attack Damage</strong>: 15 ⇒ 20</li>
				</ul>
			</div>
      `,
    },
    6673: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6673.png"></a>
				<h3 class="change-title" id="patch-Immortal-Shieldbow"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Immortal Shieldbow</a></h3>
				<blockquote class="blockquote context">
					Demoting Immortal Shieldbow to a legendary item meant trimming its statline down somewhat. Shieldbow makes sense as a generically-accessible source of anti-burst for crit users, so it’s got an easy-to-appreciate stat profile of attack damage. One note of caution: Shieldbow is not meant to be bought early as its shield does not increase until level 12.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><span class="new">new</span><strong>Tier Change</strong>: Mythic Tier ⇒ Legendary Tier</li>
					<li><strong>Total Cost</strong>: 3400 ⇒ 3000</li>
					<li><strong>Item Recipe</strong>: Noonquiver + Cloak of Agility + Vampiric Scepter + 600 gold ⇒ Pickaxe + Cloak of Agility + Vampiric Scepter + 625 Gold</li>
					<li><strong>Attack Damage</strong>: 50 <em>(Note: Unchanged)</em></li>
					<li><strong>Critical Strike Chance</strong>: 20% <em>(Note: Unchanged)</em></li>
					<li><strong>Life Steal</strong>: 7% <em>(Note: Unchanged)</em></li>
					<li><span class="removed">removed</span><strong>Attack Speed</strong>: 20% ⇒ 0 (Removed)</li>
					<li><strong>Unique Passive - Lifeline Shield Strength</strong>: If you would take damage that would reduce you below 30% of your maximum health, you first gain a 250-630 (based on level) shield for 3 seconds. ⇒ If you would take damage that would reduce you below 30% of your maximum health, you first gain a <strong>215-500</strong> (based on level) shield for 3 seconds. <em>(Note: Lifeline’s shield is back loaded toward later levels.)</em></li>
					<li><strong>Unique Passive - Lifeline Bonus Stats</strong>: When Lifeline is triggered the user gains 15-35 AD for 8 seconds. ⇒ When Lifeline is triggered the user gains <strong>30% Attack Speed</strong> for 8 seconds.</li>
				</ul>
			</div>
      `,
    },
    3031: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3031.png"></a>
				<h3 class="change-title" id="patch-Infinity-Edge"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Infinity Edge</a></h3>
				<blockquote class="blockquote context">
					Across League’s lifetime, Infinity Edge has almost always been a mythic item for AD Carries in everything but name, so now we’re just making it official. It’s got a simple stat profile and a simple purpose: Deal up to 20% more auto-attack damage based on your critical strike chance. It’s good at it. The Mythic Passive is intentionally pretty bland because IE already does a great job of making your other items feel awesome.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><span class="new">new</span><strong>Tier Change</strong>: Legendary Tier ⇒ Mythic Tier</li>
					<li><strong>Total Cost</strong>: 3400 <em>(Note: Unchanged)</em></li>
					<li><strong>Item Recipe</strong>: B. F. Sword + Pickaxe + Cloak of Agility + 625 Gold <em>(Note: Unchanged)</em></li>
					<li><strong>Attack Damage</strong>: 70 <em>(Note: Unchanged)</em></li>
					<li><strong>Critical Strike Chance</strong>: 20% <em>(Note: Unchanged)</em></li>
					<li><strong>Critical Strike Damage</strong>: 35% <em>(Note: Identical to the removed Perfection passive)</em></li>
					<li><span class="new">new</span><strong>Mythic Passive</strong>: Empowers each of your other Legendary items with 5 Attack Damage</li>
				</ul>
			</div>
      `,
    },
    2015: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/2015.png"></a>
				<h3 class="change-title" id="patch-Kircheis-Shard"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Kircheis Shard</a></h3>
				<blockquote class="blockquote context">
					Energize’s effect of infrequent big hits feels more at home with attack damage being its core stat instead of attack speed. There are several other Energize items getting updates in this patch that embrace this change as well. Kircheis is also getting a small increase to its gold efficiency as the item isn’t very strong in the live game.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 700 <em>(Note: Unchanged)</em></li>
					<li><strong>Item Recipe</strong>: Dagger + 400 gold ⇒ Long Sword + 350 gold</li>
					<li><span class="new">new</span><strong>Attack Damage</strong>: 15</li>
					<li><span class="removed">removed</span><strong>Attack Speed</strong>: 15% ⇒ 0% (Removed)</li>
					<li><strong>Unique Passive - Jolt</strong>: Energized attacks apply 80 bonus magic damage ⇒ Energized attacks apply <strong>60</strong> bonus magic damage</li>
				</ul>
			</div>
      `,
    },
    6672: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6672.png"></a>
				<h3 class="change-title" id="patch-Kraken-Slayer"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Kraken Slayer</a></h3>
				<blockquote class="blockquote context">
					Kraken Slayer went through several iterations finding its new home as a Legendary item before landing on this version. Ultimately, Kraken is meant to be an incredible early item for high attack speed champions that still holds up late. Its damage ramping up against a target helps it retain a bit of that anti-tank flavor, but make no mistake: it’s no replacement for Lord Dominik’s Regards for tank-busting.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><span class="new">new</span><strong>Tier Change</strong>: Mythic Tier ⇒ Legendary Tier</li>
					<li><strong>Total Cost</strong>: 3400 ⇒ 3000</li>
					<li><strong>Item Recipe</strong>: Noonquiver + Cloak of Agility + Pickaxe + 625 gold ⇒ Noonquiver + Cloak of Agility + Recurve Bow + 400 Gold</li>
					<li><strong>Attack Damage</strong>: 65 ⇒ 40</li>
					<li><strong>Attack Speed</strong>: 25% ⇒ 30%</li>
					<li><strong>Critical Strike Chance</strong>: 20% <em>(Note: Unchanged)</em></li>
					<li><span class="new">new</span><strong>Unique Passive - Bring It Down</strong>: Every third Attack applies 20 + 60% Total AD + 45% AP bonus magic damage. Subsequent triggers on the same target within 6 seconds increases this damage by 50% (Up to a maximum of 100% increased damage).</li>
				</ul>
			</div>
      `,
    },
    3139: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3139.png"></a>
				<h3 class="change-title" id="patch-Mercurial-Scimitar"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Mercurial Scimitar</a></h3>
				<blockquote class="blockquote context">
					Mercurial Scimitar is nearly never purchased and could stand to receive a small buff. There’s still a massive damage loss compared to an offensive-oriented item but now it gives enough MR to be worth considering in a few more situations.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Magic Resistance</strong>: 40 ⇒ 50</li>
				</ul>
			</div>
      `,
    },
    3033: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3033.png"></a>
				<h3 class="change-title" id="patch-Mortal-Reminder"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Mortal Reminder</a></h3>
				<blockquote class="blockquote context">
					Mortal Reminder fares much, much worse than Lord Dominik’s Regards and feels like a punishment if a crit user is the one applying Grievous Wounds. A simple stat buff hopefully brings it closer to parity with LDR.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Attack Damage</strong>: 35 ⇒ 40</li>
				</ul>
			</div>
      `,
    },
    6675: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6675.png"></a>
				<h3 class="change-title" id="patch-Navori-Quickblades"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Navori Quickblades</a></h3>
				<blockquote class="blockquote context">
					Welcome to the Mythic league, Navori Quickblades! Quickblades is an excellent item for crit users with high uptime on both basic attacks and abilities. Giving up to 20% more ability damage based on crit chance and the ability to refresh those abilities through rapid attacking, Quickblades serves those champions extremely well and feels like a capstone-level effect. Like Infinity Edge, Quickblades already does a great job of amplifying everything else bought alongside it, so it simply provides some ability haste through its mythic passive.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><span class="new">new</span><strong>Tier Change</strong>: Legendary Tier ⇒ Mythic Tier</li>
					<li><strong>Total Cost</strong>: 3400 <em>(Note: Unchanged)</em></li>
					<li><strong>Item Recipe</strong>: Caulfield's Warhammer + Pickaxe + Cloak of Agility + 825 gold <em>(Note: Unchanged)</em></li>
					<li><strong>Attack Damage</strong>: 60 <em>(Note: Unchanged)</em></li>
					<li><strong>Critical Strike Chance</strong>: 20% <em>(Note: Unchanged)</em></li>
					<li><strong>Ability Haste</strong>: 20 <em>(Note: Unchanged)</em></li>
					<li><strong>Unique Passive - Transcendence</strong>: Attacks reduce non-Ultimate Ability cooldowns by 12% of their remaining cooldown</li>
					<li><strong>Unique Passive - Impermanence</strong>: Your abilities deal up to 20% increased damage based on Critical Strike Chance</li>
					<li><strong>Mythic Passive</strong>: Empowers each of your other Legendary items with 5 Ability Haste</li>
				</ul>
			</div>
      `,
    },
    3046: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3046.png"></a>
				<h3 class="change-title" id="patch-Phantom-Dancer"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Phantom Dancer</a></h3>
				<blockquote class="blockquote context">
					In an effort to make window shopping more intuitive for crit users, Phantom Dancer has been increased to 2800 gold with a small stat increase to go alongside it.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2600 ⇒ 2800</li>
					<li><strong>Item Recipe</strong>: Long Sword + Zeal + Long Sword + 850 gold ⇒ Hearthbound Axe + Zeal + 600 gold</li>
					<li><strong>Attack Speed</strong>: 25% ⇒ 30%</li>
				</ul>
			</div>
      `,
    },
    6677: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6677.png"></a>
				<h3 class="change-title" id="patch-Rageknife"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Rageknife</a></h3>
				<blockquote class="blockquote context">
					Rageknife has been remade to fit in with the new version of Guinsoo’s Rageblade, providing a smaller version of the ramping attack speed effect.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 800 gold ⇒ 1200 gold</li>
					<li><strong>Item Recipe</strong>: Dagger + Dagger + 200 gold ⇒ Dagger + Dagger + 600 Gold</li>
					<li><strong>Attack Speed</strong>: 25% <em>(Note: Unchanged)</em></li>
					<li><span class="new">new</span><strong>Unique Passive - Wrath</strong>: This item grants 20 magic damage On-Hit</li>
					<li><span class="new">new</span><strong>Unique Passive - Seething Strike</strong>: Attacks grant 5% Attack Speed, stacking up to 3 times for a maximum of 15% Attack Speed</li>
				</ul>
			</div>
      `,
    },
    3094: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3094.png"></a>
				<h3 class="change-title" id="patch-Rapid-Firecannon"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Rapid Firecannon</a></h3>
				<blockquote class="blockquote context">
					Rapid Firecannon’s purpose is to land individual snipes from out of range of counter-attack and so its stat profile has been updated to reinforce that niche. The significant price increase retains a similar level of gold efficiency.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2500 ⇒ 3000</li>
					<li><strong>Item Recipe</strong>: Zeal + Kircheis Shard + 750 gold ⇒ Long Sword + Zeal + Kircheis Shard + 850 gold</li>
					<li><span class="new">new</span><strong>Attack Damage</strong>: 30</li>
					<li><strong>Attack Speed</strong>: 35% ⇒ 15%</li>
					<li><strong>Critical Strike Chance</strong>: 20% <em>(Note: Unchanged)</em></li>
					<li><strong>Bonus Movement Speed</strong>: 7% <em>(Note: Unchanged)</em></li>
					<li><strong>Unique Passive - Sharpshooter</strong>: Your Energized attack applies 120 bonus magic damage. In addition, Energized attacks gain up to 35% bonus Attack Range ⇒ Your Energized Attack applies <strong>60-140</strong> (based on level) bonus magic damage. In addition, Energized attacks gain up to 35% bonus Attack Range</li>
				</ul>
			</div>
      `,
    },
    1043: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/1043.png"></a>
				<h3 class="change-title" id="patch-Recurve-Bow"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Recurve Bow</a></h3>
				<blockquote class="blockquote context">
					Recurve Bow is another epic item being retuned to bring the gold efficiency of components closer together. Shrinking it also allows its placement in more legendary items without having to retune those numbers. Moving its on-hit damage to magic is an experiment in making on-hit effects more noticeable.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 1000 ⇒ 700</li>
					<li><strong>Item Recipe</strong>: Dagger + Dagger + 400 gold ⇒ Dagger + 400 gold</li>
					<li><strong>Attack Speed</strong>: 25% ⇒ 15%</li>
					<li><strong>Unique Passive - Steel Tipped</strong>: 15 bonus physical damage on-hit ⇒ 15 bonus <strong>magic damage</strong> on-hit</li>
				</ul>
			</div>
      `,
    },
    3085: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3085.png"></a>
				<h3 class="change-title" id="patch-Runaans-Hurricane"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Runaan's Hurricane</a></h3>
				<blockquote class="blockquote context">
					Hurricane has grown to 2800 gold to help place it in direct consideration with other marksman items. On-hit damage with less attack speed should help it find a home in on-hit builds that risk over-capping their attack speed, while an increased AD ratio on the bolts should help it find a home in more crit-focused builds. The rules update around finding minions to hit is meant to reduce the number of cases where no additional bolts fire.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2600 ⇒ 2800</li>
					<li><strong>Item Recipe</strong>: Dagger + Zeal + Dagger + 950 gold ⇒ Zeal + Recurve Bow + 1000 gold</li>
					<li><strong>Attack Speed</strong>: 45% ⇒ 40%</li>
					<li><span class="new">new</span><strong>Unique Passive - Peck</strong>: Attack apply 30 magic damage On-Hit</li>
					<li><strong>Unique Passive - Wind’s Fury Bolt Damage</strong>: 40% total AD ⇒ 50% total AD</li>
					<li><span class="new">new</span><strong>Unique Passive - Wind’s Fury</strong>: Wind's Fury now additionally searches for any minions in range if no champions can be found</li>
				</ul>
			</div>
      `,
    },
    3087: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbf2da72c22036efa/645c1281803f1777f4a39398/3087_Statikk_Shiv.SRT13_10.png?disposition=inline"></a>
				<h3 class="change-title" id="patch-Statikk-Shiv"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Statikk Shiv</a></h3>
				<blockquote class="blockquote context">
					Statikk Shiv is back!!!!!! Shiv is meant to be the premier wave-clear item for crit users. Its damage scales up about as fast as minion health does and deals a moderate amount of damage to champions as well, though much less than PVP-focused items like Stormrazor.<br>
					<br>
					A note on Energize stacking: All Energize items stack in the most linear way possible: The first target hit takes the normal effects from each Energize item. Statikk Shiv’s bounces only apply Shiv’s damage to additional targets.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 3000</li>
					<li><strong>Item Recipe</strong>: Noonquiver + Cloak of Agility + Kircheis Shard + 400 Gold</li>
					<li><strong>Attack Damage</strong>: 45</li>
					<li><strong>Attack Speed</strong>: 25%</li>
					<li><strong>Critical Strike Chance</strong>: 20%</li>
					<li><strong>Unique Passive - Electroshock</strong>: Your Energized attack fires chain lightning that applies 60-170 + 50% AP bonus magic damage. These Energized attacks will hit 6-12 targets, they chain to the next target within 600 range every time it deals damage, and they deal 120% bonus damage to minions.</li>
				</ul>
			</div>
      `,
    },
    3095: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3095.png"></a>
				<h3 class="change-title" id="patch-Stormrazor"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Stormrazor</a></h3>
				<blockquote class="blockquote context">
					Stormrazor has found a new life as an early PVP-focused legendary crit item. Its early damage is roughly in line with the last version of the item and the added damage scaling should help it remain valuable later on as well. The slow has been transformed into a selfish move speed buff, which enables either a swift disengage or the ability to close the gap for further damage, maybe with a Rapid Firecannon?
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Gold</strong>: 2700 ⇒ 3000</li>
					<li><strong>Item Recipe</strong>: B. F. Sword + Cloak of Agility + Kircheis Shard ⇒ Noonquiver + Cloak of Agility + Kircheis Shard + 400 Gold</li>
					<li><strong>Attack Damage</strong>: 45 ⇒ 55</li>
					<li><strong>Attack Speed</strong>: 15% <em>(Note: Unchanged)</em></li>
					<li><strong>Critical Strike Chance</strong>: 20% <em>(Note: Unchanged)</em></li>
					<li><strong>Unique Passive - Bolt</strong>: Your Energized attack applies 25 + 65% Total AD + 50% AP bonus Magic Damage and grants 45% Move Speed for 1 second</li>
				</ul>
			</div>
      `,
    },
    6676: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6676.png"></a>
				<h3 class="change-title" id="patch-The-Collector"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">The Collector</a></h3>
				<blockquote class="blockquote context">
					The Collector is another item getting some simple buffs to make it more attractive. Its strong early stat profile should make it enticing for anyone trying to push an early lane lead into a game-winning snowball.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Lethality</strong>: 12 ⇒ 18</li>
				</ul>
			</div>
      `,
    },
    3086: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3086.png"></a>
				<h3 class="change-title" id="patch-Zeal"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Zeal</a></h3>
				<blockquote class="blockquote context">
					While several epic items were buffed as they were lacking in gold efficiency, Zeal was far too powerful. Yes, it’s receiving a cost increase, Attack Speed decrease, and Movement Speed decrease, but these changes are all pretty small. The hopeful result is that all of these epics feel appropriately powerful without the shop tricking you.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 1050 ⇒ 1100</li>
					<li><strong>Attack Speed</strong>: 18% ⇒ 15%</li>
					<li><strong>Movement Speed</strong>: 7% ⇒ 5%</li>
					<li><span class="removed">removed</span><strong>Passive - Zealous</strong>: Bonus Movement Speed is no longer a unique passive.</li>
				</ul>
			</div>
      `,
    },
    6691: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6691.png"></a>
				<h3 class="change-title" id="patch-Duskblade-of-Draktharr"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Duskblade of Draktharr</a></h3>
				<blockquote class="blockquote context">
					Like Prowler's Claw, Duskblade gave a unique effect to many champions. With Stealth, we found that the appeal and frustration of the item limited how powerful the item could actually be. Since its release, Duskblade has been notably weaker than the other Mythics. We're reworking the Stealth aspect of the item to be a bit clearer for both sides, and filling in the power budget with a new passive perfect for ability-based casters and those hunting for their next kill.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><span class="removed">removed</span><strong>Unique Passive - Nightstalker</strong>: Nightstalker Passive will no longer empower your next basic attack against an enemy champion every 15 seconds.</li>
					<li><span class="new">new</span><strong>Unique Passive - Nightstalker</strong>: Your spells deal up to an additional 15% bonus damage based on the target's missing health (maximized at 20% remaining health).</li>
					<li><strong>Unique Passive - Nightstalker</strong>: When a champion you have damaged within the past 3 seconds dies, you become invisible for 1.5 seconds ⇒ When a champion you have damaged within the past 3 seconds dies, you become untargetable by non-structures. This effect does not destroy incoming missiles and breaks upon taking any action that would normally exit stealth. (10 second cooldown)</li>
				</ul>
			</div>
      `,
    },
    6693: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6693.png"></a>
				<h3 class="change-title" id="patch-Prowlers-Claw"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Prowler's Claw</a></h3>
				<blockquote class="blockquote context">
					Prowler's Claw was the first item to give every champion a targeted dash, which unlocked amazing new combos and introduced a skill-intensive item for players to show off their outplay potential. However, its consistent target-access ended up limiting how we could balance and design champions. Some, such as Talon and Rek'Sai, were designed with huge payoffs if they could use their mobility skills to get into melee range. With the addition, this trivialized one part of the "challenge", meaning we had to nerf the payoff or nerf the mobility. We're making the call to remove the dash from Prowler's and promote Ghostblade to Mythic with the aim to maintain three exciting Mythic choices for Assassins followed by more niche Lethality Legendaries that each succeed in their own roles.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><span class="new">new</span><strong>Tier Change</strong>: Mythic Tier ⇒ Legendary Tier</li>
					<li><strong>Total Cost</strong>: 3100 ⇒ 3000</li>
					<li><strong>Attack Damage</strong>: 60 ⇒ 55</li>
					<li><strong>Ability Haste</strong>: 20 ⇒ 15</li>
					<li><strong>Lethality</strong>: 18 ⇒ 15</li>
					<li><span class="removed">removed</span><strong>Active - Sandswipe</strong>: Sandswipe active removed.</li>
					<li><span class="new">new</span><strong>Passive - Sandstrike</strong>: After dashing, blinking, or exiting Stealth, your next attack on an enemy champion deals 85+45% AD (65+30% AD for ranged) (10s CD). If the owner is melee, the attack also slows by 99% for 0.5 seconds.</li>
				</ul>
			</div>
      `,
    },
    3142: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3142.png"></a>
				<h3 class="change-title" id="patch-Youmuus-Ghostblade"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Youmuu's Ghostblade</a></h3>
				<blockquote class="blockquote context">
					Youmuu's has always been a staple of the Assassin item system. With Prowler's being moved to a Legendary item, we're polishing Youmuu's into a shiny new Mythic. This item should excel for Assassins who want to invest into upfront burst and high map mobility. If you're looking for more extended fights or to finish off low health targets, Eclipse and Duskblade will be the better options.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><span class="new">new</span><strong>Tier Change</strong>: Legendary Tier ⇒ Mythic Tier</li>
					<li><strong>Total Cost</strong>: 3000 ⇒ 3100</li>
					<li><strong>Attack Damage</strong>: 55 ⇒ 60</li>
					<li><strong>Ability Haste</strong>: 15 ⇒ 20</li>
					<li><strong>Active - Wraith Step</strong>: 20% bonus Movement Speed ⇒ 25% bonus Movement Speed</li>
					<li><span class="removed">removed</span><strong>Passive - Haunt</strong>: Haunt passive that grants 40 bonus out-of-combat movement speed has been removed.</li>
					<li><span class="new">new</span><strong>Passive - Haunt</strong>: Moving generates Spectral Shards (up to 100). For each stack gain 0.4 Movement Speed (maximum of 40 Movement Speed) out of combat. At maximum stacks, gain 8-20 (based on level) Lethality. These stacks reset 3 seconds after dealing damage to an enemy champion while at maximum stacks.</li>
					<li><strong>Mythic Passive</strong>: Empowers each of your other Legendary items with 7 Attack Damage.</li>
				</ul>
			</div>
      `,
    },
    8020: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/8020.png"></a>
				<h3 class="change-title" id="patch-Abyssal-Mask"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Abyssal Mask</a></h3>
				<blockquote class="blockquote context">
					Abyssal Mask’s cost has been reduced and recipe has been changed in order to be a more effective Magic Resist option for Support Tanks.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 3000 ⇒ 2400</li>
					<li><strong>Item Recipe</strong>: Catalyst of Aeons + Spectre’s Cowl + 450 gold ⇒ Kindlegem + Negatron Cloak + 700 gold</li>
					<li><strong>Health</strong>: 550 ⇒ 300</li>
					<li><strong>Ability Haste</strong>: 10 (Note: Unchanged)</li>
					<li><strong>Magic Resistance</strong>: 40 ⇒ 60</li>
					<li><strong>Unique Passive - Unmake</strong>: Enemy champions within 550 units of you become cursed, reducing their magic resistance by 5 (+ 1.2% bonus health), capped at a reduction of 25. Gain 9 bonus magic resistance per cursed enemy. <em>(Note: Unchanged)</em></li>
					<li><span class="removed">removed</span><strong>Unique Passive - Eternity</strong>: Unique Passive - Eternity has been removed from Abyssal Mask.</li>
				</ul>
			</div>
      `,
    },
    3504: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3504.png"></a>
				<h3 class="change-title" id="patch-Ardent-Censer"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Ardent Censer</a></h3>
				<blockquote class="blockquote context">
					We’re putting more power into the passive and adding movement speed into Ardent Censer so that it’s easier to keep up with the teammates you’ll be enhancing. Vayne spotting just got a little bit easier.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2300 ⇒ 2100</li>
					<li><strong>Item Recipe</strong>: Amplifying Tome + Forbidden Idol + Amplifying Tome + 630 gold ⇒ Aether Wisp + Forbidden Idol + 450 gold</li>
					<li><strong>Ability Power</strong>: 60 ⇒ 35</li>
					<li><strong>Base Mana Regeneration</strong>: 100% ⇒ 75%</li>
					<li><strong>Bonus Heal and Shield Power</strong>: 8% <em>(Note: Unchanged)</em></li>
					<li><span class="new">new</span><strong>Movement Speed</strong>: 5%</li>
					<li><strong>Unique Passive - Sanctify</strong>: Healing or shielding another ally enhances you both for 6 seconds, granting your attacks 10-30% (based on ally's level) bonus Attack Speed and 5-20 (based on ally's level) magic damage on-hit ⇒ Healing or Shielding another ally enhances you both for 6 seconds, granting your attacks <strong>15-30%</strong> (based on ally's level) Attack Speed and <strong>15-30</strong> (based on ally's level) magic damage on-hit</li>
				</ul>
			</div>
      `,
    },
    3012: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blted90beb93c3f6a78/645c1281190e6e91f46fd213/BlessedChalice_88.png?disposition=inline"></a>
				<h3 class="change-title" id="patch-Ardent-Censer"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Chalice of Blessing</a></h3>
				<blockquote class="blockquote context">
					Chalice is being introduced as a new component meant to build into other enchanter items and provide some additional value by allowing supports to access mana regeneration early.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 950 gold</li>
					<li><strong>Item Recipe</strong>: Ruby Crystal + Faerie Charm + 250 gold</li>
					<li><strong>Health</strong>: 200</li>
					<li><strong>Base Mana Regeneration</strong>: 50%</li>
					<li><strong>Unique Passive - Harmony</strong>: Gain 25% base health regeneration for every additional 25% base mana regeneration</li>
				</ul>
			</div>
      `,
    },
    3011: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3011.png"></a>
				<h3 class="change-title" id="patch-Chemtech-Putrifier"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Chemtech Putrifier</a></h3>
				<blockquote class="blockquote context">
					Reducing the overall cost of Chemtech Putrifier so that it’s more affordable as an item within the overall support itemization pool. We’re happy with the item not being a “must purchase”, but in its current state it’s just a tad weak.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2300 ⇒ 2100</li>
					<li><strong>Item Recipe</strong>: Oblivion Orb + Forbidden Idol + 700 gold ⇒ Oblivion Orb + Forbidden Idol + 500 gold</li>
					<li><strong>Ability Power</strong>: 40 ⇒ 35</li>
					<li><strong>Ability Haste</strong>: 15 <em>(Note: Unchanged)</em></li>
					<li><strong>Base Mana Regeneration</strong>: 100% ⇒ 75%</li>
					<li><strong>Heal and Shield Power</strong>: 8% ⇒ 10%</li>
					<li><strong>Unique Passive - Puffcap Toxin</strong>: Dealing damage to an enemy champion inflicts Grievous Wounds for 3 seconds. <em>(Note: Unchanged)</em></li>
				</ul>
			</div>
      `,
    },
    6620: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltce24a085d6954d08/645c12818dbb82976033f70e/EchoesofHelia_88.png?disposition=inline"></a>
				<h3 class="change-title" id="patch-Echoes-of-Helia"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Echoes of Helia</a></h3>
				<blockquote class="blockquote context">
					Raise those grails because we’re bringing back the spiritual successor for a much beloved item of olden times! Introducing… Echoes of Helia! Echoes of Helia is intended to be an item that’s mainly for Enchanters and focuses on helping out more offensive/skirmish play patterns, so if you like poking down your opponents in lane this is the item for you! As a consequence, Imperial Mandate was moved down to Legendary to open up its audience to champs who might like the item but didn't want to trade off their mythic slot for it.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2300</li>
					<li><strong>Item Recipe</strong>: Chalice of Blessing + Bandleglass Mirror + 400 gold</li>
					<li><strong>Ability Power</strong>: 30</li>
					<li><strong>Health</strong>: 200</li>
					<li><strong>Ability Haste</strong>: 15</li>
					<li><strong>Base Mana Regeneration</strong>: 125%</li>
					<li><strong>Unique Passive - Soul Siphon</strong>: Dealing damage to an enemy champion grants a Soul Shard (up to 2 max). Healing or shielding an ally consumes all Soul Shards and restores 20 - 100 (based on ally's level) Health and deals 30 - 200 (based on ally's level) magic damage per Shard to the nearest enemy champion.</li>
					<li><strong>Unique Passive - Dissonance</strong>: Gain 3 Ability Power per 25% Base Mana Regeneration. Disables Harmony.</li>
					<li><strong>Mythic Passive</strong>: Empowers each of your other Legendary items with 5 ability haste.</li>
				</ul>
			</div>
      `,
    },
    3001: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3001.png"></a>
				<h3 class="change-title" id="patch-Evenshroud"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Evenshroud</a></h3>
				<blockquote class="blockquote context">
					For Evenshroud we have a cost and recipe adjustment to bring it in line with the rest of the Support ecosystem. We’ll be keeping an eye on the satisfaction surrounding this item and Zeke's to see if there are any improvements we can do in the future.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2500 ⇒ 2300</li>
					<li><strong>Item Recipe</strong>: Kindlegem + Aegis of the Legion + 500 gold ⇒ Lifewell Pendant + Null Magic Mantle + 800 gold</li>
					<li><strong>Health</strong>: 200 <em>(Note: Unchanged)</em></li>
					<li><strong>Armor</strong>: 30 <em>(Note: Unchanged)</em></li>
					<li><strong>Magic Resistance</strong>: 30 <em>(Note: Unchanged)</em></li>
					<li><strong>Ability Haste</strong>: 20 <em>(Note: Unchanged)</em></li>
					<li><strong>Unique Passive - Coriscation</strong>: Becoming affected by or applying an immobilizing or grounding effect to or from an enemy champion affects them and all enemy champions within 600 units of you with Repent, increasing the damage they take by 10% for 5 seconds. <em>(Note: Unchanged)</em></li>
					<li><strong>Mythic Passive</strong>: Empowers your other Legendary items with 5 armor and 5 magic resistance</li>
				</ul>
			</div>
      `,
    },
    4005: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/4005.png"></a>
				<h3 class="change-title" id="patch-Imperial-Mandate"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Imperial Mandate</a></h3>
				<blockquote class="blockquote context">
					Imperial Mandate was shifted down to a Legendary tier item to open up the amount of champs that would want to purchase this item, but weren’t willing to give up their preferred Mythic in exchange. It should now be a great option for offensive enchanters for when they want to help allies burst down targets in teamfights.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2500 ⇒ 2300</li>
					<li><strong>Item Recipe</strong>: Bandleglass Mirror + Kindlegem + 750 gold ⇒ Bandleglass Mirror + Fiendish Codex + 450 gold</li>
					<li><strong>Ability Power</strong>: 40 ⇒ 55</li>
					<li><span class="removed">removed</span><strong>Health</strong>: 200 ⇒ 0 (Removed)</li>
					<li><strong>Ability Haste</strong>: 20 <em>(Note: Unchanged)</em></li>
					<li><strong>Base Mana Regeneration</strong>: 100% <em>(Note: Unchanged)</em></li>
					<li><strong>Unique Passive - Coordinated Fire</strong>: Abilities that Slow or Immobilize a champion deal 45-75 (based on ally's level) bonus magic damage and marks them for 4 seconds (6 second cooldown per enemy champion mark application). Allied champion damage detonates the mark, dealing an additional 90-150 (based on ally's level) magic damage and granting you both 20% Move Speed for 2 seconds. ⇒ Abilities that Slow or Immobilize a champion deal <strong>35-75</strong> (based on ally's level) bonus magic damage and marks them for 4 seconds (6 second cooldown per enemy champion mark application). Ally champion damage detonates the mark, dealing an additional <strong>70-150</strong> (based on ally's level) magic damage and granting you both 20% Move Speed for 2 seconds.</li>
				</ul>
			</div>
      `,
    },
    3109: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3109.png"></a>
				<h3 class="change-title" id="patch-Knights-Vow"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Knight's Vow</a></h3>
				<blockquote class="blockquote context">
					We’re reducing the cost and changing the item recipe and stats to a more accessible build that integrates Lifewell Pendant. We’re also introducing a slight nerf to the passive redirection from post-mitigation (after resists are applied) to pre-mitigation (before resists). The end result is that Knight's Vow users will take a bit more true damage when redirecting damage for allies while still protecting them the same amount.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2300 ⇒ 2200</li>
					<li><strong>Item Recipe</strong>: Crystalline Bracer + Rejuvenation Bead + Kindlegem + 400 gold ⇒ Lifewell Pendant + Crystalline Bracer + 350 gold</li>
					<li><strong>Health</strong>: 400 ⇒ 350</li>
					<li><span class="new">new</span><strong>Armor</strong>: 25</li>
					<li><strong>Ability Haste</strong>: 20 ⇒ 15</li>
					<li><strong>Base Health Regeneration</strong>: 200% ⇒ 125%</li>
					<li><strong>Unique Active - Pledge</strong>: Designate the target ally as being Worthy (60 second cooldown) <em>(Note: Unchanged)</em></li>
					<li><strong>Unique Passive - Sacrifice</strong>: While your Worthy ally is nearby, redirect 10% of <strong>pre-mitigation</strong> damage they take to you and heal for 10% of the damage dealt by your Worthy ally to Champions. If they have less than 30% Health the damage reduction is increased to 20%. <em>(Note: this was changed from post-mitigation damage to pre-mitigation damage.)</em></li>
				</ul>
			</div>
      `,
    },
    3023: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt307267f0586b482f/645c128132acc8eb785ee277/LifewellPendant_88.png?disposition=inline"></a>
				<h3 class="change-title" id="patch-Lifewell-Pendant"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Lifewell Pendant</a></h3>
				<blockquote class="blockquote context">
					This is intended to be a new item component for tank supports that will give them the stat profile they need at an affordable price.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 1050</li>
					<li><strong>Attack Damage Growth</strong>: Cloth Armor + Ruby Crystal + 350 gold</li>
					<li><strong>Health</strong>: 150</li>
					<li><strong>Armor</strong>: 25</li>
					<li><strong>Ability Haste</strong>: 5</li>
				</ul>
			</div>
      `,
    },
    3190: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3190.png"></a>
				<h3 class="change-title" id="patch-Locket-of-the-Iron-Solari"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Locket of the Iron Solari</a></h3>
				<blockquote class="blockquote context">
					Locket is currently performing well on live, filling a unique spot as a support damage mitigation tool. Therefore, we’re opting to just give it a small cost adjustment while maintaining the current state of the item.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2500 ⇒ 2300</li>
					<li><strong>Item Recipe</strong>: Kindlegem + Aegis of the Legion + 500 gold ⇒ Lifewell Pendant + Null Magic Mantle + 800 gold</li>
					<li><strong>Health</strong>: 200 <em>(Note: Unchanged)</em></li>
					<li><strong>Armor</strong>: 30 <em>(Note: Unchanged)</em></li>
					<li><strong>Magic Resistance</strong>: 30 <em>(Note: Unchanged)</em></li>
					<li><strong>Ability Haste</strong>: 20 <em>(Note: Unchanged)</em></li>
					<li><strong>Active - Devotion</strong>: Grant you and allied champions within 850 units a shield for 180-330 (based on target’s level) for 2.5 seconds. ⇒ Grant you and allied champions within 850 units a shield for <strong>200-360</strong> (based on target’s level) for 2.5 seconds.</li>
					<li><strong>Unique Passive - Consecrate</strong>: Grant nearby allied champions 3 Armor and Magic Resist. <em>(Note: Unchanged)</em></li>
					<li><strong>Mythic Passive</strong>: Grant all other Legendary items 2 Armor and 2 Magic Resist increase to Consecrate. <em>(Note: Unchanged)</em></li>
				</ul>
			</div>
      `,
    },
    3222: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3222.png"></a>
				<h3 class="change-title" id="patch-Mikaels-Blessing"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Mikael's Blessing</a></h3>
				<blockquote class="blockquote context">
					For Mikael’s, we just have a few recipe adjustments and we’re adding a bit more power into the active heal.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2300 <em>(Note: Unchanged)</em></li>
					<li><strong>Item Recipe</strong>: Forbidden Idol + Negatron Cloak + 600 gold ⇒ Chalice of Blessing + Forbidden Idol + 550 gold</li>
					<li><span class="new">new</span><strong>Health</strong>: 250</li>
					<li><span class="removed">removed</span><strong>Ability Haste</strong>: 15 ⇒ 0 (Removed)</li>
					<li><span class="removed">removed</span><strong>Magic Resistance</strong>: 50 ⇒ 0 (Removed)</li>
					<li><strong>Base Mana Regeneration</strong>: 100% <em>(Note: Unchanged)</em></li>
					<li><strong>Heal and Shield Power</strong>: 16% ⇒ 15%</li>
					<li><strong>Active - Purify</strong>: Remove all crowd control debuffs (except Knockups and Suppression) from an ally champion and restore 100-180 (based on ally's level) health. (120 second cooldown) ⇒ Remove all crowd control debuffs (except Knockups and Suppression) from an ally champion and restore <strong>100-250</strong> (based on ally's level) health. (120 second cooldown)</li>
					<li><span class="new">new</span><strong>Unique Passive - Harmony</strong>: Gain 25% base health regeneration for every additional 25% base mana regeneration</li>
				</ul>
			</div>
      `,
    },
    6617: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6617.png"></a>
				<h3 class="change-title" id="patch-Moonstone-Renewer"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Moonstone Renewer</a></h3>
				<blockquote class="blockquote context">
					Echoes of Helia and the older Moonstone have a pretty big overlap as items that enhance your healing (even if Echoes had a damage output). Ultimately, this should help Moonstone feel like your actions influence how it impacts a fight as opposed to the healing happening on auto pilot.<br>
					<br>
					Now both items should be useful in different scenarios, Moonstone Renewer is a safer, chain-healing item whereas Echoes is for when you want to fight and provide more damage.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2500 ⇒ 2300</li>
					<li><strong>Item Recipe</strong>: Bandleglass Mirror + Kindlegem + 750 gold ⇒ Bandleglass Mirror + Kindlegem + 550 gold</li>
					<li><strong>Ability Power</strong>: 40 ⇒ 35</li>
					<li><strong>Health</strong>: 200 <em>(Note: Unchanged)</em></li>
					<li><strong>Ability Haste</strong>: 20 <em>(Note: Unchanged)</em></li>
					<li><strong>Base Mana Regeneration</strong>: 100% <em>(Note: Unchanged)</em></li>
					<li><span class="new">new</span><strong>Unique Passive - Starlit Grace</strong>: Healing or shielding an ally chains to the nearest ally champion (excluding yourself), healing for 20-35% (based on ally target's level) or shielding 30-40% (based on ally target's level) of the original amount.</li>
					<li><span class="new">new</span><strong>Mythic Passive</strong>: Empowers each of your other Legendary items with 5 ability haste.</li>
				</ul>
			</div>
      `,
    },
    6667: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6667.png"></a>
				<h3 class="change-title" id="patch-Radiant-Virtue"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Radiant Virtue</a></h3>
				<blockquote class="blockquote context">
					Radiant Virtue is still positioned as an item for top and jungle tanks, but by lowering its cost we’re hoping to open it up as a greedy Support item purchase for those looking to snowball their leads.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 3200 ⇒ 2700</li>
					<li><strong>Item Recipe</strong>: Aegis of the Legion + Kindlegem + Ruby Crystal + 800 gold ⇒ Aegis of the Legion + Giant’s Belt + 600 gold</li>
					<li><strong>Health</strong>: 400 ⇒ 350</li>
					<li><strong>Armor</strong>: 30 <em>(Note: Unchanged)</em></li>
					<li><strong>Magic Resistance</strong>: 30 <em>(Note: Unchanged)</em></li>
					<li><strong>Ability Haste</strong>: 20 ⇒ 10</li>
					<li><strong>Unique Passive - Guiding Light</strong>: Upon casting your ultimate, you Transcend for 9 seconds. While Transcended, increase your maximum health by 15% and cause you and all allies within 1200 units to heal for 3% of your maximum health upon you Transcending and every 3 seconds thereafter (90 second cooldown). ⇒ Upon casting your ultimate, you Transcend for 9 seconds. While Transcended, increase your maximum health by <strong>12.5%</strong> and cause you and all allies within 1200 units to heal for <strong>2.5%</strong> of your maximum health upon you Transcending and every 3 seconds thereafter (90 second cooldown).</li>
					<li><strong>Mythic Passive</strong>: Grants all other Legendary items 100 bonus Health ⇒ Grants all other Legendary items <strong>75</strong> bonus Health</li>
				</ul>
			</div>
      `,
    },
    3107: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3107.png"></a>
				<h3 class="change-title" id="patch-Redemption"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Redemption</a></h3>
				<blockquote class="blockquote context">
					Redemption is another item that’s seeing some recipe adjustments and getting a bit more strength for its healing.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2300 <em>(Note: Unchanged)</em></li>
					<li><strong>Item Recipe</strong>: Kindlegem + Forbidden Idol + 700 gold ⇒ Chalice of Harmony + Forbidden Idol + 550 gold</li>
					<li><strong>Item Recipe</strong>: Kindlegem + Forbidden Idol + 700 gold ⇒ Chalice of Blessing + Forbidden Idol + 550 gold</li>
					<li><strong>Health</strong>: 200 ⇒ 250</li>
					<li><span class="removed">removed</span><strong>Ability Haste</strong>: 15 ⇒ 0 (Removed)</li>
					<li><strong>Base Mana Regeneration</strong>: 100% <em>(Note: Unchanged)</em></li>
					<li><strong>Heal and Shield Power</strong>: 16% ⇒ 15%</li>
					<li><strong>Active - Intervention</strong>: Target an area within 5500 range. After 2.5 seconds, call down a beam of light to restore 180-340 (based on target’s level) Health to allied champions and burn enemy champions for 10% max Health true damage (90 second cooldown). ⇒ Target an area within 5500 range. After 2.5 seconds, call down a beam of light to restore <strong>200-400</strong> (based on target’s level) Health to allied champions and burn enemy champions for 10% max Health true damage (90 second cooldown).</li>
					<li><span class="new">new</span><strong>Unique Passive - Harmony</strong>: Gain 25% base health regeneration for every additional 25% base mana regeneration</li>
				</ul>
			</div>
      `,
    },
    2065: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/2065.png"></a>
				<h3 class="change-title" id="patch-Shurelyas-Battlesong"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Shurelya's Battlesong</a></h3>
				<blockquote class="blockquote context">
					Shurelya's is currently one of the strongest support items in terms of satisfaction, so we didn't want to fix something that wasn’t broken. We ultimately reduced the total cost, shaved off some AP, and took some power out of the passive so that Shurelya’s lines up with the rest of the support items.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2500 ⇒ 2300</li>
					<li><strong>Item Recipe</strong>: Kindlegem + Bandleglass Mirror + 750 gold ⇒ Kindlegem + Bandleglass Mirror + 550 gold</li>
					<li><strong>Ability Power</strong>: 40 ⇒ 35</li>
					<li><strong>Health</strong>: 200 <em>(Note: Unchanged)</em></li>
					<li><strong>Ability Haste</strong>: 20 <em>(Note: Unchanged)</em></li>
					<li><strong>Base Mana Regeneration</strong>: 100% <em>(Note: Unchanged)</em></li>
					<li><strong>Active - Inspire</strong>: Grants you and all allies within 1000 units +30% bonus movement speed for 4 seconds (75 second cooldown) <em>(Note: Unchanged)</em></li>
					<li><strong>Unique Passive - Motivate</strong>: Healing, shielding, or buffing allies grants you and them +25% bonus movement speed for 1.5 seconds ⇒ Healing, shielding, or buffing allies grants you and them <strong>+20%</strong> bonus movement speed for 1.5 seconds</li>
					<li><strong>Mythic Passive</strong>: Empowers each of your other Legendary items with 5 ability haste <em>(Note: Unchanged)</em></li>
				</ul>
			</div>
      `,
    },
    6616: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6616.png"></a>
				<h3 class="change-title" id="patch-Staff-of-Flowing-Water"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Staff of Flowing Water</a></h3>
				<blockquote class="blockquote context">
					Like Ardent Censer, we’re putting more power into the passive and adding movement speed so that it’s easier to keep up with the teammates you’ll be supporting.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2300 ⇒ 2100</li>
					<li><strong>Item Recipe</strong>: Amplifying Tome + Forbidden Idol + Amplifying Tome + 630 gold ⇒ Aether Wisp + Forbidden Idol + 450 gold</li>
					<li><strong>Ability Power</strong>: 50 ⇒ 35</li>
					<li><strong>Base Mana Regeneration</strong>: 100% ⇒ 75%</li>
					<li><strong>Heal and Shield Power</strong>: 8% <em>(Note: Unchanged)</em></li>
					<li><span class="new">new</span><strong>Movement Speed</strong>: 5%</li>
					<li><strong>Unique Passive - Rapids</strong>: Healing or shielding another ally grants you both 25-45 (based on ally's level) Ability Power and 20 Ability Haste for 4 seconds ⇒ Healing or shielding another ally grants you both <strong>30-45</strong> (based on ally's level) Ability Power and 20 Ability Haste for 4 seconds</li>
				</ul>
			</div>
      `,
    },
    4638: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/4638.png"></a>
				<h3 class="change-title" id="patch-Watchful-Wardstone"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Watchful Wardstone</a></h3>
				<blockquote class="blockquote context">
					With the cost of items going down, there was a need to create a late game gold sink for when your inventory is full. Watchful and Vigilant Wardstone is intended to be that later game gold sink for Supports. We also smoothed out Blessing of Ixtal so you get a smaller bonus with Watchful Wardstone, just in case you want to buy the item a little earlier in the mid-game.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><span class="new">new</span><strong>One Quest Please</strong>: Watchful Wardstone can only be purchased after completing your support quest.</li>
					<li><strong>Total Cost</strong>: 1100 <em>(Note: Unchanged)</em></li>
					<li><strong>Item Recipe</strong>: None <em>(Note: Unchanged)</em></li>
					<li><strong>Health</strong>: 150 <em>(Note: Unchanged)</em></li>
					<li><strong>Ability Haste</strong>: 10 <em>(Note: Unchanged)</em></li>
					<li><span class="new">new</span><strong>Base Mana Regeneration</strong>: 50%</li>
					<li><strong>Unique Passive - Arcane Cache</strong>: This item can store up to three purchased Control Wards <em>(Note: Unchanged)</em></li>
					<li><span class="new">new</span><strong>Unique Passive - Blessing of Ixtal</strong>: Grants an 8% increase to bonus Health, bonus Attack Damage, Ability Haste, and Ability Power.</li>
				</ul>
			</div>
      `,
    },
    4643: {
      change: CHANGE_TYPES.new,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/4643.png"></a>
				<h3 class="change-title" id="patch-Vigilant-Wardstone"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Vigilant Wardstone</a></h3>
				<blockquote class="blockquote context">
					Vigilant was changed from an auto-upgrade from Watchful Wardstone into a gold sink as a result of the general cost of support items shifting downwards. This is intended to be a strong late-game item for those games where your inventory gets full and you still want to be able to buy control wards.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><span class="new">new</span><strong>One Quest Please</strong>: Vigilant Wardstone can only be purchased after completing your support quest.</li>
					<li><strong>Total Cost</strong>: 2300</li>
					<li><strong>Item Recipe</strong>: Watchful Wardstone + 1200 gold</li>
					<li><strong>Health</strong>: 250</li>
					<li><strong>Ability Haste</strong>: 10</li>
					<li><strong>Base Mana Regeneration</strong>: 50%</li>
					<li><strong>Unique - Arcane Cache</strong>: This item can store up to 3 purchased Control Wards</li>
					<li><strong>Unique - Behold</strong>: Increase your Stealth Ward and Control Ward placement caps by 1</li>
					<li><strong>Unique - Chosen of Ixtal</strong>: Grants a 20% increase to bonus Health, bonus Attack Damage, Ability Haste, and Ability Power.</li>
				</ul>
			</div>
      `,
    },
    3050: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3050.png"></a>
				<h3 class="change-title" id="patch-Zekes-Convergence"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Zeke's Convergence</a></h3>
				<blockquote class="blockquote context">
					For Zeke’s, we just have some cost, stat, and recipe adjustments to bring it in line with the rest of the support items. We’re looking at doing improvements on this item in the future depending on how this update lands.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Total Cost</strong>: 2400 ⇒ 2200</li>
					<li><strong>Item Recipe</strong>: Kindlegem + Glacial Buckler + 700 gold ⇒ Lifewell Pendant + Glacial Buckler + 250 gold</li>
					<li><strong>Health</strong>: 250 ⇒ 200</li>
					<li><strong>Mana</strong>: 250 <em>(Note: Unchanged)</em></li>
					<li><strong>Armor</strong>: 35 ⇒ 45</li>
					<li><strong>Ability Haste</strong>: 20 ⇒ 15</li>
					<li><strong>Active - Conduit</strong>: Designate an Accomplice (60 second cooldown) <em>(Note: Unchanged)</em></li>
					<li><strong>Unique Passive - Convergence</strong>: For 8 seconds after you immobilize an enemy, your Accomplice's attacks (On-Hit) and ability hits apply an additional 30 - 70 (based on level) (+7.5%AP) (+1.5% Maximum Health) magic damage on-hit to that enemy. <em>(Note: Unchanged)</em></li>
				</ul>
			</div>
      `,
    },
    6632: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6632.png"></a>
				<h3 class="change-title" id="patch-Divine-Sunderer"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Divine Sunderer</a></h3>
				<blockquote class="blockquote context">
					We’re nerfing Sunderer to be less of a Tank counter especially in lane, and ideally less of a general pick up because it’s simply strong.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Spellblade Damage</strong>: 125% of base AD plus 6% (3% if ranged) of target's maximum health ⇒ 160% of base AD plus 4% (2% if ranged) of target's maximum health</li>
				</ul>
			</div>
      `,
    },
    4401: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/4401.png"></a>
				<h3 class="change-title" id="patch-Force-of-Nature"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Force of Nature</a></h3>
				<blockquote class="blockquote context">
					This item is simply too strong as a single item resist purchase as it can give over 50% total damage reduction by itself. We’re aiming to reduce its overall value and particularly reduce how effective it is against a single mage. Dissipate should not be activated by a single burst mage combo.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Gold Cost</strong>: 2900 gold ⇒ 2800 gold</li>
					<li><strong>Health</strong>: 350 ⇒ 400</li>
					<li><strong>Magic Resist</strong>: 70 ⇒ 60</li>
					<li><strong>Passive - Absorb Maximum Stacks</strong>: 6 ⇒ 10</li>
					<li><span class="removed">removed</span><strong>Passive - Dissipate</strong>: Dissipate no longer gives multiplicative Magic Damage reduction</li>
					<li><span class="new">new</span><strong>Passive - Dissipate</strong>: Dissipate now grants 30 bonus Magic Resistance</li>
				</ul>
			</div>
      `,
    },
    6630: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6630.png"></a>
				<h3 class="change-title" id="patch-Goredrinker"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Goredrinker</a></h3>
				<blockquote class="blockquote context">
					Goredrinker is already reasonably powerful, but it’s still lagging behind Sunderer, so we’re giving it some light buffs to bring it up to par. We’re adjusting the gold cost specifically to reduce how directly comparable these items are to each other.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Gold Cost</strong>: 3300 ⇒ 3200</li>
					<li><strong>Mythic Passive Bonus Health for Legendary Items</strong>: 50 ⇒ 75</li>
				</ul>
			</div>
      `,
    },
    3181: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3181.png"></a>
				<h3 class="change-title" id="patch-Hullbreaker"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Hullbreaker</a></h3>
				<blockquote class="blockquote context">
					Hullbreaker is a mostly unused item that is sitting alone on the shop keeper’s shelf unless a stray Yorick decides to pick it up. We’re trying a light reshape and significant buff to the item while avoiding making it a first rush item again.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Item Recipe</strong>: Pickaxe + Phage + 825 gold (2800 total gold) ⇒ Pickaxe + Phage + Winged Moonplate + 225 gold (3000 total gold)</li>
					<li><strong>Attack Damage</strong>: 50 ⇒ 60</li>
					<li><span class="new">new</span><strong>Bonus Movement Speed</strong>: Now grants +5% Movement Speed</li>
				</ul>
			</div>
      `,
    },
    3036: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3036.png"></a>
				<h3 class="change-title" id="patch-Lord-Dominiks-Regards"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Lord Dominik's Regards</a></h3>
				<blockquote class="blockquote context">
					Lord Dominik’s now multiplies magic damage through its passive effect, which just makes it feel a bit better for crit users who happen to have some magic damage on their kits or items. LD sends his regards.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Giant Slayer</strong>: Deal increased physical ⇒ physical <strong>and magic</strong> damage based on maximum health difference</li>
				</ul>
			</div>
      `,
    },
    3802: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3802.png"></a>
				<h3 class="change-title" id="patch-Lost-Chapter"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Lost Chapter</a></h3>
				<blockquote class="blockquote context">
					We’re aiming to help Mages with an earlier power spike in their laning phase to keep up with the opposition in solo queue. We want to acknowledge some risk to this change given Mages already tend to be the top performers in pro play, so we’ll be keeping an eye out.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Item Recipe</strong>: Amplifying Tome + Sapphire Crystal + Amplifying Tome + 80 gold (1300 total) ⇒ Amplifying Tome + Sapphire Crystal + 265 gold (1100 total) <em>(Note: Luden’s final cost is unchanged and this 200 gold will be added to the combiner cost.)</em></li>
				</ul>
			</div>
      `,
    },
    3156: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3156.png"></a>
				<h3 class="change-title" id="patch-Maw-of-Malmortius"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Maw of Malmortius</a></h3>
				<blockquote class="blockquote context">
					Mages have options to play around Maw of Malmortius, but it should be a bit easier to wait out the shield and we want to give opponents a longer window to play around this item once the shield has triggered.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Gold Cost</strong>: 2900 ⇒ 2800</li>
					<li><strong>Passive - Lifeline Cooldown</strong>: 75 seconds ⇒ 90 seconds</li>
					<li><strong>Passive - Lifeline Shield Duration</strong>: 5 seconds ⇒ 2.5 seconds</li>
				</ul>
			</div>
      `,
    },
    3089: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3089.png"></a>
				<h3 class="change-title" id="patch-Rabadons-Deathcap"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Rabadon's Deathcap</a></h3>
				<blockquote class="blockquote context">
					Deathcap is currently a bit underpowered despite it being such a key item for Mage satisfaction. Mages should feel like this is a very powerful choice in most games that go long, and sometimes even in relatively short games when they’re doing well, so we’re making this hat just a tad more magical for its users.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Passive - Magical Opus Ability Power Increase</strong>: 35% ⇒ 40%</li>
				</ul>
			</div>
      `,
    },
    3053: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3053.png"></a>
				<h3 class="change-title" id="patch-Steraks-Gage"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Sterak's Gage</a></h3>
				<blockquote class="blockquote context">
					Sterak's Gage should be an essential item for Juggernauts and other Fighter front-liners, and it has struggled to fill that role since the item update. We’re adding back one of the properties that was cut from the item to make it feel like more of a complete purchase.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><span class="new">new</span><strong>Gigantification</strong>: When Lifeline triggers, the user will also gain 25% increased size and 30% Tenacity for 8 seconds</li>
				</ul>
			</div>
      `,
    },
    6631: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6631.png"></a>
				<h3 class="change-title" id="patch-Stridebreaker"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Stridebreaker</a></h3>
				<blockquote class="blockquote context">
					Buffing Stridebreaker up to Sunderer's power level (which wasn’t at 9000 btw).
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Attack Damage</strong>: 50 ⇒ 60</li>
				</ul>
			</div>
      `,
    },
    3078: {
      change: CHANGE_TYPES.change,
      details: `
      <div>
				<a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3078.png"></a>
				<h3 class="change-title" id="patch-Trinity-Force"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Trinity Force</a></h3>
				<blockquote class="blockquote context">
					We’re buffing Trinity Force to better match Sunderer, and adding a QOL buff to Threefold Strikes to match Conqueror’s duration and limit how many things you have to track. The trigger conditions aren't quite the same, but they should line up fairly often now.
				</blockquote>
				<hr class="divider">
				<ul>
					<li><strong>Threefold Strike Duration</strong>: 3 seconds ⇒ 5 seconds</li>
					<li><strong>Attack Damage</strong>: 35 ⇒ 40</li>
					<li><strong>Attack Speed</strong>: 30% ⇒ 35%</li>
				</ul>
			</div>
      `,
    },
  },
};
