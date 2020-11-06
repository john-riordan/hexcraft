import { memo, useContext } from 'react';
import Tippy from '@tippy.js/react';

import { StateContext } from '../../StateContext';
import styles from './Details.module.css';
import ItemTooltip from '../ItemTooltip/';
import BuildTree from '../BuildTree/';
import ItemImage from '../ItemImage/';
import Icon from '../Icon/';

const MAX_FROM = 7;

const ItemDetails = ({ className }) => {
  const { state, setState } = useContext(StateContext);
  const { selectedItem } = state;

  const builtFrom = selectedItem
    ? Object.values(state.itemsData.items)
        .filter((item) => item.from.includes(selectedItem.id))
        .slice(0, MAX_FROM)
    : [];

  const empty = [...Array(MAX_FROM - builtFrom.length).keys()];

  return (
    <div className={`${styles.details} ${className}`}>
      {selectedItem && (
        <Icon
          icon="close"
          className={styles.close}
          onClick={() => setState((prev) => ({ ...prev, selectedItem: null }))}
        />
      )}
      <p className={styles.title}>
        {selectedItem ? 'Builds Into' : 'Select an Item'}
      </p>
      <div className={styles.buildsFrom}>
        {builtFrom.map((item) => (
          <Tippy
            key={item.name}
            placement="bottom"
            offset="0, 10"
            duration={0}
            content={<ItemTooltip item={item} />}
          >
            <div>
              <ItemImage
                key={item.iconPath}
                imgName={item.iconPath}
                size={40}
                isMythic={state.itemsData.mythicDictionary[item.id]}
              />
            </div>
          </Tippy>
        ))}
        {empty.map((i) => (
          <div key={i}>
            <ItemImage size={40} imgName="empty.png" />
          </div>
        ))}
      </div>
      {selectedItem && <BuildTree imageSize={58} item={selectedItem.id} />}
    </div>
  );
};

export default memo(ItemDetails);
