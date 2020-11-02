import { useContext } from 'react';

import { StateContext } from '../../StateContext';
import styles from './Tabs.module.css';

const TABS = [
  { key: 'all', name: 'All Items' },
  { key: 'fighter', name: 'Fighter' },
  { key: 'marksman', name: 'Marksman' },
  { key: 'assassin', name: 'Assassin' },
  { key: 'mage', name: 'Mage' },
  { key: 'tank', name: 'Tank' },
  { key: 'support', name: 'Support' },
];

const Tabs = () => {
  const { state, setState } = useContext(StateContext);

  return (
    <div className={styles.tabs}>
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setState((prev) => ({ ...prev, tab: tab.key }))}
          className={`${styles.tab} ${state.tab === tab.key && styles.active}`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
