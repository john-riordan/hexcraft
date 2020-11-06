import Image from 'next/image';

import styles from './Image.module.css';

const ItemImage = ({
  imgName,
  size = 64,
  className,
  isMythic = false,
  inline = false,
}) => (
  <div
    className={`${styles.imgFrame} ${inline && styles.inline}  ${className}`}
  >
    {isMythic && <div className={styles.mythicBorder} />}
    <Image
      src={`/${imgName}`}
      width={size}
      height={size}
      quality={100}
      loading="lazy"
    />
  </div>
);

export default ItemImage;
