import { HastyProvider } from '@heureka-group/hasty-components';
import { getInfo as getInfoHastyStyles } from '@heureka-group/hasty-styles';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  const { version: hastyStylesVersion } = getInfoHastyStyles();
  return <HastyProvider stylesVersion={hastyStylesVersion}>{children}</HastyProvider>;
};

export default Providers;
