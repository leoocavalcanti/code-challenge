import { ReactElement } from 'react';

export interface WrapperRoutesProps {
  children: ReactElement;
  hasHeader?: boolean;
  title?: string;
  message?: string;
}
