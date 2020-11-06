import { useContext } from 'react';
import Tippy from '@tippy.js/react';

import { StateContext } from '../../StateContext';
import ItemTooltip from '../ItemTooltip/';
import ItemImage from '../ItemImage/';
import styles from './Tree.module.css';

const BuildTree = ({ imageSize = 64, item }) => {
  const { state } = useContext(StateContext);
  const { itemsData } = state;

  const itemData = itemsData.items[item];

  if (!itemData) return null;

  return (
    <div className={styles.details}>
      {itemData && (
        <>
          <div className={styles.row}>
            <Tippy
              key={itemData.name}
              placement="bottom"
              offset="0, 10"
              duration={0}
              content={<ItemTooltip item={itemData} />}
            >
              <div>
                <ItemImage
                  key={itemData.iconPath}
                  imgName={itemData.iconPath}
                  className={styles.imgFrame}
                  size={imageSize}
                />
              </div>
            </Tippy>
          </div>
          <div
            className={`${styles.row} ${
              itemData.from.length > 1 ? styles.multi : styles.single
            }`}
          >
            {itemData.from.map((item) => (
              <div key={itemsData.items[item]?.id} className={styles.itemCol}>
                <Tippy
                  key={itemsData.items[item].name}
                  placement="bottom"
                  offset="0, 10"
                  duration={0}
                  content={<ItemTooltip item={itemsData.items[item]} />}
                >
                  <div>
                    <ItemImage
                      key={item.id}
                      imgName={itemsData.items[item]?.iconPath}
                      className={styles.imgFrame}
                      size={imageSize - 10}
                    />
                  </div>
                </Tippy>
                <div
                  className={`${styles.row} ${
                    itemsData.items[item]?.from.length > 1
                      ? styles.multi
                      : styles.single
                  }`}
                >
                  {itemsData.items[item]?.from.map((item) => (
                    <Tippy
                      key={itemsData.items[item].name}
                      placement="bottom"
                      offset="0, 10"
                      duration={0}
                      content={<ItemTooltip item={itemsData.items[item]} />}
                    >
                      <div className={styles.itemCol}>
                        <ItemImage
                          key={item.id}
                          imgName={itemsData.items[item]?.iconPath}
                          className={styles.imgFrame}
                          size={imageSize - 10}
                        />
                      </div>
                    </Tippy>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p>{itemData.name}</p>
          <p>{itemData.priceTotal}</p>
          <p dangerouslySetInnerHTML={{ __html: itemData.description }} />
        </>
      )}
    </div>
  );
};

export default BuildTree;
