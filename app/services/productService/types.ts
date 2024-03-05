import type {
  IMAGE_SIZE_200x200,
  IMAGE_SIZE_300x300,
  IMAGE_SIZE_400x400,
  IMAGE_SIZE_600x600,
  ORDER_ASC,
  ORDER_DESC,
  SORT_PRICE_MAX,
  SORT_PRICE_MIN,
  SORT_RATING,
  SORT_REVIEW_COUNT,
} from './constants';

export type TImageSize =
  | typeof IMAGE_SIZE_200x200
  | typeof IMAGE_SIZE_300x300
  | typeof IMAGE_SIZE_400x400
  | typeof IMAGE_SIZE_600x600;

export type TImage = Record<TImageSize, string>;

export type TProduct = {
  id: string;
  name: string;
  priceMin: string;
  priceMax: string;
  description: string;
  image: TImage;
};

export type TSort = typeof SORT_PRICE_MIN | typeof SORT_PRICE_MAX | typeof SORT_RATING | typeof SORT_REVIEW_COUNT;

export type TOrder = typeof ORDER_ASC | typeof ORDER_DESC;
