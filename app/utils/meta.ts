import type { Route } from '../+types/root';

// eslint-disable-next-line no-empty-pattern
export const meta = ({}: Route.MetaArgs) => [
  { title: 'Testing app' },
  { name: 'description', content: 'Welcome to Testing app!' },
];
