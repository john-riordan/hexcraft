import { assassin } from '../data/assassin';
import { fighter } from '../data/fighter';
import { mage } from '../data/mage';
import { marksman } from '../data/marksman';
import { support } from '../data/support';
import { tank } from '../data/tank';

const BASE = {
  assassin,
  fighter,
  mage,
  marksman,
  support,
  tank,
};

export function buildDisplayItems(itemsData = {}, tab) {
  const dict = itemsData.items;
  const groups = itemsData.all;

  const legendaryBase = BASE[tab]?.legendary;
  const epicBase = BASE[tab]?.epic;
  const basicsBase = BASE[tab]?.basic;
  const startersBase = BASE[tab]?.starter;

  if (tab) {
    return {
      legendaries: groups.legendaries
        .filter((itemId) => legendaryBase[itemId])
        .map((itemId) => dict[itemId]),
      epics: groups.epics
        .filter((itemId) => epicBase[itemId])
        .map((itemId) => dict[itemId]),
      basics: groups.basics
        .filter((itemId) => basicsBase[itemId])
        .map((itemId) => dict[itemId]),
      starters: groups.starters
        .filter((itemId) => startersBase[itemId])
        .map((itemId) => dict[itemId]),
    };
  }

  return {
    legendaries: groups.legendaries.map((itemId) => dict[itemId]),
    epics: groups.epics.map((itemId) => dict[itemId]),
    basics: groups.basics.map((itemId) => dict[itemId]),
    starters: groups.starters.map((itemId) => dict[itemId]),
  };
}
