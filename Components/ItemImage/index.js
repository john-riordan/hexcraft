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
    className={`${styles.imgFrame} ${
      inline && styles.inline
    }  ${className}`}
  >
    {isMythic && <span className={styles.mythicBorder} />}
    <Image
      src={`/${imgName}`}
      width={size}
      height={size}
      quality={80}
      alt={imgName}
      placeholder='blur'
      blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
    />
  </div>
);

export default ItemImage;
