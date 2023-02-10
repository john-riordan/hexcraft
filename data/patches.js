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
  },
};
