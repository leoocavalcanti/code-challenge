import { FormEventHandler, ReactNode } from 'react';

export interface FormProps {
  children: ReactNode;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}
