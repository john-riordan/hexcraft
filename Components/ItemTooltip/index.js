import { useContext } from "react";

import styles from "./ItemTip.module.css";

import ItemImage from "../ItemImage/";
import { StateContext } from "../../StateContext";
import isOrnnItem from "../../helpers/isOrnnItem";
import { calculateGoldEfficiency } from "../../helpers/calculateGoldEfficiency";

import formatPatch from "../../helpers/formatPatch";

const ItemTooltip = ({ item }) => {
  const { state } = useContext(StateContext);

  if (!item) return null;

  const itemChanged = item?.patchChange;
  const patch = formatPatch(state.patch);

  const goldEfficiency = calculateGoldEfficiency(
    item,
    state.itemsData.statGoldValues
  );
  // const goldEfficiency = 0;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ItemImage
          imgName={item.iconPath}
          isOrnn={isOrnnItem(item)}
          alt={item.name}
          size={48}
        />
        <div className={styles.info}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.price}>
            {item.priceTotal} (
            {goldEfficiency.toLocaleString("en-us", { style: "percent" })} Gold
            Efficient)
          </p>
        </div>
      </div>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: item.description,
        }}
      />
      {itemChanged && (
        <div className="attribute">
          <p className={`${itemChanged.change.toLowerCase()}`}>
            {itemChanged.change} in {patch}
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemTooltip;
