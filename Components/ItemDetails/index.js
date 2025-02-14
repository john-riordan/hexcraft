import { memo, useContext } from "react";
import Tippy from "@tippy.js/react";
import posthog from "posthog-js";

import { StateContext } from "../../StateContext";
import isOrnnItem from "../../helpers/isOrnnItem";
import styles from "./Details.module.css";
import ItemTooltip from "../ItemTooltip/";
import BuildTree from "../BuildTree/";
import ItemImage from "../ItemImage/";
import Icon from "../Icon/";

const MAX_FROM = 7;

const ItemDetails = ({ className }) => {
  const { state, setState } = useContext(StateContext);
  const { selectedItem } = state;

  const builtFrom = selectedItem
    ? Object.values(state.itemsData.items)
        .filter((item) => item.from.includes(selectedItem.id))
        .slice(0, MAX_FROM)
    : [];

  const empty = [...Array(MAX_FROM - builtFrom.length).keys()];

  const handleClose = () => {
    setState((prev) => ({
      ...prev,
      selectedItem: null,
    }));
    posthog.capture("itemdetails_closed");
  };

  return (
    <div
      className={`${styles.details} ${className} ${
        selectedItem && styles.show
      }`}
    >
      {selectedItem && (
        <button className={styles.close} onClick={handleClose}>
          <Icon icon="close" />
        </button>
      )}
      <p className={styles.title}>
        {selectedItem ? "Builds Into" : "Select an Item"}
      </p>
      <div className={styles.buildsFrom}>
        {builtFrom.map((item) => (
          <Tippy
            key={item.name}
            placement="left-start"
            offset="0, 10"
            duration={0}
            content={<ItemTooltip item={item} />}
          >
            <div
              className={styles.itemFrom}
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  selectedItem: item,
                }))
              }
            >
              <ItemImage
                key={item.iconPath}
                imgName={item.iconPath}
                className={styles.imgFrame}
                size={36}
                alt={item.name}
                isOrnn={isOrnnItem(item)}
              />
            </div>
          </Tippy>
        ))}
        {empty.map((i) => (
          <div key={i}>
            <ItemImage
              size={36}
              className={styles.imgFrame}
              imgName="empty.png"
              alt="Empty Item"
            />
          </div>
        ))}
      </div>
      {selectedItem && <BuildTree imageSize={58} item={selectedItem.id} />}
    </div>
  );
};

export default memo(ItemDetails);
