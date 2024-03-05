import { useSearchParams } from 'react-router';

const useQueryParams = (): { currentPage: number; currentLimit: number; currentOrder: string; currentSort: string } => {
  const [searchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get('page') ?? '1', 10);
  const currentLimit = parseInt(searchParams.get('limit') ?? '24', 10);
  const currentOrder = searchParams.get('order') ?? 'desc';
  const currentSort = searchParams.get('sort') ?? 'rating';

  return { currentPage, currentLimit, currentOrder, currentSort };
};

export default useQueryParams;
