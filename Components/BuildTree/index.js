import { useContext } from 'react';
import Tippy from '@tippy.js/react';
import { useRouter } from 'next/router';

import { StateContext } from '../../StateContext';
import ItemTooltip from '../ItemTooltip/';
import ItemImage from '../ItemImage/';
import styles from './Tree.module.css';

const BuildTree = ({ imageSize = 64, item }) => {
  const { state, setState } = useContext(StateContext);
  const { itemsData } = state;
  const router = useRouter();

  const inventory = router.query?.i
    ? router.query?.i?.split(',')
    : [];

  const itemData = itemsData.items[item];

  if (!itemData) return null;

  const ornnUpgrade = itemsData.ornn[item];

  const itemChanged = state.latestPatchChanges[itemData.id];

  const formattedPatch = `${state.patch.split('.')[0]}.${
    state.patch.split('.')[1]
  }`;

  return (
    <div className={styles.details}>
      {itemData && (
        <>
          <div className={styles.treeFrame}>
            <div className={styles.row}>
              <Tippy
                key={itemData.name}
                placement="bottom"
                offset="0, 10"
                duration={0}
                content={<ItemTooltip item={itemData} />}
              >
                <div
                  onContextMenu={(e) => {
                    e.preventDefault();
                    const isMythic =
                      state.itemsData.mythicDictionary[
                        itemData.id
                      ];
                    if (
                      inventory.length < 6 &&
                      !state.inventoryHasMythic &&
                      isMythic
                    ) {
                      const params = new URLSearchParams({
                        i: [...inventory, itemData.id],
                      });
                      state.soundPurchase.current.volume = 0.5;
                      state.soundPurchase.current.play();
                      router.replace(
                        `?${params}`,
                        undefined,
                        {
                          shallow: true,
                        }
                      );
                    } else if (
                      inventory.length < 6 &&
                      !isMythic
                    ) {
                      const params = new URLSearchParams({
                        i: [...inventory, itemData.id],
                      });
                      state.soundPurchase.current.volume = 0.5;
                      state.soundPurchase.current.play();
                      router.replace(
                        `?${params}`,
                        undefined,
                        {
                          shallow: true,
                        }
                      );
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
                    isMythic={
                      state.itemsData.mythicDictionary[
                        itemData.id
                      ]
                    }
                    alt={itemData.name}
                  />
                </div>
              </Tippy>
            </div>
            <div
              className={`${styles.row} ${
                itemData.from.length > 1
                  ? styles.multi
                  : styles.single
              }`}
            >
              {itemData.from.map((item, i) => (
                <div
                  key={`${itemsData.items[item]?.id}_${i}`}
                  className={styles.itemCol}
                >
                  <Tippy
                    placement="bottom"
                    offset="0, 10"
                    duration={0}
                    content={
                      <ItemTooltip
                        item={itemsData.items[item]}
                      />
                    }
                  >
                    <div
                      onClick={() =>
                        setState((prev) => ({
                          ...prev,
                          selectedItem:
                            itemsData.items[item],
                        }))
                      }
                    >
                      <ItemImage
                        key={`${item.id}_${i}`}
                        imgName={
                          itemsData.items[item]?.iconPath
                        }
                        className={styles.imgFrame}
                        size={imageSize - 16}
                        alt={itemsData.items[item]?.name}
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
                    {itemsData.items[item]?.from.map(
                      (item, i) => (
                        <Tippy
                          key={`${itemsData.items[item]?.id}_${i}`}
                          placement="bottom"
                          offset="0, 10"
                          duration={0}
                          content={
                            <ItemTooltip
                              item={itemsData.items[item]}
                            />
                          }
                        >
                          <div
                            className={styles.itemCol}
                            onClick={() =>
                              setState((prev) => ({
                                ...prev,
                                selectedItem:
                                  itemsData.items[item],
                              }))
                            }
                          >
                            <ItemImage
                              key={`${item.id}_${i}`}
                              imgName={
                                itemsData.items[item]
                                  ?.iconPath
                              }
                              className={styles.imgFrame}
                              size={imageSize - 30}
                              alt={
                                itemsData.items[item]?.name
                              }
                            />
                          </div>
                        </Tippy>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {itemChanged && (
              <div>
                <p>
                  {itemChanged.change} in patch{' '}
                  {formattedPatch}
                </p>
                <button
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      modal: (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: itemChanged.details,
                          }}
                        />
                      ),
                    }))
                  }
                >
                  Details
                </button>
              </div>
            )}
            <header className={styles.header}>
              <p className={styles.name}>{itemData.name}</p>
              <p className={styles.price}>
                {itemData.priceTotal}
              </p>
            </header>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: itemData.description,
              }}
            />
          </div>
          {/* {ornnUpgrade ? (
            <div className={styles.ornn}>
              <Tippy
                key={ornnUpgrade.name}
                placement="bottom"
                offset="0, 10"
                duration={0}
                content={<ItemTooltip item={ornnUpgrade} />}
              >
                <div className={styles.ornnFrame}>
                  <ItemImage
                    imgName={itemsData.items[ornnUpgrade.id]?.iconPath}
                    isMythic={true}
                    alt={ornnUpgrade.name}
                    size={36}
                  />
                  <ItemImage
                    imgName="bordertreatmentornn.png"
                    className={styles.ornnBorder}
                    alt="Ornn border"
                    size={36}
                  />
                </div>
              </Tippy>
            </div>
          ) : null} */}
        </>
      )}
    </div>
  );
};

export default BuildTree;
