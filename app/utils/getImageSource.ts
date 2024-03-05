import type { TImage, TImageSize } from '../services/productService/types';

export type TImageSource = {
  source?: string;
  srcSet?: string;
};

export const getImageSource = (
  image: TImage | null | undefined,
  dimensionX1: TImageSize,
  dimensionX2?: TImageSize,
): TImageSource => {
  if (!image) {
    return { source: undefined, srcSet: undefined };
  }

  const dimensions = [dimensionX1];

  if (dimensionX2) {
    dimensions.push(dimensionX2);
  }

  const source = image[dimensionX1];
  const srcSet = dimensions.map((size, index) => `${image[size]} ${index + 1}x`).join(', ');

  return { source, srcSet };
};
