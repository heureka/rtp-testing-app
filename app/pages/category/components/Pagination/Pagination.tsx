import { Pagination as UIPagination, useGetPages } from '@heureka-group/hasty-components';
import type { FC } from 'react';
import PaginationChevron from './PaginationChevron';
import PaginationItem from './PaginationItem';

export interface IFooterProps {
  totalCount: number;
}

const MAX_VISIBLE_PAGES = 3;

// use hook useQueryParams
export const Pagination: FC<IFooterProps> = ({ totalCount }) => {
  const currentLimit = 1;
  const currentPage = 1;

  const lastPage = Math.ceil(totalCount / currentLimit);

  const pages = useGetPages({
    currentPage,
    lastPage,
    maxVisiblePages: MAX_VISIBLE_PAGES,
  });

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < lastPage ? currentPage + 1 : null;

  return (
    <footer>
      <div className="c-footer">
        <UIPagination className="c-pagination__wrapper">
          {prevPage && <PaginationChevron direction={'left'} />}
          {pages.map(page => (
            <PaginationItem key={page} page={page} />
          ))}
          {nextPage && <PaginationChevron direction={'right'} />}
        </UIPagination>
      </div>
    </footer>
  );
};
