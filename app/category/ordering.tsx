import classNames from 'classnames';
import { Link } from 'react-router';
import type { FC } from 'react';

import useQueryParams from '../hooks/useQueryParams';
import { getQueryLink } from '../utils/getQueryLink';
import {
  ORDER_ASC,
  ORDER_DESC,
  SORT_PRICE_MAX,
  SORT_PRICE_MIN,
  SORT_RATING,
  SORT_REVIEW_COUNT,
} from '../services/productService/constants';

const ORDERING_ITEMS = [
  {
    label: 'Nejoblíbenější',
    sort: SORT_RATING,
    order: ORDER_DESC,
  },
  {
    label: 'Nejlevnější',
    sort: SORT_PRICE_MIN,
    order: ORDER_ASC,
  },
  {
    label: 'Nejdražší',
    sort: SORT_PRICE_MAX,
    order: ORDER_DESC,
  },
  {
    label: 'Nejvíce recenzí',
    sort: SORT_REVIEW_COUNT,
    order: ORDER_DESC,
  },
];

export const Ordering: FC = () => {
  const { currentPage, currentLimit, currentOrder, currentSort } = useQueryParams();

  const isActive = ({ sort, order }: { sort: string; order: string }) => sort === currentSort && order === currentOrder;

  return (
    <div className="c-ordering">
      <h5 className="c-ordering__heading">Řazení</h5>
      <ul className="c-ordering__list">
        {ORDERING_ITEMS.map(option => (
          <li key={option.label} className="c-ordering__item">
            <Link
              to={getQueryLink({ sort: option.sort, order: option.order, limit: currentLimit, page: currentPage })}
              className={classNames('c-ordering__link', {
                'is-active': isActive({ sort: option.sort, order: option.order }),
              })}
            >
              <span>{option.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
