import { memo, useContext } from 'react';
import Tippy from '@tippy.js/react';
import { useRouter } from 'next/router';

import ItemImage from '../ItemImage/';
import ItemTooltip from '../ItemTooltip/';
import Icon from '../Icon/';
import PatchChangeDetails from '../PatchChangeDetails/';

import { StateContext } from '../../StateContext';
import isOrnnItem from '../../helpers/isOrnnItem';

import styles from './Grid.module.css';

import { buildDisplayItems } from '../../helpers/buildDisplayItems';

const SUBTITLE = {
  legendaries: 'Typical fully completed item.',
  epics: 'Sub-components that build into a Legendary items.',
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

  console.log(state);

  return (
    <div className={`${styles.gridFrame} ${className}`}>
      {itemGroups.map(([groupName, items], i) => {
        const groupItems = state.stat
          ? items.filter((item) => item.categories.includes(state.stat))
          : items;
        if (!groupItems.length) return null;

        return (
          <div key={`${groupName}:${i}`}>
            <h2 className={styles.groupTitle}>{groupName}</h2>
            <p className={styles.groupSubtitle}>{SUBTITLE[groupName]}</p>
            <div className={styles.grid}>
              {groupItems
                .sort((a, b) => a.priceTotal - b.priceTotal || a.id - b.id)
                .map((item, i) => {
                  return (
                    <Tippy
                      key={`${item.name}:${i}`}
                      placement='right-start'
                      offset='0, 10'
                      duration={0}
                      content={<ItemTooltip item={item} />}
                    >
                      <div
                        data-item-id={item.id}
                        data-item-name={item.name}
                        className={`${styles.gridItem} ${
                          state.selectedItem?.id === item.id
                            ? styles.selected
                            : ''
                        }`}
                        // onContextMenu={e => {
                        //   e.preventDefault();
                        //   if (
                        //     inventory.length < 6
                        //   ) {
                        //     const params = new URLSearchParams({
                        //       i: [...inventory, item.id],
                        //     });
                        //     state.soundPurchase.current.volume = 0.5;
                        //     state.soundPurchase.current.play();
                        //     router.replace(`?${params}`, undefined, {
                        //       shallow: true,
                        //     });
                        //   } else if (inventory.length < 6) {
                        //     const params = new URLSearchParams({
                        //       i: [...inventory, item.id],
                        //     });
                        //     state.soundPurchase.current.volume = 0.5;
                        //     state.soundPurchase.current.play();
                        //     router.replace(`?${params}`, undefined, {
                        //       shallow: true,
                        //     });
                        //   } else {
                        //     state.soundCant.current.play();
                        //   }
                        // }}
                        onClick={() =>
                          setState((prev) => ({
                            ...prev,
                            selectedItem: item,
                          }))
                        }
                      >
                        <ItemImage
                          imgName={item.iconPath}
                          className={styles.imgFrame}
                          isOrnn={isOrnnItem(item)}
                          alt={item.name}
                          size={46}
                          itemId={item.id}
                        />
                        <p className={styles.price}>{item.priceTotal}</p>
                        {item.patchChange && (
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!item.patchChange.details) return;
                              setState((prev) => ({
                                ...prev,
                                modal: (
                                  <PatchChangeDetails
                                    content={item.patchChange.details}
                                  />
                                ),
                              }));
                            }}
                            className={`${styles.patchChange} ${
                              styles[item.patchChange.change.toLowerCase()]
                            }`}
                          >
                            <Icon
                              icon={item.patchChange.change.toLowerCase()}
                              className={styles.patchChangeIcon}
                              viewBox='0 0 48 48'
                            />
                          </div>
                        )}
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
