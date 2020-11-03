import { useContext } from 'react';
import Tippy from '@tippy.js/react';

import ItemImage from '../ItemImage/';
import ItemTooltip from '../ItemTooltip/';

import { StateContext } from '../../StateContext';

import styles from './Grid.module.css';

const ItemGrid = ({ className }) => {
  const { state, setState } = useContext(StateContext);
  const itemGroups = Object.entries(state.itemsData[state.tab]);

  return (
    <div className={`${styles.gridFrame} ${className}`}>
      {itemGroups.map(([groupName, items]) => (
        <div key={groupName}>
          <p className={styles.groupTitle}>{groupName}</p>
          <div className={styles.grid}>
            {items.map((item) => {
              if (state.stat && !item.categories.includes(state.stat))
                return null;
              return (
                <Tippy
                  key={item.name}
                  placement="right-start"
                  offset="0, 10"
                  duration={0}
                  content={<ItemTooltip item={item} />}
                >
                  <div
                    className={`${styles.gridItem} ${
                      state.selectedItem?.id === item.id && styles.selected
                    }`}
                    onClick={() =>
                      setState((prev) => ({ ...prev, selectedItem: item }))
                    }
                  >
                    <ItemImage
                      imgName={item.iconPath}
                      className={styles.imgFrame}
                      size={56}
                    />
                    <p className={styles.price}>{item.priceTotal}</p>
                  </div>
                </Tippy>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;
