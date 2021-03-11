import { CHANGE_TYPES } from '../helpers/constants';

export const PATCHES = {
  '11.5.1': {
    3042: {
      change: CHANGE_TYPES.buff,
      details: `<div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/11.4.1/img/item/3042.png"></a>
        <h3 class="change-title" id="patch-Muramana">
          <a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Muramana</a>
        </h3>

        <blockquote class="blockquote context">
          Muramana heavily overlaps with Essence Reaver, both in stats and use cases. To better differentiate between the two, we’re changing Muramana’s proc to focus more on empowering abilities, whereas Essence Reaver empowers auto attacks through abilities.
        </blockquote>

        <div class="attribute-change">
          <span class="attribute">SHOCK</span> <span class="attribute-before">Basic attacks and abilities deal 2.5% max mana as bonus damage against champions</span> <span class="change-indicator">⇒</span> <span class="attribute-after">Basic attacks deal 1.5% max mana as bonus damage. Melee abilities deal 3.5% max mana as bonus damage and ranged abilities deal 2.7% max mana as bonus damage; all abilities also deal +6% total AD as bonus damage against champions (on-hit attacks that trigger spell effects count as abilities for this purpose)</span>
        </div>

        <div class="attribute-change">
          <span class="attribute">SHOCK BUGFIX</span> <span class="attribute-after">Fixed a bug where damaging abilities would proc Shock's bonus damage once per ability, and should now only proc once per <strong>champion</strong> per ability</span>
        </div>
      </div>`,
    },
    6631: {
      change: CHANGE_TYPES.change,
      details: `<div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/10.25.1/img/item/6631.png"></a>
        <h3 class="change-title" id="patch-Stridebreaker">
          <a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Stridebreaker</a>
        </h3>

        <blockquote class="blockquote context">
          Stridebreaker's dash didn’t feel as powerful as its slash, so we’re balancing both while aiming for a power-neutral change.
        </blockquote>

        <div class="attribute-change">
          <span class="attribute">HALTING SLASH DASH RANGE</span> <span class="attribute-before">200</span> <span class="change-indicator">⇒</span> <span class="attribute-after">300</span>
        </div>

        <div class="attribute-change">
          <span class="attribute">HALTING SLASH DASH SPEED</span> <span class="attribute-after">Slightly increased</span>
        </div>

        <div class="attribute-change">
          <span class="attribute">HALTING SLASH SLOW DECAY</span> <span class="attribute-before">60% over 2 seconds</span> <span class="change-indicator">⇒</span> <span class="attribute-after">40% over 2 seconds</span>
        </div>

        <div class="attribute-change">
          <span class="attribute">DAMAGE</span> <span class="attribute-before">100% AD</span> <span class="change-indicator">⇒</span> <span class="attribute-after">75% AD</span>
        </div>
      </div>`,
    },
    3124: {
      change: CHANGE_TYPES.nerf,
      details: `<div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/10.24.1/img/item/3124.png"></a>
        <h3 class="change-title" id="patch-guinsoos-rageblade">
          <a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Guinsoo's Rageblade</a>
        </h3>

        <blockquote class="blockquote context">
          Certain champions, like Senna, benefit too much from Guinsoo’s Rageblade when you consider the fact that its crit strike chance can scale over 100% and it ignores crit damage modifiers. We’re adding some rules to it to circumvent these edge cases, allow for more item diversity with those champions, and help us better tune the item to be usable for more of the roster. <br>
          <br>
          Speaking of Senna, now, her passive can no longer give her above 100% crit strike chance, and any excess crit is converted into lifesteal at the same rate.
        </blockquote>

        <div class="attribute-change">
          <span class="attribute"><span class="updated">updated</span>WRATH</span> <span class="attribute-after">Convert every 1% critical strike chance into 2 bonus physical damage on-hit, with a maximum of 100% critical strike chance. Wrath’s on-hit damage conversion is now affected by critical strike damage modifiers.</span>
        </div>
      </div>`,
    },
    6695: {
      change: CHANGE_TYPES.buff,
      details: `<div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbce97939435f1b2f/5fffc1e85c57ba54fd67ee2d/Serpent_27s_Fang_item.png"></a>
        <h3 class="change-title" id="patch-Serpents-fang">
          <a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Serpent’s Fang</a>
        </h3>

        <blockquote class="blockquote context">
          Serpent’s Fang is a powerful but underwhelming and confusing item, so we're making it more broadly usable. Imagine Grievous Wounds for shields, but with extra profits!
        </blockquote>

        <div class="attribute-change">
          <span class="attribute"><span class="updated">updated</span>SHIELD REAVER</span> <span class="attribute-after">Dealing damage to an enemy champion reduces any shields they gain by 50% for melee champions and 25% for ranged champions for the next three seconds. When you damage an enemy who is unaffected by Shield Reaver, reduce all shields on them by 50% for melee champions and 25% for ranged champions.</span>
        </div>

        <div class="attribute-change">
          <span class="attribute">ON-HIT ITEM BUGFIX</span> <span class="attribute-after">Fixed a bug where Serpent's Fang's Shield Reaver passive would not reduce an enemy's shields if the user had any on-hit items equipped</span>
        </div>
      </div>`,
    },
    3156: {
      change: CHANGE_TYPES.buff,
      details: `<div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/11.4.1/img/item/3156.png"></a>
        <h3 class="change-title" id="patch-Maw-of-Malmortius">
          <a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Maw of Malmortius</a>
        </h3>

        <blockquote class="blockquote context">
          Dropping Maw's price to be a more attractive and affordable defensive option.
        </blockquote>

        <div class="attribute-change">
          <span class="attribute">TOTAL COST</span> <span class="attribute-before">3100 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">2800 gold</span>
        </div>
      </div>`,
    },
    3071: {
      change: CHANGE_TYPES.buff,
      details: `<div>
        <a class="reference-link" href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/"><img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf1da4536b280ae57/5fa1efd0432f517518d427ac/3071_Fighter_T3_BlackCleaver.png"></a>
        <h3 class="change-title" id="patch-Black-Cleaver">
          <a href="http://gameinfo.na.leagueoflegends.com/en/game-info/items/">Black Cleaver</a>
        </h3>

        <blockquote class="blockquote context">
          Adjusting Black Cleaver to be better suited for longer fights while packing it with more punch for its cost.
        </blockquote>

        <div class="attribute-change">
          <span class="attribute">TOTAL COST</span> <span class="attribute-before">3300 gold</span> <span class="change-indicator">⇒</span> <span class="attribute-after">3100 gold</span>
        </div>

        <div class="attribute-change">
          <span class="attribute">HEALTH</span> <span class="attribute-before">300</span> <span class="change-indicator">⇒</span> <span class="attribute-after">400</span>
        </div>

        <div class="attribute-change">
          <span class="attribute"><span class="removed">removed</span>BUTCHER</span> <span class="attribute-removed">Black Cleaver no longer deals bonus physical damage</span>
        </div>

        <div class="attribute-change">
          <span class="attribute"><span class="new">new</span>RAGE</span> <span class="attribute-after">Dealing physical damage to a champion grants 5 movement speed per stack of Carve on them for 2 seconds</span>
        </div>
      </div>`,
    },
  },
};
