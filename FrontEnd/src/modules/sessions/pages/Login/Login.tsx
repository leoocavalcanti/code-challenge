import { Button, Center, Flex, Input, Text } from '@chakra-ui/react';
import { Form } from 'shared/components/molecules/Form/Form';
import { useCallback } from 'react';
import { useForms } from 'shared/components/molecules/Form/hooks/useForms';
import { LoginSchema } from '../../schemas/form.schema';
import { InputContainer } from './login.styled';
import {
  LoginType,
  useHandleLogin,
} from 'modules/sessions/handlers/login.handlers';
import { useLogin } from 'modules/sessions/hooks/useLogin';
import { Avatar } from 'shared/components/atoms/Avatar/Avatar';

export const Login = () => {
  const { handleFormLogin, handleLogin } = useHandleLogin();
  const { createLogin, data } = useLogin();

  const onSubmit = useCallback(async (data: LoginType) => {
    createLogin(handleFormLogin(data));
  }, []);

  const { schemaLogin } = LoginSchema();
  const { useFormGeneric } = useForms();
  const { handleSubmit, errors, register } =
    useFormGeneric<LoginType>(schemaLogin);

  return (
    <Center>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <Avatar data={handleLogin(data)} />

        <Flex flexDirection="column" gap={4} marginTop={8}>
          <InputContainer>
            <Input
              width="300px"
              placeholder="Insira seu Username"
              borderColor="transparent"
              bg="#242940"
              color="white.1000"
              focusBorderColor="yellow.500"
              {...register('username')}
            />

            {errors.username && (
              <Text>{errors.username.message || errors.username.message}</Text>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              width="300px"
              placeholder="Insira sua Senha"
              borderColor="transparent"
              focusBorderColor="yellow.500"
              bg="#242940"
              color="white.1000"
              type="password"
              {...register('password')}
            />

            {errors.password && (
              <Text>{errors.password.message || errors.password.message}</Text>
            )}
          </InputContainer>

          <Button bg="yellow.500" type="submit" width="300px">
            Entrar
          </Button>
        </Flex>
      </Form>
    </Center>
  );
};
