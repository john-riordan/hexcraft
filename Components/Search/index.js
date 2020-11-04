import { useContext, useState } from 'react';

import ItemImage from '../ItemImage/';
import styles from './Search.module.css';
import { StateContext } from '../../StateContext';

const Search = () => {
  const [open, setOpen] = useState(false);
  const { state, setState } = useContext(StateContext);
  const { selectedItem } = state;

  const results = state.search?.length
    ? state.itemsData?.items.filter(
        (item) =>
          item.name.toLowerCase().includes(state.search) ||
          item.search.includes(state.search) ||
          item.description.toLowerCase().includes(state.search)
      )
    : state.itemsData?.items;

  console.log(results, '!!');

  return (
    <div className={styles.container}>
      <div className={styles.inputFrame}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          onClick={() => setOpen(!open)}
          // onFocus={() => setOpen(true)}
          // onBlur={() => setOpen(false)}
          onChange={(e) => {
            setState((prev) => ({ ...prev, search: e.target.value }));
          }}
        />
      </div>
      {open && (
        <div className={styles.resultsFrame}>
          <div className={styles.resultsList}>
            {results.map((item) => (
              <div
                key={item.id}
                className={styles.result}
                onClick={() =>
                  setState((prev) => ({ ...prev, selectedItem: item }))
                }
              >
                <ItemImage
                  imgName={item.iconPath}
                  className={styles.imgFrame}
                  size={42}
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
              <div>
                <p>{selectedItem.name}</p>
                <p>{selectedItem.priceTotal}</p>
                <p
                  dangerouslySetInnerHTML={{ __html: selectedItem.description }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
