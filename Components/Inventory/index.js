import { useContext, useRef, useState, useCallback } from "react";
import Tippy from "@tippy.js/react";
import { useRouter } from "next/router";
import posthog from "posthog-js";

import { StateContext } from "../../StateContext";
import isOrnnItem from "../../helpers/isOrnnItem";
import computeInventoryStats from "../../helpers/computeInventoryStats";
import styles from "./Inventory.module.css";
import ItemTooltip from "../ItemTooltip/";
import ItemImage from "../ItemImage/";
import Icon from "../Icon/";
import ChampionList from "../ChampionList/";

const MAX_FROM = 6;
const ITEM_SIZE = 60;
const ROLES = ["top", "jungle", "mid", "adc", "support"];
function cap(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const Inventory = () => {
  const [copied, setCopied] = useState(false);
  const [role, setRole] = useState("mid");
  const [roleSelectOpen, setRoleSelectOpen] = useState(false);
  const { state, setState } = useContext(StateContext);
  const textAreaRef = useRef(null);
  const router = useRouter();

  const inventory = router.query?.i ? router.query?.i?.split(",") : [];
  const inventoryItems = inventory.map((item) => {
    return state.itemsData.items[item];
  });
  const inventoryCost = inventoryItems.reduce(
    (acc, curr) => acc + curr.priceTotal,
    0
  );
  const earnableTime = state.gpmBenchmark?.[role]?.findIndex(
    (minGold) => minGold >= inventoryCost
  );
  const inventoryStats = computeInventoryStats(inventoryItems);

  const empty =
    inventory.length < 7 ? [...Array(MAX_FROM - inventory.length).keys()] : [];

  const handleCopy = useCallback(() => {
    textAreaRef.current.select();
    document.execCommand("copy");
    setCopied(true);
    posthog.capture("build_copied");

    let timer1 = setTimeout(() => {
      setCopied(false);
    }, 1200);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const handleClear = useCallback(() => {
    if (state.soundSell) {
      state.soundSell.current.volume = 0.5;
      state.soundSell.current.play();
    }
    router.replace(``, undefined, {
      shallow: true,
    });
    posthog.capture("build_cleared");
  }, [state]);

  const handleRoleChange = useCallback((role) => {
    setRole(role);
    setRoleSelectOpen(false);
    posthog.capture("role_changed", { role });
  }, []);

  return (
    <div className={styles.container} data-has-items={inventory.length > 0}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.cost}>
            <Icon icon="gold" width="20" height="20" />
            <span>{inventoryCost.toLocaleString()}</span>
          </p>
          <div className={styles.roleSelectContainer}>
            {roleSelectOpen && (
              <div className={styles.roleSelect}>
                {ROLES.map((rolekey) => (
                  <button
                    key={rolekey}
                    className={styles.roleSelectItem}
                    onClick={() => handleRoleChange(rolekey)}
                  >
                    <Icon icon={`role-${rolekey}`} width="20" height="20" />
                    <span>{cap(rolekey)}</span>
                  </button>
                ))}
              </div>
            )}
            <button
              className={styles.roleButton}
              onClick={() => setRoleSelectOpen((prev) => !prev)}
            >
              <Icon icon={`role-${role}`} width="20" height="20" />
              {/* <span>{cap(role)}</span> */}
            </button>
          </div>
          <Tippy
            placement="top"
            offset="0, 20"
            duration={0}
            content={
              <div className={styles.earnableTooltip}>
                *Estimated time to earn {inventoryCost.toLocaleString()} gold
                based on Emerald+ data. Click the Role Icon the change roles.
              </div>
            }
          >
            <div className={styles.headerLeft}>
              {earnableTime >= 0 && (
                <span className={styles.earnableTime}>
                  ~{earnableTime} minutes
                </span>
              )}
              <div className={styles.earnableInfo}>
                <Icon icon="question-mark" width="16" height="16" />
              </div>
            </div>
          </Tippy>
        </div>
        <div className={styles.controls}>
          <button
            className={`${styles.share} ${copied && styles.copied}`}
            onClick={handleCopy}
          >
            {copied ? (
              <Icon
                icon="check"
                width="20"
                height="20"
                stlye={{ color: "var(--buff)" }}
              />
            ) : (
              <Icon icon="copy" width="20" height="20" />
            )}
          </button>
          <button className={styles.share} onClick={handleClear}>
            <Icon icon="close" width="20" height="20" />
          </button>
        </div>
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
            placement="top"
            offset="0, 20"
            duration={0}
            content={<ItemTooltip item={item} />}
          >
            <div
              className={styles.itemFrame}
              onClick={() =>
                setState((prev) => ({ ...prev, selectedItem: item }))
              }
              onContextMenu={(e) => {
                e.preventDefault();
                const index = inventory.indexOf(`${item.id}`);
                const inv = [...inventory];

                if (index !== -1) inv.splice(index, 1);

                const params = new URLSearchParams({
                  i: inv,
                });
                state.soundSell.current.volume = 0.5;
                state.soundSell.current.play();
                router.replace(`?${params}`, undefined, {
                  shallow: true,
                });
              }}
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
              imgName="empty.png"
              alt="Empty Item"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
