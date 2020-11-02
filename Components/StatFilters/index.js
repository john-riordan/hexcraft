import { useContext } from 'react';

import { StateContext } from '../../StateContext';
import styles from './Filters.module.css';

const statGroups = [
  [
    { key: 'Damage', name: 'Attack Damage' },
    { key: 'CriticalStrike', name: 'Crit Chance' },
    { key: 'AttackSpeed', name: 'Attack Speed' },
    { key: 'ArmorPenetration', name: 'Armor Penetration' },
    { key: 'LifeSteal', name: 'Life Steal' },
  ],
  [
    { key: 'SpellDamage', name: 'Ability Power' },
    { key: 'Mana', name: 'Mana' },
    { key: 'MagicPenetration', name: 'Magic Penetration' },
  ],
  [
    { key: 'Health', name: 'Health' },
    { key: 'Armor', name: 'Armor' },
    { key: 'SpellBlock', name: 'Magic Resist' },
  ],
  [
    { key: 'CooldownReduction', name: 'Ability Haste' },
    { key: 'NonbootsMovement', name: 'Movement Speed' },
    { key: 'SpellVamp', name: 'Omni-Vamp' },
  ],
];

const StatFilters = ({ className }) => {
  const { state, setState } = useContext(StateContext);

  return (
    <div className={`${styles.filters} ${className}`}>
      {statGroups.map((group) => (
        <div key={group} className={styles.group}>
          {group.map((stat) => (
            <div
              key={stat.name}
              className={`${styles.statItem} ${
                state.stat === stat.key && styles.active
              }`}
              onClick={() => {
                if (state.stat === stat.key) {
                  setState((prev) => ({ ...prev, stat: null }));
                } else {
                  setState((prev) => ({ ...prev, stat: stat.key }));
                }
              }}
            >
              {stat.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StatFilters;
