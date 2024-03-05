import { PaginationContent, PaginationIcon, PaginationItem } from '@heureka-group/hasty-components';
import type { FC } from 'react';
import { Link } from 'react-router';

export interface IPaginationChevronProps {
  direction: 'left' | 'right';
}

const PaginationChevron: FC<IPaginationChevronProps> = ({ direction }) => {
  // const { currentLimit, currentPage, currentOrder, currentSort } = useQueryParams();

  return (
    <PaginationItem isChevron>
      <PaginationContent tag="div">
        <Link to="#" className="c-pagination__link-to-page">
          <PaginationIcon direction={direction} />
        </Link>
      </PaginationContent>
    </PaginationItem>
  );
};

export default PaginationChevron;
