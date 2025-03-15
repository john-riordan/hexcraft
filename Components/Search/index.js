import { useContext, useState } from "react";
import Tippy from "@tippy.js/react";
import { useRouter } from "next/router";
import posthog from "posthog-js";

import isOrnnItem from "../../helpers/isOrnnItem";
import Icon from "../Icon/";
import Tabs from "../Tabs/";
import ItemImage from "../ItemImage/";
import styles from "./Search.module.css";
import { StateContext } from "../../StateContext";
import { calculateGoldEfficiency } from "../../helpers/calculateGoldEfficiency";

const Search = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState(null);
  const { state, setState } = useContext(StateContext);

  const inventory = router.query?.i ? router.query?.i?.split(",") : [];

  const results = state.search?.length
    ? Object.values(state.itemsData?.items)
        .filter(
          (item) =>
            item.name.toLowerCase().includes(state.search) ||
            item.search.includes(state.search) ||
            item.description.toLowerCase().includes(state.search)
        )
        .sort((a, z) => z.priceTotal - a.priceTotal)
    : Object.values(state.itemsData?.items).sort(
        (a, z) => z.priceTotal - a.priceTotal
      );

  const handleSearchClick = () => {
    setState((prev) => ({ ...prev, searchOpen: true }));
    posthog.capture("search_clicked");
  };
  const handleCloseSearch = () => {
    setState((prev) => ({ ...prev, searchOpen: false }));
    posthog.capture("search_closed");
  };
  const handleReverseOrder = () => {
    setState((prev) => ({ ...prev, desc: !prev.desc }));
    posthog.capture("reverse_order_clicked");
  };

  const handleSearchItemClick = (e, item) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      selectedItem: item,
      searchOpen: false,
    }));
    posthog.capture("search_item_clicked", {
      item_name: item.name,
      item_id: item.id,
    });
  };
  const handleSearchItemContextMenu = (e, item) => {
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
      setState((prev) => ({
        ...prev,
        searchOpen: false,
      }));
    } else if (inventory.length < 6) {
      const params = new URLSearchParams({
        i: [...inventory, item.id],
      });
      state.soundPurchase.current.volume = 0.5;
      state.soundPurchase.current.play();
      router.replace(`?${params}`, undefined, {
        shallow: true,
      });
      setState((prev) => ({
        ...prev,
        searchOpen: false,
      }));
    } else {
      state.soundCant.current.play();
    }
    posthog.capture("search_item_right_clicked", {
      item_name: item.name,
      item_id: item.id,
    });
  };

  const hoverGoldEfficiency = calculateGoldEfficiency(
    hovered,
    state.itemsData.statGoldValues
  );

  return (
    <div className={styles.container}>
      <div className={styles.inputFrame}>
        <Icon icon="search" className={styles.search} width={20} height={20} />
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          value={state.search}
          onClick={handleSearchClick}
          onChange={(e) => {
            setState((prev) => ({ ...prev, search: e.target.value }));
          }}
        />
        {state.searchOpen && (
          <Icon
            icon="close"
            className={styles.close}
            onClick={handleCloseSearch}
            width="16"
            height="16"
          />
        )}
      </div>
      {state.searchOpen && (
        <>
          <div className={styles.resultsFrame}>
            <div className={styles.resultsList}>
              {results.map((item) => {
                // const goldEfficiency = calculateGoldEfficiency(
                //   item,
                //   state.itemsData.statGoldValues
                // );
                return (
                  <div
                    key={item.id}
                    className={`${styles.result} ${
                      hovered?.id === item.id && styles.resultSelected
                    }`}
                    onClick={(e) => handleSearchItemClick(e, item)}
                    onMouseOver={() => setHovered(item)}
                    onContextMenu={(e) => handleSearchItemContextMenu(e, item)}
                  >
                    <ItemImage
                      imgName={item.iconPath}
                      className={styles.imgFrame}
                      size={42}
                      alt={item.name}
                      isOrnn={isOrnnItem(item)}
                    />
                    <div className={styles.resultInfo}>
                      <p className={styles.resultName}>{item.name}</p>
                      <p className={styles.priceContainer}>
                        <span className={styles.resultPrice}>
                          {item.priceTotal}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.selected}>
              {hovered && (
                <div className={styles.selectedDetails}>
                  <div className={styles.detailsHeader}>
                    <ItemImage
                      key={hovered.id}
                      imgName={hovered.iconPath}
                      className={styles.imgFrame}
                      size={42}
                      alt={hovered.name}
                      isOrnn={isOrnnItem(hovered)}
                      inline
                    />
                    <div className={styles.detailsTitle}>
                      <p className={styles.detailsName}>{hovered.name}</p>
                      <p className={styles.priceContainer}>
                        <span className={styles.detailsPrice}>
                          {hovered.priceTotal}
                        </span>
                        {hoverGoldEfficiency ? (
                          <span className={styles.detailsPriceEfficiency}>
                            (
                            {hoverGoldEfficiency.toLocaleString("en-us", {
                              style: "percent",
                            })}{" "}
                            Efficient)
                          </span>
                        ) : null}
                      </p>
                    </div>
                  </div>
                  <p
                    className={styles.detailsDescription}
                    dangerouslySetInnerHTML={{
                      __html: hovered.description,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            className={styles.overlay}
            onClick={() => setState((prev) => ({ ...prev, searchOpen: false }))}
          />
        </>
      )}
      <div className={styles.controls}>
        <Tabs />
        <Tippy
          placement="right-start"
          offset="0, 10"
          duration={0}
          content={"Reverse Order"}
        >
          <button
            name="Change Sort Direction"
            className={`${styles.orderBtn} ${state.desc && styles.active}`}
            onClick={handleReverseOrder}
          >
            <Icon icon="order" width={24} height={24} />
          </button>
        </Tippy>
      </div>
    </div>
  );
};

export default Search;
