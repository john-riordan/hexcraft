import { useContext } from 'react';

import { StateContext } from '../../StateContext';
import ItemImage from '../ItemImage/';
import styles from './Details.module.css';

const ItemDetails = ({ className }) => {
  const { state } = useContext(StateContext);
  const { selectedItem, itemsData } = state;

  console.log(selectedItem?.iconPath);

  return (
    <div className={`${styles.details} ${className}`}>
      {selectedItem && (
        <>
          <div className={styles.row}>
            <ItemImage
              key={selectedItem.iconPath}
              imgName={selectedItem.iconPath}
              className={styles.imgFrame}
              size={64}
            />
          </div>
          <div className={styles.row}>
            {selectedItem.from.map((item) => (
              <div key={itemsData.items[item].id} className={styles.itemCol}>
                <ItemImage
                  key={item.id}
                  imgName={itemsData.items[item].iconPath}
                  className={styles.imgFrame}
                  size={64}
                />
                <div className={styles.row}>
                  {itemsData.items[item].from.map((item) => (
                    <ItemImage
                      key={item.id}
                      imgName={itemsData.items[item].iconPath}
                      className={styles.imgFrame}
                      size={64}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p>{selectedItem.name}</p>
          <p>{selectedItem.priceTotal}</p>
          <p dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
          {/* <pre>{JSON.stringify(selectedItem, 0, 2)}</pre> */}
        </>
      )}
    </div>
  );
};

export default ItemDetails;
