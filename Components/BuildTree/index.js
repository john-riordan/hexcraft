import { useContext } from "react";
import Tippy from "@tippy.js/react";
import { useRouter } from "next/router";
import posthog from "posthog-js";

import { StateContext } from "../../StateContext";
import ItemTooltip from "../ItemTooltip/";
import ItemImage from "../ItemImage/";
import PatchChangeDetails from "../PatchChangeDetails/";
import isOrnnItem from "../../helpers/isOrnnItem";
import { calculateGoldEfficiency } from "../../helpers/calculateGoldEfficiency";
import formatPatch from "../../helpers/formatPatch";
import styles from "./Tree.module.css";

const BuildTree = ({ imageSize = 64, item }) => {
  const { state, setState } = useContext(StateContext);
  const { itemsData } = state;
  const router = useRouter();

  const inventory = router.query?.i ? router.query?.i?.split(",") : [];

  const itemData = itemsData.items[item];

  if (!itemData) return null;

  const itemChanged = itemData.patchChange;
  const patch = formatPatch(state.patch);

  const goldEfficiency = calculateGoldEfficiency(
    itemData,
    state.itemsData.statGoldValues
  );

  const handleItemClick = (item) => {
    const itemInfo = itemsData.items[item];
    setState((prev) => ({
      ...prev,
      selectedItem: itemInfo,
    }));
    posthog.capture("buildtree_item_clicked", {
      item_name: itemInfo.name,
      item_id: itemInfo.id,
    });
  };
  const handleItemRightClick = (e, item) => {
    e.preventDefault();
    if (inventory.length < 6) {
      const params = new URLSearchParams({
        i: [...inventory, item.id],
      });
      state.soundPurchase.current.volume = 0.5;
      state.soundPurchase.current.play();
      router.replace(`?${params}`, undefined, {
        shallow: true,
      });
    } else if (inventory.length < 6) {
      const params = new URLSearchParams({
        i: [...inventory, item.id],
      });
      state.soundPurchase.current.volume = 0.5;
      state.soundPurchase.current.play();
      router.replace(`?${params}`, undefined, {
        shallow: true,
      });
    } else {
      state.soundCant?.current?.play();
    }
    posthog.capture("buildtree_item_right_clicked", {
      item_name: item.name,
      item_id: item.id,
    });
  };
  const handlePatchChange = (itemChanged) => {
    if (!itemChanged.details) return;
    setState((prev) => ({
      ...prev,
      modal: <PatchChangeDetails content={itemChanged.details} />,
    }));
    posthog.capture("buildtree_patch_change_clicked", {
      item_name: itemChanged.name,
      item_id: itemChanged.id,
    });
  };

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
                <div onContextMenu={(e) => handleItemRightClick(e, item)}>
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
                    placement="bottom"
                    offset="0, 10"
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
                        placement="bottom"
                        offset="0, 10"
                        duration={0}
                        content={<ItemTooltip item={itemsData.items[item]} />}
                      >
                        <div
                          className={styles.itemCol}
                          data-test={item.id}
                          onClick={() => handleItemClick(item)}
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
                  className="attribute"
                  onClick={() => handlePatchChange(itemChanged)}
                >
                  <span className={`${itemChanged.change.toLowerCase()}`}>
                    {itemChanged.change} in {patch}
                  </span>
                  {itemChanged.details && "CLICK FOR DETAILS"}
                </button>
              </div>
            )}
            <header className={styles.header}>
              <p className={styles.name}>{itemData.name}</p>
              <p className={styles.priceContainer}>
                <span className={styles.price}>{itemData.priceTotal}</span>
                <span className={styles.priceEfficiency}>
                  (
                  {goldEfficiency.toLocaleString("en-us", { style: "percent" })}{" "}
                  Efficient)
                </span>
              </p>
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
