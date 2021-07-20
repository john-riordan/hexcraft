import { CHANGE_TYPES } from '../helpers/constants';

export const PATCHES = {
  '11.15.1': {
    3181: {
      change: CHANGE_TYPES.buff,
      details: `<div>
      <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"
        ><img
          src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt99f3441041dba5ca/60f5c98b1929bc58854d0054/Hullbreakerv2.png"
      /></a>
      <h3 class="change-title" id="patch-hullbreaker">
        <a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Hullbreaker</a>
      </h3>
      <blockquote class="blockquote context">
        Hullbreaker could use some help as the game reaches later phases of the game. We’re giving more durability for
        anyone who’s hunting alone.
      </blockquote>
      <hr class="divider" />
      <div class="attribute-change">
        <span class="attribute">BOARDING PARTY BONUS RESISTANCES</span>
        <span class="attribute-before">20-45 bonus armor and bonus magic resistance (level 9-18)</span>
        <span class="change-indicator">⇒</span>
        <span class="attribute-after">20-60 bonus armor and bonus magic resistance (level 9-18)</span>
      </div>
      <div class="attribute-change">
        <span class="attribute">BOARDING PARTY MINION BONUS RESISTANCES</span>
        <span class="attribute-before">60-135 bonus armor and bonus magic resistance (level 9-18)</span>
        <span class="change-indicator">⇒</span>
        <span class="attribute-after">60-180 bonus armor and bonus magic resistance (level 9-18)</span>
      </div>
    </div>`,
    },
  },
  '11.14.1': {
    3742: {
      change: CHANGE_TYPES.buff,
      details: `<div>
      <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"
        ><img
          src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf84e4d09e2806884/5fa1f01e67a7c354926051cc/3742_Tank_T3_DeadmansPlate.png"
      /></a>
      <h3 class="change-title" id="patch-Dead-Mans-Plate">
        <a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Dead Man's Plate</a>
      </h3>
      <blockquote class="blockquote context">
        Dead Man's Plate’s changes from last patch led to a win rate drop for tanks since it lost movement speed and gained
        damage-scaling. To offset, we’re upping its armor to give tanks more tank to tank.
      </blockquote>
      <hr class="divider" />
      <h4 class="change-detail-title">Base Stats</h4>
      <div class="attribute-change">
        <span class="attribute">ARMOR</span> <span class="attribute-before">40</span>
        <span class="change-indicator">⇒</span> <span class="attribute-after">45</span>
      </div>
    </div>`,
    },
    6631: {
      change: CHANGE_TYPES.buff,
      details: `<div>
      <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"
        ><img
          src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0fc482628ea11396/604aefebe122b53af551317a/6631_Fighter_T4_StrideBreaker.png"
      /></a>
      <h3 class="change-title" id="patch-Stridebreaker">
        <a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Stridebreaker</a>
      </h3>
      <blockquote class="blockquote context">
        Stridebreaker landed strong after its change last patch. One of our goals for the item was to give fighters a way to
        stick to a target for a period of time, but they don’t need to bring their unlucky foe to a complete standstill to
        do that. So we’re toning down how much it can slow, but keeping its slow over time.<br />
        <br />
        Also, we did an oopsie—the changes also caused Stridebreaker to lose 5 AD on completion. That’s fixed now.
      </blockquote>
      <div class="attribute-change">
        <span class="attribute">ATTACK DAMAGE</span> <span class="attribute-before">40</span>
        <span class="change-indicator">⇒</span> <span class="attribute-after">45</span>
      </div>
      <div class="attribute-change">
        <span class="attribute">HEALTH</span> <span class="attribute-before">400</span>
        <span class="change-indicator">⇒</span> <span class="attribute-after">300</span>
      </div>
      <div class="attribute-change">
        <span class="attribute">HALTING SLASH SLOW</span>
        <span class="attribute-before">90%, decaying to 40% over 3 seconds</span> <span class="change-indicator">⇒</span>
        <span class="attribute-after">40% for 3 seconds</span>
      </div>
      <div class="attribute-change">
        <span class="attribute">DREAMSHATTER (ORNN UPGRADE) ATTACK DAMAGE</span> <span class="attribute-before">50</span>
        <span class="change-indicator">⇒</span> <span class="attribute-after">55</span>
      </div>
      <div class="attribute-change">
        <span class="attribute">DREAMSHATTER (ORNN UPGRADE) HEALTH</span> <span class="attribute-before">500</span>
        <span class="change-indicator">⇒</span> <span class="attribute-after">400</span>
      </div>
      <div class="attribute-change">
        <span class="attribute">DREAMSHATTER (ORNN UPGRADE) HALTING SLASH SLOW</span>
        <span class="attribute-before">90%, decaying to 40% over 3 seconds</span> <span class="change-indicator">⇒</span>
        <span class="attribute-after">40% for 3 seconds</span>
      </div>
    </div>
    `,
    },
  },
};
