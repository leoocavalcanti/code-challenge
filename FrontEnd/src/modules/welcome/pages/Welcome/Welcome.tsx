import {
  Button,
  Center,
  Flex,
  Heading,
  Highlight,
  Image,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export function Welcome() {
  const navigate = useNavigate();

  return (
    <Center flexDirection="column">
      <Image
        src="/src/assets/logo.png"
        height="114px"
        width="122px"
        alt="Logo Yazo"
      />

      <Heading fontSize={26} color="white.1000">
        Salveee!
      </Heading>
      <Text color="white.1000">
        Bem-vindo(a) ao desafio de Suporte Guy da Yazo.
      </Text>

      <Heading fontSize={26} color="white.1000" mt="48px">
        Escolha um desafio
      </Heading>
      <Flex gap="18px" mt="24px">
        <Button
          bg="yellow.500"
          w="314px"
          onClick={() => navigate('/login')}
          py="30px"
        >
          Desafio 1 - Tela de Login
        </Button>
        <Button
          bg="yellow.500"
          w="314px"
          onClick={() => navigate('/schedules')}
          py="30px"
        >
          Desafio 2 - Agenda
        </Button>
        <Button
          bg="yellow.500"
          w="314px"
          onClick={() => navigate('/reports')}
          py="30px"
        >
          Desafio 3 - Relatórios
        </Button>
      </Flex>
      <Text color="white.1000" mt="24px" fontSize="24px" as="b">
        Boa sorte!
      </Text>
    </Center>
  );
}
