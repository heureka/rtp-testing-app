import { Breadcrumbs, BreadcrumbsItem, BreadcrumbsLink } from '@heureka-group/hasty-components';
import { ProductImage } from './components/ProductImage';
import { ProductInfo } from './components/ProductInfo';

export { links } from '../../utils/links';
export { meta } from '../../utils/meta';

const product = {
  id: 'c9b1e8f0-3b4d-4b8e-9f1b-2a9b8e1b9f1b',
  name: 'Fantastic Granite Shoes',
  priceMin: '29.99',
  priceMax: '49.99',
  description:
    'Ergonomic executive chair. Sleek wooden table. Durable steel knife. Practical plastic bottle. Handmade cotton shirt.',
  image: {
    '200x200': 'https://loremflickr.com/200/200',
    '300x300': 'https://loremflickr.com/300/300',
    '400x400': 'https://loremflickr.com/400/400',
    '600x600': 'https://loremflickr.com/600/600',
  },
  rating: 4,
  count: 123,
};

const Detail = () => {
  return (
    <div className="o-wrapper o-wrapper--fill-medium-margin">
      <Breadcrumbs>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/">Sekce</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>Produktový detail</BreadcrumbsItem>
      </Breadcrumbs>
      <div className="product">
        <ProductImage name={product.name} image={product?.image} />
        <ProductInfo name={product.name} description={product.description} />
      </div>
    </div>
  );
};

export default Detail;
