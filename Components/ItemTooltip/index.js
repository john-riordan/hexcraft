import { useContext } from "react";

import styles from "./ItemTip.module.css";

import ItemImage from "../ItemImage/";
import { StateContext } from "../../StateContext";
import isOrnnItem from "../../helpers/isOrnnItem";

import formatPatch from "../../helpers/formatPatch";

const ItemTooltip = ({ item }) => {
  const { state } = useContext(StateContext);

  if (!item) return null;

  const itemChanged = item?.patchChange;
  const patch = formatPatch(state.patch);

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
          <p className={styles.price}>{item.priceTotal}</p>
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
