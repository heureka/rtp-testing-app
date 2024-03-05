import qs from 'qs';

export const getQueryLink = ({
  sort,
  order,
  page,
  limit,
}: {
  sort: string;
  order: string;
  page: number;
  limit: number;
}) => {
  const query = qs.stringify({ limit, page, sort, order }, { encodeValuesOnly: true });
  return `/?${query}`;
};
