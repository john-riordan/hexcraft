import { CHANGE_TYPES } from '../helpers/constants';

export const PATCHES = {
  '11.6.1': {
    6673: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd8e4baf0cd1b641b/604aefeb1a42e25ce54e9dae/6653_Mage_T4_LiandrysAnguish.png"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/11.5.1/img/item/6673.png"></a>
        <h3 class="change-title">Immortal Shieldbow</h3>
        <div class="attribute-change">
					<span class="attribute">LIFESTEAL</span> <span class="attribute-before">12%</span> <span class="change-indicator">⇒</span> <span class="attribute-after">10%</span>
				</div>
        <div class="attribute-change">
					<span class="attribute"><span class="removed">removed</span>LIFELINE LIFESTEAL</span> <span class="attribute-removed">Immortal Shieldbow no longer grants 15% lifesteal for 8 seconds</span>
				</div>
        <div class="attribute-change">
					<span class="attribute"><span class="new">new</span>LIFELINE</span> <span class="attribute-after">Immortal Shieldbow now grants 13-35 AD when triggered</span>
				</div>
        <div class="attribute-change">
					<span class="attribute">SHIELD</span> <span class="attribute-before">250-700</span> <span class="change-indicator">⇒</span> <span class="attribute-after">300-800</span>
				</div>
      </div>`,
    },
    3153: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd8e4baf0cd1b641b/604aefeb1a42e25ce54e9dae/6653_Mage_T4_LiandrysAnguish.png"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/11.5.1/img/item/3153.png"></a>
        <h3 class="change-title">Blade of the Ruined King</h3>
        <div class="attribute-change">
					<span class="attribute">LIFESTEAL</span> <span class="attribute-before">12%</span> <span class="change-indicator">⇒</span> <span class="attribute-after">10%</span>
				</div>
        <div class="attribute-change">
          <span class="attribute">SIPHON DAMAGE</span> <span class="attribute-before">40-120 (levels 1-18)</span> <span class="change-indicator">⇒</span> <span class="attribute-after">40-150 (levels 1-18)</span>
        </div>
      </div>`,
    },
    6653: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd8e4baf0cd1b641b/604aefeb1a42e25ce54e9dae/6653_Mage_T4_LiandrysAnguish.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd8e4baf0cd1b641b/604aefeb1a42e25ce54e9dae/6653_Mage_T4_LiandrysAnguish.png"></a>
        <h3 class="change-title" id="patch-Liandrys-Anguish"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd8e4baf0cd1b641b/604aefeb1a42e25ce54e9dae/6653_Mage_T4_LiandrysAnguish.png">Liandry's Anguish</a></h3>
        <blockquote class="blockquote context">
          We’re aiming to open up more potential AP Mythics by making Liandry and Luden’s more usable across mages. These changes should entice burst mages to pick it up when facing tanky team comps.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute"><span class="removed">removed</span>TORMENT MAGIC PENETRATION</span> <span class="attribute-removed">Liandry’s no longer grants 5% magic penetration per second against burning targets</span>
        </div>
        <div class="attribute-change">
          <span class="attribute"><span class="new">new</span>TORMENT BONUS DAMAGE</span> <span class="attribute-after">Liandry’s now grants up to 12% bonus magic damage to champions based on their bonus health (maximum 1250 bonus health)</span>
        </div>
      </div>`,
    },
    6655: {
      change: CHANGE_TYPES.buff,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbcdd3550bd5b5cf9/604aefdf3c41f30bce4851de/6655_Mage_T4_LudensTempest.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbcdd3550bd5b5cf9/604aefdf3c41f30bce4851de/6655_Mage_T4_LudensTempest.png"></a>
        <h3 class="change-title" id="patch-Ludens-Tempest"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbcdd3550bd5b5cf9/604aefdf3c41f30bce4851de/6655_Mage_T4_LudensTempest.png">Luden's Tempest</a></h3>
        <blockquote class="blockquote context">
          Like Liandry’s above, we’re adding another AP Mythic to the mix. This should be a better option for mages who deal damage over time.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute"><span class="new">new</span>ECHO COOLDOWN</span> <span class="attribute-after">Dealing ability damage to an enemy champion now also reduces Echo’s cooldown by 0.5 seconds (up to 3 seconds per ability)</span>
        </div>
      </div>`,
    },
    3089: {
      change: CHANGE_TYPES.buff,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt428b43ee40e005b7/604aefeb1322a9094ddf09d6/3089_Mage_T3_Deathcap.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt428b43ee40e005b7/604aefeb1322a9094ddf09d6/3089_Mage_T3_Deathcap.png"></a>
        <h3 class="change-title" id="patch-Rabadons-Deathcap"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt428b43ee40e005b7/604aefeb1322a9094ddf09d6/3089_Mage_T3_Deathcap.png">Rabadon's Deathcap</a></h3>
        <blockquote class="blockquote context">
          Looking to make Rabadon’s a more snug and budget-friendly fit as a third purchase.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute">TOTAL COST</span> <span class="attribute-before">3800 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">3600 gold</span>
        </div>
      </div>`,
    },
    3191: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt473a4b6f09010eba/604aefeb3c41f30bce4851e2/3191_Battlemage_T2_SeekersArmguard.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt473a4b6f09010eba/604aefeb3c41f30bce4851e2/3191_Battlemage_T2_SeekersArmguard.png"></a>
        <h3 class="change-title" id="patch-Seekers-Armguard"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt473a4b6f09010eba/604aefeb3c41f30bce4851e2/3191_Battlemage_T2_SeekersArmguard.png">Seeker's Armguard</a></h3>
        <blockquote class="blockquote context">
          Seeker's Armguard and Verdant Barrier have been doing their job a bit <em>too</em> well, keeping AP scaling champs too safe as the laning phase progresses, which masks their intended weaknesses and contributes to a particularly dull meta. We’re adjusting the strength of these mid-tier items, while retaining the power level of the Legendary items they build into (Zhonya’s Hourglass and Banshee’s Veil).
        </blockquote>
        <div class="attribute-change">
          <span class="attribute">BONUS ARMOR PER KILL</span> <span class="attribute-before">1</span> <span class="change-indicator">⇒</span> <span class="attribute-after">0.5</span>
        </div>
        <div class="attribute-change">
          <span class="attribute">MAX ARMOR</span> <span class="attribute-before">30</span> <span class="change-indicator">⇒</span> <span class="attribute-after">15</span>
        </div>
      </div>`,
    },
    4632: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbbc5790ea4af03b2/604aefebf9638443346d74a9/4632_Tank_T2_VerdantBarrier.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbbc5790ea4af03b2/604aefebf9638443346d74a9/4632_Tank_T2_VerdantBarrier.png"></a>
        <h3 class="change-title" id="patch-Verdant-Barrier"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbbc5790ea4af03b2/604aefebf9638443346d74a9/4632_Tank_T2_VerdantBarrier.png">Verdant Barrier</a></h3>
        <blockquote class="blockquote context">
          Seek up to Seeker’s! Like the above, we’re nudging down Verdant’s power while keeping its final item strength.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute">MAGIC RESIST PER KILL</span> <span class="attribute-before">0.5</span> <span class="change-indicator">⇒</span> <span class="attribute-after">0.3</span>
        </div>
        <div class="attribute-change">
          <span class="attribute">MAX MAGIC RESIST</span> <span class="attribute-before">15</span> <span class="change-indicator">⇒</span> <span class="attribute-after">9</span>
        </div>
        <div class="attribute-change">
          <span class="attribute">ABILITY POWER</span> <span class="attribute-before">25</span> <span class="change-indicator">⇒</span> <span class="attribute-after">20</span>
        </div>
      </div>`,
    },
    2065: {
      change: CHANGE_TYPES.buff,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt86900a4adb6609d4/604aeff47b7aea45bd9f7e30/2065_Tank_T4_ShurelyasBattlesong.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt86900a4adb6609d4/604aeff47b7aea45bd9f7e30/2065_Tank_T4_ShurelyasBattlesong.png"></a>
        <h3 class="change-title" id="patch-Shurelyas-Battlesong"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt86900a4adb6609d4/604aeff47b7aea45bd9f7e30/2065_Tank_T4_ShurelyasBattlesong.png">Shurelya's Battlesong</a></h3>
        <blockquote class="blockquote context">
          By the numbers, Moonstone Renewer has been the dominating choice among enchanters, so we're buffing Battlesong to be an even catchier tune than it already is.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute">INSPIRE COOLDOWN</span> <span class="attribute-before">90 seconds</span> <span class="change-indicator">⇒</span> <span class="attribute-after">75 seconds</span>
        </div>
      </div>`,
    },
    6631: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0fc482628ea11396/604aefebe122b53af551317a/6631_Fighter_T4_StrideBreaker.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0fc482628ea11396/604aefebe122b53af551317a/6631_Fighter_T4_StrideBreaker.png"></a>
        <h3 class="change-title" id="patch-Stridebreaker"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0fc482628ea11396/604aefebe122b53af551317a/6631_Fighter_T4_StrideBreaker.png">Stridebreaker</a></h3>
        <blockquote class="blockquote context">
          It’s time for Stridebreaker to take a break.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute">HEALTH</span> <span class="attribute-before">300</span> <span class="change-indicator">⇒</span> <span class="attribute-after">200</span>
        </div>
      </div>`,
    },
    6029: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1920f76a50db4245/604aefebfef76d094c704209/6029_Fighter_T2_IronSpikeWhip.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1920f76a50db4245/604aefebfef76d094c704209/6029_Fighter_T2_IronSpikeWhip.png"></a>
        <h3 class="change-title" id="patch-Ironspike-Whip"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1920f76a50db4245/604aefebfef76d094c704209/6029_Fighter_T2_IronSpikeWhip.png">Ironspike Whip</a></h3>
        <blockquote class="blockquote context">
          Strangely, Stridebreaker had a longer cooldown than Ironspike, so we’re rectifying that. We’re also bringing down its cost to account for its power loss.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute">TOTAL COST</span> <span class="attribute-before">1200 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">1100 gold</span>
        </div>
        <div class="attribute-change">
          <span class="attribute">COOLDOWN</span> <span class="attribute-before">15 seconds</span> <span class="change-indicator">⇒</span> <span class="attribute-after">20 seconds</span>
        </div>
      </div>`,
    },
    3068: {
      change: CHANGE_TYPES.buff,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9d40f6af45f1b8a4/604aeff42d310e5a62e1a336/3068_Tank_T4_SunfireAegis.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9d40f6af45f1b8a4/604aeff42d310e5a62e1a336/3068_Tank_T4_SunfireAegis.png"></a>
        <h3 class="change-title" id="patch-Sunfire-Aegis"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9d40f6af45f1b8a4/604aeff42d310e5a62e1a336/3068_Tank_T4_SunfireAegis.png">Sunfire Aegis</a></h3>
        <blockquote class="blockquote context">
          Now that players are starting to realize other tank Mythics are reasonable options, we feel comfortable giving back some of Sunfire’s oomph, considering it has been the worst performing item among its peers for a while.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute">ABILITY HASTE</span> <span class="attribute-before">15</span> <span class="change-indicator">⇒</span> <span class="attribute-after">20</span>
        </div>
        <div class="attribute-change">
          <span class="attribute">IMMOLATE SUBSEQUENT DAMAGE</span> <span class="attribute-before">10% per second, up to 60%</span> <span class="change-indicator">⇒</span> <span class="attribute-after">12% per second, up to 72%</span>
        </div>
      </div>`,
    },
    3135: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <a class="reference-link" href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6f186dc3cca75f50/604aefeba8c6585cda24dd66/3135_Mage_T3_VoidStaff.png"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6f186dc3cca75f50/604aefeba8c6585cda24dd66/3135_Mage_T3_VoidStaff.png"></a>
        <h3 class="change-title" id="patch-Void-Staff"><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6f186dc3cca75f50/604aefeba8c6585cda24dd66/3135_Mage_T3_VoidStaff.png">Void Staff</a></h3>
        <blockquote class="blockquote context">
          With a strong passive and low cost, we’re making it worse as an early rush item.
        </blockquote>
        <div class="attribute-change">
          <span class="attribute">ABILITY POWER</span> <span class="attribute-before">65</span> <span class="change-indicator">⇒</span> <span class="attribute-after">70</span>
        </div>
        <div class="attribute-change">
          <span class="attribute">COMBINE COST</span> <span class="attribute-before">400 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">600 gold</span>
        </div>
      </div>`,
    },
  },
};
