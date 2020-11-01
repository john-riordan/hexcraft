import styles from './Details.module.css';

const ItemDetails = ({ className }) => (
  <div className={`${styles.details} ${className}`}>Item Details</div>
);

export default ItemDetails;
