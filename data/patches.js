import { CHANGE_TYPES } from "../helpers/constants";

export const PATCHES = {
  "15.4.1": {
    8020: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
          <a target="_blank" href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/bf027dc823d6971ecaa98b0bec92821874c85c0e-512x512.png"></a>
          <h3 id="patch-Abyssal-Mask" class="change-title"><a target="_blank" href="https://www.leagueoflegends.com/">Abyssal Mask</a></h3>
          <blockquote class="blockquote context">
              Though Abyssal Mask is doubly situational, both needing MR and other magic-damage teammates to synergize with, it was overbuffed at season start and doesn't need to be quite so good. We're fine with Abyssal being a fairly rare purchase, as it's not important that tanks consistently raise damage output across the board.
          </blockquote>
          <ul>
          <li> <strong>Magic Resistance</strong>: 50 ⇒ 45</li>
          </ul>
        </div>
      `,
    },
    3121: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
          <a target="_blank" href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8e795aed364abd249da816fe1502535daa71e85f-512x512.png"></a>
          <h3 id="patch-Fimbulwinter" class="change-title"><a target="_blank" href="https://www.leagueoflegends.com/">Fimbulwinter</a></h3>
          <blockquote class="blockquote context">
              We've had Fimbulwinter on our radar for a while. It's been a very strong item for a while, but it's been consistently overlooked, especially since not all tanks need mana. However, we're at a point now where champions who are between two options (Fimbulwinter vs. Muramana or vs. Seraph's Embrace) should clearly always be choosing the tank option. We're looking to fix that this patch, so we're bringing its shield down a notch.
          </blockquote>
          <ul>
          <li> <strong>Everlasting Shield</strong>: 100-180 (based on level) (+4.5% current mana) ⇒ 100 (+4.5% current mana) <em>(Note: this is roughly 30% less shielding in average cases)</em></li>
          </ul>
        </div>
      `,
    },
    3084: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
          <a target="_blank" href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d2177c150d1593b3155a359c8d1d12ecee56d132-512x512.png"></a>
          <h3 id="patch-Heartsteel" class="change-title"><a target="_blank" href="https://www.leagueoflegends.com/">Heartsteel</a></h3>
          <blockquote class="blockquote context">
              While very popular and the current poster child of frustrating tank items, we don't believe Heartsteel is actually quite as powerful as its reputation may suggest. The nerf here is meant to be fairly small as a result. That said, the high-end snowball cases for this item can get out of hand, so we're specifically going after the best-case scenarios where it gains over 1000 bonus HP and feeds into all the other HP scaling.
          </blockquote>
          <ul>
          <li> <strong>Colossal Consumption Max Health</strong>: 10% of damage ⇒ 8% of damage</li>
          </ul>
        </div>
      `,
    },
    3031: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
          <a target="_blank" href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ef0e6a899c64a990bef501a0506fa8b41b85fa31-512x512.png"></a>
          <h3 id="patch-Infinity-Edge" class="change-title"><a target="_blank" href="https://www.leagueoflegends.com/">Infinity Edge</a></h3>
          <blockquote class="blockquote context">
              ADC builds take a little bit too long to get off the ground at the moment, so we're shrinking their most-built item, Infinity Edge, in order to let them get into the rest of their build sooner.
          </blockquote>
          <ul>
          <li> <strong>Price</strong>: 3600 ⇒ 3450 gold</li>
          <li> <strong>Attack Damage</strong>: 70 ⇒ 65</li>
          </ul>
        </div>
      `,
    },
    3111: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
          <a target="_blank" href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0ec2a4d56221cafc687b21d7e9f09e0c8725e69b-512x512.png"></a>
          <h3 id="patch-Plated-Steelcaps" class="change-title"><a target="_blank" href="https://www.leagueoflegends.com/">Mercury Treads</a></h3>
          <blockquote class="blockquote context">
              After making several balance passes at level 2 boots late last year, we've gotten them to a point where they're appropriately competitive with legendary items. That said, we've got some minor balance outliers within the boots space itself, so we're looking to bring up some of the worst performers and bring down the top end a touch.<br><br>First is Mercury's Treads, which is the weakest tank footwear. We know 50 gold doesn't sound like a lot, but boots are small items and as a percentage, this is like dropping 125 gold off of a full legendary.
          </blockquote>
          <ul>
          <li> <strong>Price</strong>: 1300 ⇒ 1250 gold</li>
          </ul>
        </div>
      `,
    },
    3047: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
          <a target="_blank" href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3d6ef9e13eb71abec602ca1c2d924c09cc4d9eb3-512x512.png"></a>
          <h3 id="patch-Plated-Steelcaps" class="change-title"><a target="_blank" href="https://www.leagueoflegends.com/">Plated Steelcaps</a></h3>
          <blockquote class="blockquote context">
              As Mercury's Treads are getting a bit stronger, Plated Steelcaps are getting a bit weaker, since they're currently the strongest boots in the game. This has the added benefit of being a very small buff for ADCs, which we're happy to lightly buff in the short term.
          </blockquote>
          <ul>
          <li> <strong>Damage Reduction from Auto Attacks</strong>: 12% ⇒ 10%</li>
          </ul>
        </div>
      `,
    },
    3010: {
      change: CHANGE_TYPES.buff,
      details: `
        <div>
          <a target="_blank" href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/60ea59d8de35f54b2ab4657c2c0f19e3ec5c8bb5-512x512.png"></a>
          <h3 id="patch-Symbiotic-Soles" class="change-title"><a target="_blank" href="https://www.leagueoflegends.com/">Symbiotic Soles</a></h3>
          <blockquote class="blockquote context">
              Symbiotic Soles are the worst-performing boots in the game for most players, so they're deserving of a buff. We're being a bit cautious here, only giving 5 move speed to the unupgraded version, but we'll keep an eye out to see if they're deserving of more love in the future. 
          </blockquote>
          <ul>
          <li> <strong>Flat Movement Speed</strong>: 35 ⇒ 40 <em>(Note: Evolved movement speed unchanged at 45)</em></li>
          </ul>
        </div>
      `,
    },
    2502: {
      change: CHANGE_TYPES.nerf,
      details: `
        <div>
          <a target="_blank" href="https://www.leagueoflegends.com/" class="reference-link"><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3f3e03d4d63941d88c5b8df2f3b45a3c8d522572-512x512.png"></a>
          <h3 id="patch-Unending-Despair" class="change-title"><a target="_blank" href="https://www.leagueoflegends.com/">Unending Despair</a></h3>
          <blockquote class="blockquote context">
              Unending Despair was the strongest tank item in the game before season start, but players hadn't really caught on. Now that it's generically purchasable with both armor and MR, players are flocking in and identifying that it is indeed very, very good. As the intent was to push the item more toward health stackers, we're continuing on that trend, making it still great for champions who stack bonus health and less of a generic tank item that anyone can grab.
          </blockquote>
          <ul>
          <li> <strong>Anguish</strong>: 8-15 (based on level) (+3% bonus health) ⇒ 3% of bonus health <em>(Note: this is a 10-15% nerf to the item's damage)</em></li>
          </ul>
        </div>
      `,
    },
  },
};
