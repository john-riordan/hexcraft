import { memo, useContext } from 'react';
import Tippy from '@tippy.js/react';

import { StateContext } from '../../StateContext';
import Icon from '../Icon/';
import styles from './Filters.module.css';

import formatPatch from '../../helpers/formatPatch';
import unixToTimeAgo from '../../helpers/daysAgo';

const statGroups = [
  [
    { key: 'Damage', name: 'Attack Damage', icon: 'ad' },
    {
      key: 'CriticalStrike',
      name: 'Crit Chance',
      icon: 'crit',
    },
    {
      key: 'AttackSpeed',
      name: 'Attack Speed',
      icon: 'as',
    },
    {
      key: 'ArmorPenetration',
      name: 'Armor Penetration',
      icon: 'apen',
    },
    { key: 'OnHit', name: 'On-Hit', icon: 'onhit' },
    { key: 'LifeSteal', name: 'Life Steal', icon: 'vamp' },
  ],
  [
    {
      key: 'SpellDamage',
      name: 'Ability Power',
      icon: 'ap',
    },
    { key: 'Mana', name: 'Mana', icon: 'mana' },
    {
      key: 'MagicPenetration',
      name: 'Magic Penetration',
      icon: 'mpen',
    },
  ],
  [
    { key: 'Health', name: 'Health', icon: 'health' },
    { key: 'Armor', name: 'Armor', icon: 'armor' },
    { key: 'SpellBlock', name: 'Magic Resist', icon: 'mr' },
  ],
  [
    {
      key: 'CooldownReduction',
      name: 'Ability Haste',
      icon: 'cdr',
    },
    {
      key: 'NonbootsMovement',
      name: 'Movement Speed',
      icon: 'ms',
    },
    { key: 'SpellVamp', name: 'Omni-Vamp', icon: 'vamp' },
    { key: 'GreviousWounds', name: 'Grevious Wounds', icon: 'grevious' },
  ],
];

const StatFilters = ({ className }) => {
  const context = useContext(StateContext);
  const { state, setState } = context;

  return (
    <aside className={`${styles.filters} ${className}`}>
      <header className={styles.sidebarHeader}>
        <h2 className={styles.patchTitle}>
          <span>Patch: </span>
          {/* <span>Season 2024</span> */}
          <span>{state.pbe ? 'PBE' : formatPatch(state.patch)}</span>
        </h2>
        <span className={styles.updatedAt}>
          Updated {unixToTimeAgo(state.updatedAt)}
        </span>
      </header>
      <div className={styles.group}>
        <div
          className={`${styles.statItem} ${
            state.stat.includes('Patch') && styles.active
          }`}
          onClick={() => {
            if (state.stat.includes('Patch')) {
              setState((prev) => ({
                ...prev,
                stat: state.stat.filter((s) => s !== 'Patch'),
              }));
            } else {
              setState((prev) => ({
                ...prev,
                stat: [...state.stat, 'Patch'],
              }));
            }
          }}
        >
          <Tippy
            placement='right'
            offset='0, 0'
            duration={0}
            content={<div className={styles.tooltip}>Patch Changes</div>}
          >
            <div>
              <Icon
                icon='mask'
                className={styles.statIcon}
                viewBox='0 0 48 48'
              />
            </div>
          </Tippy>
          <span>Patch Changes</span>
          {state.stat === 'Patch' && (
            <Icon icon='close' className={styles.close} />
          )}
        </div>
      </div>
      {statGroups.map((group, i) => (
        <div key={i} className={styles.group}>
          {group.map((stat) => {
            const isActive = state.stat.includes(stat.key);
            return (
              <div
                key={stat.name}
                className={`${styles.statItem} ${isActive && styles.active}`}
                onClick={() => {
                  if (isActive) {
                    setState((prev) => ({
                      ...prev,
                      stat: state.stat.filter((s) => s !== stat.key),
                    }));
                  } else {
                    setState((prev) => ({
                      ...prev,
                      stat: [...state.stat, stat.key],
                    }));
                  }
                }}
              >
                {stat.icon && (
                  <Tippy
                    key={stat.name}
                    placement='right'
                    offset='0, 0'
                    duration={0}
                    content={<div className={styles.tooltip}>{stat.name}</div>}
                  >
                    <div>
                      <Icon
                        icon={stat.icon}
                        className={styles.statIcon}
                        viewBox='0 0 48 48'
                      />
                    </div>
                  </Tippy>
                )}
                <span>{stat.name}</span>
                {isActive && <Icon icon='close' className={styles.close} />}
              </div>
            );
          })}
        </div>
      ))}
      <a
        href='https://twitter.com/JohnRiordan'
        target='_blank'
        className={styles.twitter}
      >
        @JohnRiordan
      </a>
    </aside>
  );
};

export default memo(StatFilters);
