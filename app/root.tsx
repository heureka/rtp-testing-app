import { getInfo as getInfoHastyIcons } from '@heureka-group/hasty-icons';
import { getInfo as getInfoHastyStyles } from '@heureka-group/hasty-styles';
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { Route } from './+types/root';
import { Header } from './components/header';
import Providers from './Providers';

const { scopeClass } = getInfoHastyStyles();
const { url: iconsUrl } = getInfoHastyIcons();

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} - {error.data}
        </h1>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Unknown Error</h1>
      </div>
    );
  }
};

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Providers>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src={iconsUrl} data-sprite-types="icons,flags" async />
      </head>
      <body className={`scope-rtp-testing-app ${scopeClass}`}>
        <Header />
        <main>{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  </Providers>
);

const App = () => <Outlet />;

export default App;
