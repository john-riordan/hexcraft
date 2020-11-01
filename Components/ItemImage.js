import Image from 'next/image';

const ItemImage = ({ imgName }) => (
  <Image src={`/${imgName}`} width="60" height="60" />
);

export default ItemImage;
