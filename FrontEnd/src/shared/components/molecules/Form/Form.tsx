import { FormProps } from './form.interface';

export const Form = ({ children, handleSubmit }: FormProps) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};
