import { useContext } from 'react';
import Tippy from '@tippy.js/react';
import { useRouter } from 'next/router';

import { StateContext } from '../../StateContext';
import ItemTooltip from '../ItemTooltip/';
import ItemImage from '../ItemImage/';
import PatchChangeDetails from '../PatchChangeDetails/';
import isOrnnItem from '../../helpers/isOrnnItem';

import styles from './Tree.module.css';

import formatPatch from '../../helpers/formatPatch';

const BuildTree = ({ imageSize = 64, item }) => {
  const { state, setState } = useContext(StateContext);
  const { itemsData } = state;
  const router = useRouter();

  const inventory = router.query?.i ? router.query?.i?.split(',') : [];

  const itemData = itemsData.items[item];

  if (!itemData) return null;

  const itemChanged = itemData.patchChange;
  const patch = formatPatch(state.patch);

  return (
    <div className={styles.details}>
      {itemData && (
        <>
          <div className={styles.treeFrame}>
            <div className={styles.row}>
              <Tippy
                key={itemData.name}
                placement='bottom'
                offset='0, 10'
                duration={0}
                content={<ItemTooltip item={itemData} />}
              >
                <div
                  onContextMenu={(e) => {
                    e.preventDefault();
                    if (inventory.length < 6) {
                      const params = new URLSearchParams({
                        i: [...inventory, itemData.id],
                      });
                      state.soundPurchase.current.volume = 0.5;
                      state.soundPurchase.current.play();
                      router.replace(`?${params}`, undefined, {
                        shallow: true,
                      });
                    } else if (inventory.length < 6) {
                      const params = new URLSearchParams({
                        i: [...inventory, itemData.id],
                      });
                      state.soundPurchase.current.volume = 0.5;
                      state.soundPurchase.current.play();
                      router.replace(`?${params}`, undefined, {
                        shallow: true,
                      });
                    } else {
                      state.soundCant?.current?.play();
                    }
                  }}
                >
                  <ItemImage
                    key={itemData.iconPath}
                    imgName={itemData.iconPath}
                    className={styles.imgFrame}
                    size={imageSize}
                    isOrnn={isOrnnItem(item)}
                    alt={itemData.name}
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
                >
                  <Tippy
                    placement='bottom'
                    offset='0, 10'
                    duration={0}
                    content={<ItemTooltip item={itemsData.items[item]} />}
                  >
                    <div
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
                        name={item.name}
                        className={styles.imgFrame}
                        size={imageSize - 16}
                        alt={itemsData.items[item]?.name}
                        isOrnn={isOrnnItem(item)}
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
                        placement='bottom'
                        offset='0, 10'
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
                            alt={itemsData.items[item]?.name}
                            isOrnn={isOrnnItem(item)}
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
            {itemChanged && (
              <div className={styles.patchChange}>
                <button
                  className='attribute'
                  onClick={() => {
                    if (!itemChanged.details) return;
                    setState((prev) => ({
                      ...prev,
                      modal: (
                        <PatchChangeDetails content={itemChanged.details} />
                      ),
                    }));
                  }}
                >
                  <span className={`${itemChanged.change.toLowerCase()}`}>
                    {itemChanged.change} in {patch}
                  </span>
                  {itemChanged.details && 'CLICK FOR DETAILS'}
                </button>
              </div>
            )}
            <header className={styles.header}>
              <p className={styles.name}>{itemData.name}</p>
              <p className={styles.price}>{itemData.priceTotal}</p>
            </header>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: itemData.description,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BuildTree;
