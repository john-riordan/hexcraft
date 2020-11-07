import { assassin } from '../data/assassin';
import { fighter } from '../data/fighter';
import { mage } from '../data/mage';
import { marksman } from '../data/marksman';
import { support } from '../data/support';
import { tank } from '../data/tank';

export function buildDisplayItems(itemsData, tab) {
  switch (tab) {
    case 'assassin':
      return {
        mythics: itemsData.mythics.filter((i) => assassin.mythic[i.id]),
        legendaries: itemsData.legendaries.filter(
          (i) => assassin.legendary[i.id]
        ),
        epics: itemsData.epics.filter((i) => assassin.epic[i.id]),
        basics: itemsData.basics.filter((i) => assassin.basic[i.id]),
        starters: itemsData.starters.filter((i) => assassin.starter[i.id]),
      };
    case 'fighter':
      return {
        mythics: itemsData.mythics.filter((i) => fighter.mythic[i.id]),
        legendaries: itemsData.legendaries.filter(
          (i) => fighter.legendary[i.id]
        ),
        epics: itemsData.epics.filter((i) => fighter.epic[i.id]),
        basics: itemsData.basics.filter((i) => fighter.basic[i.id]),
        starters: itemsData.starters.filter((i) => fighter.starter[i.id]),
      };
    case 'mage':
      return {
        mythics: itemsData.mythics.filter((i) => mage.mythic[i.id]),
        legendaries: itemsData.legendaries.filter((i) => mage.legendary[i.id]),
        epics: itemsData.epics.filter((i) => mage.epic[i.id]),
        basics: itemsData.basics.filter((i) => mage.basic[i.id]),
        starters: itemsData.starters.filter((i) => mage.starter[i.id]),
      };
    case 'marksman':
      return {
        mythics: itemsData.mythics.filter((i) => marksman.mythic[i.id]),
        legendaries: itemsData.legendaries.filter(
          (i) => marksman.legendary[i.id]
        ),
        epics: itemsData.epics.filter((i) => marksman.epic[i.id]),
        basics: itemsData.basics.filter((i) => marksman.basic[i.id]),
        starters: itemsData.starters.filter((i) => marksman.starter[i.id]),
      };
    case 'support':
      return {
        mythics: itemsData.mythics.filter((i) => support.mythic[i.id]),
        legendaries: itemsData.legendaries.filter(
          (i) => support.legendary[i.id]
        ),
        epics: itemsData.epics.filter((i) => support.epic[i.id]),
        basics: itemsData.basics.filter((i) => support.basic[i.id]),
        starters: itemsData.starters.filter((i) => support.starter[i.id]),
      };
    case 'tank':
      return {
        mythics: itemsData.mythics.filter((i) => tank.mythic[i.id]),
        legendaries: itemsData.legendaries.filter((i) => tank.legendary[i.id]),
        epics: itemsData.epics.filter((i) => tank.epic[i.id]),
        basics: itemsData.basics.filter((i) => tank.basic[i.id]),
        starters: itemsData.starters.filter((i) => tank.starter[i.id]),
      };
    default:
      return {
        mythics: itemsData,
        legendaries: itemsData.legendaries,
        epics: itemsData.epics,
        basics: itemsData.basics,
        starters: itemsData.starters,
      };
  }
}
