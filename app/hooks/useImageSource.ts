import { useMemo } from 'react';

import type { TImage, TImageSize } from '../services/productService/types';
import { getImageSource } from '../utils/getImageSource';

export const useImageSource = (image: TImage | undefined, dimensionX1: TImageSize, dimensionX2?: TImageSize) =>
  useMemo(() => getImageSource(image, dimensionX1, dimensionX2), [image, dimensionX1, dimensionX2]);
