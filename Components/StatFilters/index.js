import { memo, useContext } from 'react';

import { StateContext } from '../../StateContext';
import Icon from '../Icon/';
import styles from './Filters.module.css';

const statGroups = [
  [
    { key: 'Damage', name: 'Attack Damage', icon: 'ad' },
    { key: 'CriticalStrike', name: 'Crit Chance', icon: 'crit' },
    { key: 'AttackSpeed', name: 'Attack Speed', icon: 'as' },
    { key: 'ArmorPenetration', name: 'Armor Penetration', icon: 'apen' },
    { key: 'OnHit', name: 'On-Hit', icon: 'onhit' },
    { key: 'LifeSteal', name: 'Life Steal', icon: 'vamp' },
  ],
  [
    { key: 'SpellDamage', name: 'Ability Power', icon: 'ap' },
    { key: 'Mana', name: 'Mana', icon: 'mana' },
    { key: 'MagicPenetration', name: 'Magic Penetration', icon: 'mpen' },
  ],
  [
    { key: 'Health', name: 'Health', icon: 'health' },
    { key: 'Armor', name: 'Armor', icon: 'armor' },
    { key: 'SpellBlock', name: 'Magic Resist', icon: 'mr' },
  ],
  [
    { key: 'CooldownReduction', name: 'Ability Haste', icon: 'cdr' },
    { key: 'NonbootsMovement', name: 'Movement Speed', icon: 'ms' },
    { key: 'SpellVamp', name: 'Omni-Vamp', icon: 'vamp' },
  ],
];

const StatFilters = ({ className }) => {
  const { state, setState } = useContext(StateContext);

  return (
    <div className={`${styles.filters} ${className}`}>
      {statGroups.map((group, i) => (
        <div key={i} className={styles.group}>
          {group.map((stat) => {
            const isActive = state.stat === stat.key;
            return (
              <div
                key={stat.name}
                className={`${styles.statItem} ${isActive && styles.active}`}
                onClick={() => {
                  if (isActive) {
                    setState((prev) => ({ ...prev, stat: null }));
                  } else {
                    setState((prev) => ({ ...prev, stat: stat.key }));
                  }
                }}
              >
                {stat.icon && (
                  <Icon
                    icon={stat.icon}
                    className={styles.statIcon}
                    viewBox="0 0 48 48"
                  />
                )}
                <span>{stat.name}</span>
                {isActive && <Icon icon="close" className={styles.close} />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default memo(StatFilters);
