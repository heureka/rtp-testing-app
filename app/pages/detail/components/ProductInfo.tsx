import { useEffect, useState, type FC } from 'react';
import type { TProduct } from '../../../services/productService/types';

type TProductInfoProps = {
  name: TProduct['name'];
  description: TProduct['description'];
};

export const ProductInfo: FC<TProductInfoProps> = ({ name, description }) => {
  const [isDescriptionOpen, setDescriptionOpen] = useState<boolean>(true);

  useEffect(() => {
    setDescriptionOpen(false);
  }, [setDescriptionOpen]);

  return (
    <div className="product__info">
      <h1 className="e-heading u-gamma u-tight">{name}</h1>
      <p className="product__description" data-state={isDescriptionOpen ? 'open' : 'closed'}>
        {description}
      </p>
      <button className="e-action" onClick={() => setDescriptionOpen(!isDescriptionOpen)}>
        {isDescriptionOpen ? 'Skrýt popis' : 'Celý popis'}
      </button>
    </div>
  );
};
