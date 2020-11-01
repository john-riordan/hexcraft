import { useContext } from 'react';

import { StateContext } from '../../StateContext';
import styles from './Tabs.module.css';

const TABS = [
  'All Items',
  'Fighter',
  'Marksman',
  'Assassin',
  'Mage',
  'Tank',
  'Support',
];

const Tabs = () => {
  const { state, setState } = useContext(StateContext);
  const activeTab = state.tab;

  return (
    <div className={styles.tabs}>
      {TABS.map((tab) => (
        <div
          key={tab}
          onClick={() => setState((prev) => ({ ...prev, tab }))}
          className={`${styles.tab} ${activeTab === tab && styles.active}`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
