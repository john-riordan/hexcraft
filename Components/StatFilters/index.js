import styles from './Filters.module.css';

const statGroups = [
  ['Attack Damage', 'Crit Chance', 'Attack Speed', 'Lethality', 'Armor Pen'],
  ['Ability Power', 'Mana', 'Magic Penetration'],
  ['Health', 'Armor', 'Magic Resist'],
  ['Ability Haste', 'Movement Speed', 'Life Steel & Omni-Vamp'],
];

const StatFilters = ({ className }) => (
  <div className={`${styles.filters} ${className}`}>
    {statGroups.map((group) => (
      <div key={group} className={styles.group}>
        {group.map((stat) => (
          <div key={stat} className={styles.statItem}>
            {stat}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default StatFilters;
