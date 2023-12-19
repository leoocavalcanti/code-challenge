import * as Yup from 'yup';

export const LoginSchema = () => {
  const schemaLogin = Yup.object().shape({
    username: Yup.string().required('Username é obrigatório'),
    password: Yup.string()
      .required('password é obrigatório')
      .min(6, 'Password deve ter no mínimo 6 caracteres'),
  });

  return { schemaLogin };
};
