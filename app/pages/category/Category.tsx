import { Grid, GridItem } from '@heureka-group/hasty-components';
import classNames from 'classnames';
import type { FC } from 'react';
import * as ProductService from '../../services/productService/productsService';
import type { TProduct } from '../../services/productService/types';
import type { Route } from './+types/Category';
import { Ordering } from './components/Ordering';
import { Pagination } from './components/Pagination/Pagination';
import { ProductCard } from './components/ProductCard';

export { links } from '../../utils/links';
export { meta } from '../../utils/meta';

// https://reactrouter.com/start/framework/data-loading

// Q1: add proper limits, page, ordering and sorting
export async function loader(): Promise<{ products: TProduct[]; totalCount: number }> {
  return await ProductService.getProducts({
    page: '1',
    limit: '1',
  });
}

const Category: FC<Route.ComponentProps> = ({ loaderData }) => {
  const { products, totalCount } = loaderData;

  const product = products[0];

  return (
    <>
      <div className={classNames('o-wrapper', 'o-wrapper--fill-medium-margin')}>
        <Ordering />
        <section className="c-product-list__wrapper">
          <div className={classNames('c-product-list', 'c-product-list--grid')}>
            <Grid variant="continuous" className="c-product-list__items">
              <GridItem className="c-product-list__item">
                <ProductCard product={product} />
              </GridItem>
            </Grid>
          </div>
        </section>
        <Pagination totalCount={totalCount} />
      </div>
    </>
  );
};

export default Category;
