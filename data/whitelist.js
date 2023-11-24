import { assassin } from './assassin';
import { fighter } from './fighter';
import { mage } from './mage';
import { marksman } from './marksman';
import { support } from './support';
import { tank } from './tank';

export const whitelist = {
  ...assassin.legendary,
  ...assassin.epic,
  ...assassin.basic,
  ...assassin.starter,

  ...fighter.legendary,
  ...fighter.epic,
  ...fighter.basic,
  ...fighter.starter,

  ...mage.legendary,
  ...mage.epic,
  ...mage.basic,
  ...mage.starter,

  ...marksman.legendary,
  ...marksman.epic,
  ...marksman.basic,
  ...marksman.starter,

  ...support.legendary,
  ...support.epic,
  ...support.basic,
  ...support.starter,

  ...tank.legendary,
  ...tank.epic,
  ...tank.basic,
  ...tank.starter,
};
