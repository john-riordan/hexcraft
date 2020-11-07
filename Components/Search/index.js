import { useContext } from 'react';
import Tippy from '@tippy.js/react';

import Icon from '../Icon/';
import Tabs from '../Tabs/';
import ItemImage from '../ItemImage/';
import styles from './Search.module.css';
import { StateContext } from '../../StateContext';

const Search = () => {
  const { state, setState } = useContext(StateContext);
  const { selectedItem } = state;

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

  return (
    <div className={styles.container}>
      <div className={styles.inputFrame}>
        <Icon icon="search" className={styles.search} />
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          value={state.search}
          onClick={() => setState((prev) => ({ ...prev, searchOpen: true }))}
          onChange={(e) => {
            setState((prev) => ({ ...prev, search: e.target.value }));
          }}
        />
        {state.searchOpen && (
          <Icon
            icon="close"
            className={styles.close}
            onClick={() => setState((prev) => ({ ...prev, searchOpen: false }))}
          />
        )}
      </div>
      {state.searchOpen && (
        <>
          <div className={styles.resultsFrame}>
            <div className={styles.resultsList}>
              {results.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.result} ${
                    selectedItem?.id === item.id && styles.resultSelected
                  }`}
                  onClick={() =>
                    setState((prev) => ({ ...prev, selectedItem: item }))
                  }
                >
                  <ItemImage
                    imgName={item.iconPath}
                    className={styles.imgFrame}
                    size={42}
                    alt={item.name}
                    isMythic={state.itemsData.mythicDictionary[item.id]}
                  />
                  <div className={styles.resultInfo}>
                    <p className={styles.resultName}>{item.name}</p>
                    <p className={styles.resultPrice}>{item.priceTotal}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.selected}>
              {selectedItem && (
                <div className={styles.selectedDetails}>
                  <div className={styles.detailsHeader}>
                    <ItemImage
                      key={selectedItem.id}
                      imgName={selectedItem.iconPath}
                      className={styles.imgFrame}
                      size={42}
                      alt={selectedItem.name}
                      isMythic={
                        state.itemsData.mythicDictionary[selectedItem.id]
                      }
                      inline
                    />
                    <div className={styles.detailsTitle}>
                      <p className={styles.detailsName}>{selectedItem.name}</p>
                      <p className={styles.detailsPrice}>
                        {selectedItem.priceTotal}
                      </p>
                    </div>
                  </div>

                  <p
                    className={styles.detailsDescription}
                    dangerouslySetInnerHTML={{
                      __html: selectedItem.description,
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
          content={'Reverse Order'}
        >
          <button
            name="Change Sort Direction"
            className={`${styles.orderBtn} ${state.desc && styles.active}`}
            onClick={() => setState((prev) => ({ ...prev, desc: !prev.desc }))}
          >
            <Icon icon="order" />
          </button>
        </Tippy>
      </div>
    </div>
  );
};

export default Search;
