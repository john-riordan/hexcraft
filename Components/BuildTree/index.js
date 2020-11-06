import { useContext } from 'react';
import Tippy from '@tippy.js/react';

import { StateContext } from '../../StateContext';
import ItemTooltip from '../ItemTooltip/';
import ItemImage from '../ItemImage/';
import styles from './Tree.module.css';

const BuildTree = ({ imageSize = 64, item }) => {
  const { state, setState } = useContext(StateContext);
  const { itemsData } = state;

  const itemData = itemsData.items[item];

  if (!itemData) return null;

  return (
    <div className={styles.details}>
      {itemData && (
        <>
          <div style={{ minHeight: '15rem' }}>
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
                    isMythic={state.itemsData.mythicDictionary[itemData.id]}
                  />
                </div>
              </Tippy>
            </div>
            <div
              className={`${styles.row} ${
                itemData.from.length > 1 ? styles.multi : styles.single
              }`}
            >
              {itemData.from.map((item, i) => (
                <div
                  key={`${itemsData.items[item]?.id}_${i}`}
                  className={styles.itemCol}
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      selectedItem: itemsData.items[item],
                    }))
                  }
                >
                  <Tippy
                    placement="bottom"
                    offset="0, 10"
                    duration={0}
                    content={<ItemTooltip item={itemsData.items[item]} />}
                  >
                    <div>
                      <ItemImage
                        key={`${item.id}_${i}`}
                        imgName={itemsData.items[item]?.iconPath}
                        className={styles.imgFrame}
                        size={imageSize - 16}
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
                    {itemsData.items[item]?.from.map((item, i) => (
                      <Tippy
                        key={`${itemsData.items[item]?.id}_${i}`}
                        placement="bottom"
                        offset="0, 10"
                        duration={0}
                        content={<ItemTooltip item={itemsData.items[item]} />}
                      >
                        <div
                          className={styles.itemCol}
                          onClick={() =>
                            setState((prev) => ({
                              ...prev,
                              selectedItem: itemsData.items[item],
                            }))
                          }
                        >
                          <ItemImage
                            key={`${item.id}_${i}`}
                            imgName={itemsData.items[item]?.iconPath}
                            className={styles.imgFrame}
                            size={imageSize - 30}
                          />
                        </div>
                      </Tippy>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <header className={styles.header}>
              <p className={styles.name}>{itemData.name}</p>
              <p className={styles.price}>{itemData.priceTotal}</p>
            </header>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: itemData.description }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BuildTree;
