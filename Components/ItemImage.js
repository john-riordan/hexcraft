import Image from 'next/image';

const ItemImage = ({ imgName }) => (
  <Image
    src={`/${imgName}`}
    width="64"
    height="64"
    quality={100}
    loading="lazy"
  />
);

export default ItemImage;
