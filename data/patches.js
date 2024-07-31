import { CHANGE_TYPES } from "../helpers/constants";

export const PATCHES = {
  "14.10.1": {
    2503: {
      change: CHANGE_TYPES.new,
      details: `
        <div>
          <a class="reference-link" href="https://www.leagueoflegends.com/en-us/how-to-play/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5e3ca448dd772c95/663c17f5f807b22771e9bbf2/Blackfire_Torch.png?disposition=inline"></a>
          <h3 class="change-title" id="patch-blackfire-torch"><span class="new">new</span> <a href="https://www.leagueoflegends.com/en-us/how-to-play/">Blackfire Torch</a></h3>
          <blockquote class="blockquote context">
            We have identified a problem that the mage item system is lacking a strong mana item option for sustained damage dealers. The introduction of Blackfire Torch and adjustments on Luden's Companion are both aiming to resolve the problem by offering a variety of mana item choices: Blackfire Torch is designed to appeal to battlemages and control mages that want to do sustained damage, while Luden's Companion can focus more on burst and AoE damage dealers. In terms of roles, we position this item to be good for both mage junglers and laners as long as it fits their needs.
            
          </blockquote>
          <hr class="divider">
          <ul>
            <li><strong>Build Path</strong>: Lost Chapter + Fated Ashes + 700 Gold (2800 gold total cost)</li>
            <li><strong>Ability Power</strong>: 90</li>
            <li><strong>Mana</strong>: 600</li>
            <li><strong>Haste</strong>: 25</li>
            <li><strong>Baleful Blaze</strong>: Dealing damage with abilities causes enemies to burn for 20 + 2% AP magic damage per second for 3 seconds. Deals 20 bonus damage per second to monsters.</li>
            <li><strong>Blackfire</strong>: For each enemy Champion, Epic Monster, and Large Monster affected by your Baleful Blaze, gain 4% AP</li>
          </ul>
        </div>
      `,
    },
  },
};
