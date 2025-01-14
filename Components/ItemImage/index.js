import styles from "./Image.module.css";

const ItemImage = ({
  imgName,
  alt = "Season 2025 Item",
  size = 64,
  className,
  isMythic = false,
  isOrnn = false,
  inline = false,
  itemId = 0,
}) => (
  <div
    className={`${styles.imgFrame} ${
      inline && styles.inline
    } ${className} item`}
    data-id={itemId}
  >
    {isMythic && <div className={styles.mythicBorder} />}
    <img src={imgName} alt={alt} width={size} height={size} loading="lazy" />
    {isOrnn && <div className={styles.ornnBorder} />}
  </div>
);

export default ItemImage;
