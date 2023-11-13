import styles from './Image.module.css';

const ItemImage = ({
  imgName,
  alt = 'Season 2023 Item',
  size = 64,
  className,
  isMythic = false,
  isOrnn = false,
  inline = false,
}) => (
  <div
    className={`${styles.imgFrame} ${inline && styles.inline}  ${className}`}
  >
    {isMythic && <div className={styles.mythicBorder} />}
    <img src={imgName} alt={alt} width={size} height={size} loading='lazy' />
    {isOrnn && <div className={styles.ornnBorder} />}
  </div>
);

export default ItemImage;
