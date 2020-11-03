import styles from './ItemTip.module.css';

import ItemImage from '../ItemImage/';

const ItemTooltip = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ItemImage imgName={item.iconPath} size={48} />
        <div className={styles.info}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.price}>{item.priceTotal}</p>
        </div>
      </div>

      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </div>
  );
};

export default ItemTooltip;
