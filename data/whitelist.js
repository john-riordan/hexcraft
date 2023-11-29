import { assassin } from './assassin';
import { fighter } from './fighter';
import { mage } from './mage';
import { marksman } from './marksman';
import { support } from './support';
import { tank } from './tank';

function makeWhitelist(grps = []) {
  const subGrps = ['legendary', 'epic', 'basic', 'starter'];

  const whitelist = {};

  for (const grp of grps) {
    for (const subGrp of subGrps) {
      for (const [itemId, itemName] of Object.entries(grp[subGrp])) {
        whitelist[itemId] = itemName;
      }
    }
  }

  return whitelist;
}

export const whitelist = makeWhitelist([
  assassin,
  fighter,
  mage,
  marksman,
  support,
  tank,
]);
