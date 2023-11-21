import { useContext, useRef, useState, useCallback } from 'react';
import Tippy from '@tippy.js/react';
import { useRouter } from 'next/router';

import { StateContext } from '../../StateContext';
import isOrnnItem from '../../helpers/isOrnnItem';
import computeInventoryStats from '../../helpers/computeInventoryStats';
import styles from './Inventory.module.css';
import ItemTooltip from '../ItemTooltip/';
import ItemImage from '../ItemImage/';
import Icon from '../Icon/';
import ChampionList from '../ChampionList/';

const MAX_FROM = 6;
const ITEM_SIZE = 60;

const Inventory = () => {
  const [copied, setCopied] = useState(false);
  const { state, setState } = useContext(StateContext);
  const { inventoryCost } = state;
  const textAreaRef = useRef(null);
  const router = useRouter();
  const inventory = router.query?.i ? router.query?.i?.split(',') : [];
  const inventoryItems = inventory.map((item) => {
    return state.itemsData.items[item];
  });
  const inventoryStats = computeInventoryStats(inventoryItems);

  const empty =
    inventory.length < 7 ? [...Array(MAX_FROM - inventory.length).keys()] : [];

  const handleCopy = useCallback(() => {
    textAreaRef.current.select();
    document.execCommand('copy');
    setCopied(true);

    let timer1 = setTimeout(() => {
      setCopied(false);
    }, 1200);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* <div>
        <div className={styles.header}>
          <p className={styles.title}>Champ</p>
        </div>
        <div
          className={styles.championFrame}
          onClick={() =>
            setState((prev) => ({ ...prev, modal: <ChampionList /> }))
          }
        />
      </div> */}
      <div>
        <div className={styles.header}>
          <p className={styles.cost}>
            <Icon icon='gold' />
            <span>{inventoryCost}</span>
          </p>
          <p
            className={`${styles.share} ${copied && styles.copied}`}
            onClick={handleCopy}
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </p>
        </div>
        <textarea
          ref={textAreaRef}
          className={styles.textarea}
          value={`https://lolshop.gg${router.asPath}`}
          readOnly
        />
        <div className={styles.itemList}>
          {inventoryItems.map((item, i) => (
            <Tippy
              key={`${item.id}_${i}`}
              placement='top'
              offset='0, 20'
              duration={0}
              content={<ItemTooltip item={item} />}
            >
              <div
                className={styles.itemFrame}
                onClick={() =>
                  setState((prev) => ({ ...prev, selectedItem: item }))
                }
                // onContextMenu={e => {
                //   e.preventDefault();
                //   const index = inventory.indexOf(item.id);
                //   const inv = [...inventory];

                //   if (index !== -1) inv.splice(index, 1);

                //   const params = new URLSearchParams({
                //     i: inv,
                //   });
                //   state.soundSell.current.volume = 0.5;
                //   state.soundSell.current.play();
                //   router.replace(`?${params}`, undefined, {
                //     shallow: true,
                //   });
                // }}
              >
                <ItemImage
                  key={`${item.id}_${i}`}
                  imgName={item.iconPath}
                  className={styles.imgFrame}
                  size={ITEM_SIZE}
                  alt={item.name}
                  isOrnn={isOrnnItem(item)}
                />
              </div>
            </Tippy>
          ))}
          {empty.map((i) => (
            <div key={i}>
              <ItemImage
                size={ITEM_SIZE}
                className={styles.imgFrame}
                imgName='empty.png'
                alt='Empty Item'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
