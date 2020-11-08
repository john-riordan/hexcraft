import { memo, useContext } from 'react';
import Tippy from '@tippy.js/react';
import { useRouter } from 'next/router';

import ItemImage from '../ItemImage/';
import ItemTooltip from '../ItemTooltip/';

import { StateContext } from '../../StateContext';

import styles from './Grid.module.css';

import { buildDisplayItems } from '../../helpers/buildDisplayItems';

const SUBTITLE = {
  mythics:
    'Special completed item (limit of 1). Grants bonus stats per additional completed Legendary.',
  legendaries: 'Typical fully completed item.',
  epics: 'Sub-components that build into a Legendary/Mythic.',
  basics: 'The most basic item component.',
  starters: 'Simple starting items.',
};

const ItemGrid = ({ className }) => {
  const { state, setState } = useContext(StateContext);
  const router = useRouter();
  const inventory = router.query?.i ? router.query?.i?.split(',') : [];

  const itemsData =
    state.tab === 'all'
      ? Object.entries(state.itemsData.all)
      : Object.entries(buildDisplayItems(state.itemsData.all, state.tab));

  const itemGroups = state.desc ? itemsData : itemsData.reverse();

  return (
    <div className={`${styles.gridFrame} ${className}`}>
      {itemGroups.map(([groupName, items]) => {
        const groupItems = state.stat
          ? items.filter((item) => item.categories.includes(state.stat))
          : items;
        if (!groupItems.length) return null;

        return (
          <div key={groupName}>
            <h2 className={styles.groupTitle}>{groupName}</h2>
            <p className={styles.groupSubtitle}>{SUBTITLE[groupName]}</p>
            <div className={styles.grid}>
              {groupItems.map((item) => {
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
                      onContextMenu={(e) => {
                        e.preventDefault();
                        const isMythic =
                          state.itemsData.mythicDictionary[item.id];
                        if (
                          inventory.length < 6 &&
                          !state.inventoryHasMythic &&
                          isMythic
                        ) {
                          const params = new URLSearchParams({
                            i: [...inventory, item.id],
                          });
                          state.soundPurchase.current.volume = 0.5;
                          state.soundPurchase.current.play();
                          router.replace(`?${params}`, undefined, {
                            shallow: true,
                          });
                        } else if (inventory.length < 6 && !isMythic) {
                          const params = new URLSearchParams({
                            i: [...inventory, item.id],
                          });
                          state.soundPurchase.current.volume = 0.5;
                          state.soundPurchase.current.play();
                          router.replace(`?${params}`, undefined, {
                            shallow: true,
                          });
                        } else {
                          state.soundCant.current.play();
                        }
                      }}
                      onClick={() =>
                        setState((prev) => ({ ...prev, selectedItem: item }))
                      }
                    >
                      <ItemImage
                        imgName={item.iconPath}
                        className={styles.imgFrame}
                        isMythic={state.itemsData.mythicDictionary?.[item.id]}
                        alt={item.name}
                        size={46}
                      />
                      <p className={styles.price}>{item.priceTotal}</p>
                    </div>
                  </Tippy>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(ItemGrid);
