import { useContext, useRef, useState, useCallback } from 'react';
import Tippy from '@tippy.js/react';
import { useRouter } from 'next/router';

import { StateContext } from '../../StateContext';
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
          <p className={styles.title}>Build</p>
          <p className={styles.cost}>
            <Icon icon="gold" />
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
          {inventory.map((itemId, i) => {
            const item = state.itemsData.items[itemId];
            if (!item) return null;
            return (
              <Tippy
                key={`${itemId}_${i}`}
                placement="top"
                offset="0, 20"
                duration={0}
                content={<ItemTooltip item={item} />}
              >
                <div
                  onContextMenu={(e) => {
                    e.preventDefault();
                    const index = inventory.indexOf(itemId);
                    const inv = [...inventory];

                    if (index !== -1) inv.splice(index, 1);

                    const params = new URLSearchParams({
                      i: inv,
                    });
                    state.soundSell.current.play();
                    router.replace(`?${params}`, undefined, {
                      shallow: true,
                    });
                  }}
                >
                  <ItemImage
                    key={`${itemId}_${i}`}
                    imgName={item.iconPath}
                    className={styles.imgFrame}
                    size={ITEM_SIZE}
                    alt={item.name}
                    isMythic={state.itemsData.mythicDictionary[item.id]}
                  />
                </div>
              </Tippy>
            );
          })}
          {empty.map((i) => (
            <div key={i}>
              <ItemImage
                size={ITEM_SIZE}
                className={styles.imgFrame}
                imgName="empty.png"
                alt="Empty Item"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
