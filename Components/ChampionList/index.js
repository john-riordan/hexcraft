import { useContext } from 'react';

import { StateContext } from '../../StateContext';
import styles from './ChampionList.module.css';

const ChampionList = () => {
  const { state, setState } = useContext(StateContext);
  const { champsData } = state;

  return <div className={`${styles.frame} scroll`}></div>;
};

export default ChampionList;
