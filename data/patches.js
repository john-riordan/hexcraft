import { CHANGE_TYPES } from '../helpers/constants';

export const PATCHES = {
  '12.3.1': {
    6632: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <div class="reference-link">
          <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt34cf2b8bd910fd89/5fa1f084209f0756c89d6c96/6632_Fighter_T4_DivineSunderer.png">
        </div>
        <h4 class="change-title">
          Divine Sunderer
        </h4>
        <div class="attribute-change">
					<span class="attribute">Build Path</span> <span class="attribute-before">Sheen + Phage + Kindlegem + 700 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">Sheen + Caulfield's Warhammer + Kindlegem + 700 gold</span>
				</div>
        <div class="attribute-change">
					<span class="attribute">Health</span> <span class="attribute-before">400</span> <span class="change-indicator">⇒</span> <span class="attribute-after">300</span>
				</div>
        <div class="attribute-change">
					<span class="attribute">Attack Damage</span> <span class="attribute-before">35</span> <span class="change-indicator">⇒</span> <span class="attribute-after">40</span>
				</div>
      </div>`
    },
    6630: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <div class="reference-link">
          <img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6630.png">
        </div>
        <h4 class="change-title">
          Goredrinker
        </h4>
        <div class="attribute-change">
					<span class="attribute">Build Path</span> <span class="attribute-before">Ironspike Whip + Phage + Kindlegem + 300 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">Ironspike Whip + Caulfield's Warhammer + Kindlegem + 300 gold</span>
				</div>
        <div class="attribute-change">
					<span class="attribute">Health</span> <span class="attribute-before">450</span> <span class="change-indicator">⇒</span> <span class="attribute-after">300</span>
				</div>
        <div class="attribute-change">
					<span class="attribute">Attack Damage</span> <span class="attribute-before">45</span> <span class="change-indicator">⇒</span> <span class="attribute-after">55</span>
				</div>
      </div>`
    },
    3078: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <div class="reference-link">
          <img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3078.png">
        </div>
        <h4 class="change-title">
          Trinity Force
        </h4>
        <div class="attribute-change">
					<span class="attribute">Health</span> <span class="attribute-before">200</span> <span class="change-indicator">⇒</span> <span class="attribute-after">300</span>
				</div>
        <div class="attribute-change">
					<span class="attribute"><span class="updated">updated</span>THREEFOLD STRIKE (ON CHAMPIONS OR STRUCTURES)</span> <span class="attribute-before">+6% base AD per stack, up to 5 times for +30%</span> <span class="change-indicator">⇒</span> <span class="attribute-after">+4% base AD per stack, up to 5 times for +20% <em>(also applies to Infinity Force)</em></span>
				</div>
      </div>`
    },
    6333: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <div class="reference-link">
          <img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6333.png">
        </div>
        <h4 class="change-title">
          Death's Dance
        </h4>
        <div class="attribute-change">
					<span class="attribute">Total Cost</span> <span class="attribute-before">3100 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">3300 gold</span>
				</div>
        <div class="attribute-change">
					<span class="attribute"><span class="updated">updated</span>IGNORE PAIN (PASSIVE)</span> <span>Stores</span> <span class="attribute-before">[35% for melee/15% for ranged] of post-mitigation physical damage received</span> <span class="change-indicator">⇒</span> <span class="attribute-after">[30% for melee/10% for ranged] of <strong>all types of post-mitigation damage received</strong>, (not including true damage), which is successively taken as true damage over 3 seconds instead. <strong>Now also applies to damage on shields</strong></span>
				</div>
        <div class="attribute-change">
					<span class="attribute"><span class="updated">updated</span>DEFY (PASSIVE)</span> <span>Heal for</span> <span class="attribute-before">15% maximum health upon scoring a kill or assist</span> <span class="change-indicator">⇒</span> <span class="attribute-after">175% bonus AD if a champion dies within 3 seconds after you've dealt damage to them. <em>(all else unchanged)</em></span>
				</div>
      </div>`
    },
    3053: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <div class="reference-link">
          <img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3053.png">
        </div>
        <h4 class="change-title">
          Sterak's Gage
        </h4>
        <div class="attribute-change">
					<span class="attribute">Attack Damage</span> <span class="attribute-before">50</span> <span class="change-indicator">⇒</span> <span class="attribute-after">0</span>
				</div>
        <div class="attribute-change">
					<span class="attribute"><span class="new">new</span>THE CLAWS THAT CATCH (PASSIVE)</span> <span class="attribute-after">Gain 40% of your base AD as bonus AD</span>
				</div>
        <div class="attribute-change">
					<span class="attribute"><span class="removed">removed</span>BLOODLUST (PASSIVE)</span> <span class="attribute-removed">After dealing damage to or taking damage from an enemy champion, heal for a portion of your maximum health over 6 seconds</span>
				</div>
        <div class="attribute-change">
					<span class="attribute"><span class="updated">updated</span>LIFELINE (PASSIVE)</span> <span>If you take damage that would reduce you below 30% of your maximum health, gain a shield</span> <span class="attribute-before">that absorbs 100 (+[8% for melee/4.8% for ranged] of your maximum health) per stack of <em>Bloodlust</em>) for 4 seconds</span> <span class="change-indicator">⇒</span> <span class="attribute-after">equal to 75% of your bonus health that decays over 3.75 seconds</span>
				</div>
      </div>`
    },
    3153: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <div class="reference-link">
          <img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3153.png">
        </div>
        <h4 class="change-title">
          Blade of the Ruined King
        </h4>
        <div class="attribute-change">
					<span class="attribute">Total Cost</span> <span class="attribute-before">3200 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">3300 gold</span>
				</div>
        <div class="attribute-change">
					<span class="attribute"><span class="updated">updated</span>MIST'S EDGE (PASSIVE)</span> <span>Basic attacks deal</span> <span class="attribute-before">[10% for melee/6% for ranged] of target's current health</span> <span class="change-indicator">⇒</span> <span class="attribute-after">[12% for melee/8% for ranged] of target's current health as physical damage <em>(all else unchanged)</em></span>
				</div>
      </div>`
    },
    3071: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <div class="reference-link">
          <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf1da4536b280ae57/5fa1efd0432f517518d427ac/3071_Fighter_T3_BlackCleaver.png">
        </div>
        <h4 class="change-title">
          Black Cleaver
        </h4>
        <div class="attribute-change">
					<span class="attribute">Health</span> <span class="attribute-before">450</span> <span class="change-indicator">⇒</span> <span class="attribute-after">350</span>
				</div>
        <div class="attribute-change">
					<span class="attribute">Attack Damage</span> <span class="attribute-before">40</span> <span class="change-indicator">⇒</span> <span class="attribute-after">45</span>
				</div>
        <div class="attribute-change">
					<span class="attribute">Ability Haste</span> <span class="attribute-before">25</span> <span class="change-indicator">⇒</span> <span class="attribute-after">30</span>
				</div>
      </div>`
    },
    3074: {
      change: CHANGE_TYPES.buff,
      details: `<div>
        <div class="reference-link">
          <img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3074.png">
        </div>
        <h4 class="change-title">
          Ravenous Hydra
        </h4>
        <div class="attribute-change">
					<span class="attribute">Attack Damage</span> <span class="attribute-before">65</span> <span class="change-indicator">⇒</span> <span class="attribute-after">70</span>
				</div>
      </div>`
    },
    3051: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <div class="reference-link">
          <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb59c2c4dc114320e/5fa1efc91f9166620ed88bcd/3051_Fighter_T2_HearthboundAxe.png">
        </div>
        <h4 class="change-title">
          Hearthbound Axe
        </h4>
        <div class="attribute-change">
					<span class="attribute">Total Cost</span> <span class="attribute-before">1100 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">1000 gold</span>
				</div>
        <div class="attribute-change">
					<span class="attribute">Combine Cost</span> <span class="attribute-before">450 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">350 gold</span>
				</div>
      </div>`
    },
    3155: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <div class="reference-link">
          <img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3155.png">
        </div>
        <h4 class="change-title">
          Hexdrinker
        </h4>
        <div class="attribute-change">
					<span class="attribute">Attack Damage</span> <span class="attribute-before">20</span> <span class="change-indicator">⇒</span> <span class="attribute-after">25</span>
				</div>
      </div>`
    },
    6664: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6664.png"></a>
        <h3 class="change-title" id="patch-Turbo-Chemtank"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Turbo Chemtank</a></h3>
        <blockquote class="blockquote context">
          Our changes to Turbo Chemtank in patch 12.2 were a bandaid to bring the item back in line on dash-y champs (like Akali and Irelia) while we looked for better solutions. We're further adjusting its stacking mechanics to make Turbo Chemtank better suited for "tanking" rather than for "turbo charging" at enemies. Emphasis on the tank, not the turbo. (These changes also apply to its Ornn Masterwork item, Turbocharged Hexperiment.)
        </blockquote>
        <hr class="divider">
        <div class="attribute-change">
          <span class="attribute"><span class="updated">updated</span>REFUEL (PASSIVE) STACKS</span> <span>Gain 5 stacks per instance of</span> <span class="attribute-before">damage dealt against champions and large monsters, and 1 stack for every 15 units traveled</span> <span class="change-indicator">⇒</span> <span class="attribute-after">damage taken from champions and large monsters, and 1 stack for every 25 units traveled <em>(still capped at up to 10 stacks for dashes and blinks)</em></span>
        </div>
        <div class="attribute-change">
          <span class="attribute"><span class="updated">updated</span>REFUEL (PASSIVE) BONUS DAMAGE</span> <span>At 100 stacks, your next basic attack deals magic damage to all nearby enemies,</span> <span class="attribute-before">increased by 25% against minions and 175% against monsters</span> <span class="change-indicator">⇒</span> <span class="attribute-after">increased by 30% against minions and 200% against monsters</span>
        </div>
      </div>`
    }
  },
};
