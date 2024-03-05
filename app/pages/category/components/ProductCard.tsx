import {
  ProductContainer,
  ProductContent,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from '@heureka-group/hasty-components';
import type { FC } from 'react';
import { Link } from 'react-router';

import { useImageSource } from '../../../hooks/useImageSource';
import { IMAGE_SIZE_200x200, IMAGE_SIZE_400x400 } from '../../../services/productService/constants';
import type { TProduct } from '../../../services/productService/types';

export interface IProductCardProps {
  product: TProduct;
}

export const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { id, name, priceMin, priceMax, image } = product;

  const { source, srcSet } = useImageSource(image, IMAGE_SIZE_200x200, IMAGE_SIZE_400x400);

  return (
    <section className={'c-product--compact'}>
      <Link className={'c-product__image-link c-product__link'} to="#">
        <ProductImage srcSet={srcSet} src={source} alt={name} />
      </Link>
      <ProductContainer key={id}>
        <ProductContent>
          <ProductTitle>
            <Link className="c-product__link" to={`/p/${id}`}>
              {name}
            </Link>
          </ProductTitle>
          <div className="o-inline-list">
            <ProductPrice>
              {parseInt(priceMin, 10)}&nbsp;Kč &nbsp;&#45;&nbsp;
              {parseInt(priceMax, 10)}&nbsp;Kč
            </ProductPrice>
          </div>
        </ProductContent>
      </ProductContainer>
    </section>
  );
};
