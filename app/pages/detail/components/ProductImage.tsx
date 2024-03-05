import type { FC } from 'react';
import { useImageSource } from '../../../hooks/useImageSource';
import { IMAGE_SIZE_300x300, IMAGE_SIZE_600x600 } from '../../../services/productService/constants';
import type { TProduct } from '../../../services/productService/types';

export interface IProductImageProps {
  name: TProduct['name'];
  image?: TProduct['image'];
}

export const ProductImage: FC<IProductImageProps> = ({ name, image }) => {
  const imageData = useImageSource(image, IMAGE_SIZE_300x300, IMAGE_SIZE_600x600);

  return (
    <div className="product__image">
      <img src={imageData?.source} srcSet={imageData?.srcSet} width={300} height={300} alt={name} />
    </div>
  );
};
