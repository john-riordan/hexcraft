import { CHANGE_TYPES } from '../helpers/constants';

export const PATCHES = {
  '13.3.1': {
    6667: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
          <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt94278793f247d8fa/636c7000e6c581116eff4aa9/111522_Patch_12_22_Notes_RadiantVirtue.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt94278793f247d8fa/636c7000e6c581116eff4aa9/111522_Patch_12_22_Notes_RadiantVirtue.png"></a>
          <h3 class="change-title" id="patch-radiant-virtue"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt94278793f247d8fa/636c7000e6c581116eff4aa9/111522_Patch_12_22_Notes_RadiantVirtue.png">Radiant Virtue</a></h3>
          <blockquote class="blockquote context">
            Radiant Virtue is currently overpowered (even if pickrate isn't reflecting it) yet its strength isn’t really appreciable due to how unclear the item's best points are (because when you buy a strong item, you should feel strong). We're making Radiant Virtue’s upsides more apparent and impactful while removing some of the extraneous power that is pushing this item a bit too far. We feel enchanters already have plenty of defensive support options, while Radiant Virtue is meant for selfless tanks, who have fewer. So we’re tying Radiant's value more directly tied to tanks with the budget to acquire even more health.
          </blockquote>
          <ul>
            <li><strong>Total Cost</strong>: 3000 ⇒ 3200</li>
            <li><strong>Passive - Guiding Light Cooldown</strong>:60 seconds ⇒ 90 seconds</li>
            <li><strong>Passive - Guiding Light Cooldown Maximum Health Gained</strong>: 10% ⇒ 15%</li>
            <li><strong>Total Healing</strong>: 8-16% maximum health over 9 seconds (note: includes healing amp passive) ⇒ 12% maximum health over 9 seconds</li>
            <li><span class="removed">removed</span><strong>Ability Haste</strong>: You and all allies within 1200 units gain 20 Ability Haste ⇒ REMOVED</li>
          </ul>
        </div>
      `,
    },
    3179: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
          <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta30e18f48bfcd256/63e1d447c338484e3b195829/020723_3179_Assassin_T3_UmbralGlaive.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta30e18f48bfcd256/63e1d447c338484e3b195829/020723_3179_Assassin_T3_UmbralGlaive.png"></a>
          <h3 class="change-title" id="patch-umbral-glaive"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta30e18f48bfcd256/63e1d447c338484e3b195829/020723_3179_Assassin_T3_UmbralGlaive.png">Umbral Glaive</a></h3>
          <blockquote class="blockquote context">
            Umbral Glaive is currently much too effective at choking out enemy vision for assassins, supports, assassin supports, and especially marksman supports (stop killing my defenseless wards, Ashe). We do think this item deserves a spot on the roster though, so we’re reducing its uptime and general ability to devastate enemy traps and vision.
          </blockquote>
          <ul>
            <li><strong>Cooldown</strong>: 40 seconds ⇒ 50 seconds</li>
            <li><span class="updated">updated</span><strong>Ranged Champion Reduced Damage to Wards</strong>: When a ranged champion using Umbral Glaive attacks a ward they will deal 2 true damage to it <em>(Note: Melee champions will still deal 3 damage to wards using Umbral Glaive)</em></li>
            <li><span class="removed">removed</span><strong>Trap Interactions</strong>: Umbral Glaive will no longer instantly kill traps, but it will still reveal them</li>
          </ul>
        </div>
      `,
    },
  },
};
