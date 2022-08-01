import { CHANGE_TYPES } from '../helpers/constants';

export const PATCHES = {
  '12.14.1': {
    6609: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3d563f76294b25e1/5fa1f07983a0a3620dd3d128/6609_Fighter_T3_ChempunkChainsword.png"></a>
        <h3 class="change-title" id="patch-Chempunk-Chainsword"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Chempunk Chainsword</a></h3>
        <blockquote class="blockquote context">
          With our changes in patch 12.11, Chempunk Chainsword became an incredibly gold efficient item, even with its reduced Grievous Wounds effects. Instead of nerfing the item’s stats we’re opting to increase its cost to bring it more in line with other Legendary Fighter item options.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute">Combine Cost</span> <span class="attribute-before">300</span> <span class="change-indicator">⇒</span> <span class="attribute-after">500</span>
        </div>
        <div class="attribute-change">
          <span class="attribute">Total Cost</span> <span class="attribute-before">2600</span> <span class="change-indicator">⇒</span> <span class="attribute-after">2800</span>
        </div>
      </div>`,
    },
    3114: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">
          <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2675c981e0356ce3/5fa1f00ffe49b57a83a1718c/3222_Enchanter_T3_MikaelsBlessing.png">
        </a>
        <div class="attribute-change">
          <span class="attribute">Forbidden Idol Heal and Shield Power Increase</span> <span class="attribute-before">10%</span> <span class="change-indicator">⇒</span> <span class="attribute-after">8%</span>
        </div>
      </div>`,
    },
    3504: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <div class="attribute-change">
					<span class="attribute">Ardent Censer Heal and Shield Power Increase</span> <span class="attribute-before">10%</span> <span class="change-indicator">⇒</span> <span class="attribute-after">8%</span>
				</div>
      </div>`,
    },
    3222: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <div class="attribute-change">
          <span class="attribute">Mikael's Blessing Heal and Shield Power Increase</span> <span class="attribute-before">20%</span> <span class="change-indicator">⇒</span> <span class="attribute-after">16%</span>
        </div>
      </div>`,
    },
    3107: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <div class="attribute-change">
          <span class="attribute">Redemption Heal and Shield Power Increase</span> <span class="attribute-before">20%</span> <span class="change-indicator">⇒</span> <span class="attribute-after">16%</span>
        </div>
      </div>`,
    },
    6616: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <div class="attribute-change">
          <span class="attribute">Staff of Flowing Water Heal and Shield Power Increase</span> <span class="attribute-before">10%</span> <span class="change-indicator">⇒</span> <span class="attribute-after">8%</span>
        </div>
      </div>`,
    },
    6617: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <div class="attribute-change">
          <span class="attribute">Moonstone Renewer Maximum Stacks</span> <span class="attribute-before">5</span> <span class="change-indicator">⇒</span> <span class="attribute-after">4</span>
        </div>
      </div>`,
    },
    3068: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdfe2826a06ccbcc9/5fa1efd6209f0756c89d6c82/3068_Tank_T4_SunfireAegis.png"></a>
        <h3 class="change-title" id="patch-Enchanter-Items"><a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Sunfire Aegis</a></h3>
        <blockquote class="blockquote context">
          Sunfire Aegis has started to emerge as a powerful second item for DPS champions. While Fighters have dipped into other Tank items before, Sunfire offers the most stats and potent damage compared to other options. We're adjusting Sunfire so its damage output is more strongly tied to health stacking.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute">Immolate Damage</span> <span class="attribute-before">12-30 (based on level) (+1% bonus health)</span> <span class="change-indicator">⇒</span> <span class="attribute-after">15 (+1.75% bonus health)</span>
        </div>
      </div>`,
    },
  },
};
