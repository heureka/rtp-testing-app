import {
  DOTS_PAGE_NUMBER,
  ELLIPSIS,
  PaginationContent,
  PaginationItem as UIPaginationItem,
} from '@heureka-group/hasty-components';
import type { FC } from 'react';
import { Link } from 'react-router';
import useQueryParams from '../../../../hooks/useQueryParams';
import { getQueryLink } from '../../../../utils/getQueryLink';

export interface IPaginationItemProps {
  page: number;
}

const PaginationItem: FC<IPaginationItemProps> = ({ page }) => {
  const { currentPage, currentLimit, currentOrder, currentSort } = useQueryParams();
  const isActive = currentPage === page;

  if (page !== DOTS_PAGE_NUMBER && !isActive) {
    return (
      <UIPaginationItem
        {...(isActive ? { isActive: true } : {})}
        {...(page === DOTS_PAGE_NUMBER ? { isEllipsis: true } : {})}
      >
        <PaginationContent tag="span">
          <Link
            to={getQueryLink({ page, limit: currentLimit, order: currentOrder, sort: currentSort })}
            className="c-pagination__link-to-page"
          >
            {page}
          </Link>
        </PaginationContent>
      </UIPaginationItem>
    );
  }
  return (
    <UIPaginationItem
      {...(isActive ? { isActive: true } : {})}
      {...(page === DOTS_PAGE_NUMBER ? { isEllipsis: true } : {})}
    >
      <PaginationContent tag="span">{page === DOTS_PAGE_NUMBER ? ELLIPSIS : page}</PaginationContent>
    </UIPaginationItem>
  );
};

export default PaginationItem;
