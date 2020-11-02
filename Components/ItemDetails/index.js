import { useContext } from 'react';

import { StateContext } from '../../StateContext';
import styles from './Details.module.css';

const ItemDetails = ({ className }) => {
  const { state } = useContext(StateContext);
  const { selectedItem } = state;

  return (
    <div className={`${styles.details} ${className}`}>
      {selectedItem && (
        <>
          <p>{selectedItem.name}</p>
          <p>{selectedItem.priceTotal}</p>
          <p dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
        </>
      )}
    </div>
  );
};

export default ItemDetails;
