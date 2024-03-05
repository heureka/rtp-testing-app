import { getInfo as getInfoHastyStyles } from '@heureka-group/hasty-styles';
import type { Route } from '../+types/root';

const { url: stylesUrl } = getInfoHastyStyles();

export const links: Route.LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://cdn.heureka.group/fe/hasty-images/latest/font/source-sans-variable.woff',
  },
  {
    rel: 'stylesheet',
    href: stylesUrl,
  },
  {
    rel: 'stylesheet',
    href: '../public/index.scss',
  },
];
