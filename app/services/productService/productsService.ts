import qs from 'qs';
import { data } from 'react-router';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from './constants';
import type { TProduct } from './types';

const PRODUCTS_ENDPOINT_PATH = '/products';
const API_HOST = import.meta.env.VITE_API_HOST;

async function get(query: string): Promise<Response> {
  const response = await fetch(`${API_HOST}${PRODUCTS_ENDPOINT_PATH}?${query}`);

  if (!response.ok) {
    throw data('Data not provided', { status: response.status });
  }

  return response;
}

export async function getProduct(id: string): Promise<TProduct> {
  const response = await get(`id=${encodeURIComponent(id)}`);
  const products: [TProduct] = await response.json();
  return products[0];
}

export async function getProducts({
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
}: {
  page?: string;
  limit?: string;
}): Promise<{ products: [TProduct]; totalCount: number }> {
  const query = qs.stringify({ _page: page, _limit: limit }, { encodeValuesOnly: true });
  const response = await get(query);
  const totalCount = response.headers.get('X-Total-Count');

  if (!totalCount) {
    throw data('Total count header is missing', { status: 500 });
  }

  const products: [TProduct] = await response.json();

  return { products, totalCount: parseInt(totalCount, 10) };
}
