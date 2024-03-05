import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./pages/category/Category.tsx'),
  route('p/:id', './pages/detail/Detail.tsx'),
] satisfies RouteConfig;
