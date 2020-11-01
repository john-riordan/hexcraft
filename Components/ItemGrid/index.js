import styles from './Grid.module.css';

import { useContext } from 'react';

import ItemImage from '../ItemImage';
import { StateContext } from '../../StateContext';

const ItemGrid = ({ className }) => {
  const { state } = useContext(StateContext);
  const itemGroups = Object.entries(state.itemsData);

  return (
    <div className={`${styles.gridFrame} ${className}`}>
      {itemGroups.map(([groupName, items]) => (
        <div key={groupName}>
          <p>{groupName}</p>
          <div className={styles.grid}>
            {Object.values(items).map((item, i) => (
              <div key={item.name} className={styles.gridItem}>
                <ItemImage imgName={item.iconPath} />
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;
