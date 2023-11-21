import { useContext } from 'react';

import styles from './ItemTip.module.css';

import ItemImage from '../ItemImage/';
import { StateContext } from '../../StateContext';
import isOrnnItem from '../../helpers/isOrnnItem';

import formatPatch from '../../helpers/formatPatch';

const ItemTooltip = ({ item }) => {
  const { state } = useContext(StateContext);

  const itemChanged = item?.patchChange;
  const patch = formatPatch(state.patch);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ItemImage
          imgName={item.iconPath}
          isOrnn={isOrnnItem(item)}
          alt={item.name}
          size={48}
        />
        <div className={styles.info}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.price}>{item.priceTotal}</p>
        </div>
      </div>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: item.description,
        }}
      />
      {itemChanged && (
        <div className='attribute'>
          <p
            className={`${itemChanged.change.toLowerCase()}`}
            onClick={() =>
              setState((prev) => ({
                ...prev,
                modal: <PatchChangeDetails content={itemChanged.details} />,
              }))
            }
          >
            {itemChanged.change} in {patch}
          </p>
          CLICK FOR DETAILS
        </div>
      )}
    </div>
  );
};

export default ItemTooltip;
