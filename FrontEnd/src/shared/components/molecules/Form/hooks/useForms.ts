import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { type FieldValues, useForm } from 'react-hook-form';

export const useForms = () => {
  function useFormGeneric<T extends FieldValues>(
    options: Yup.ObjectSchema<Yup.AnyObject>
  ) {
    const {
      register,
      formState: { errors },
      handleSubmit,
      control,
    } = useForm<T>({
      resolver: yupResolver(options),
    });
    return { register, errors, handleSubmit, control };
  }

  return { useFormGeneric };
};
