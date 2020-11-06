import { useContext } from 'react';

import { StateContext } from '../../StateContext';
import styles from './Details.module.css';

import BuildTree from '../BuildTree/';

const ItemDetails = ({ className }) => {
  const { state } = useContext(StateContext);
  const { selectedItem } = state;

  return (
    <div className={`${styles.details} ${className}`}>
      {selectedItem && <BuildTree imageSize={64} item={selectedItem.id} />}
    </div>
  );
};

export default ItemDetails;
