import {
  Center,
  Image,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export function Reports() {
  return (
    <Center flexDirection="column" gap={8}>
      <Image
        src="/src/assets/logo.png"
        height="114px"
        width="122px"
        alt="Logo Yazo"
      />
      <Heading fontSize={24} color="yellow.500" textAlign="center">
        Para este desafio precisamos que você tire relatórios das agendas:
      </Heading>
      <UnorderedList>
        <ListItem color="white.1000">Todas as agendas;</ListItem>
        <ListItem color="white.1000">
          Todas as agendas com a tag “Dev”;
        </ListItem>
        <ListItem color="white.1000">
          Todas as agendas que acontecerão no dia 10 de maio;
        </ListItem>
        <ListItem color="white.1000">
          Todas as agendas que o usuário Luís participou;
        </ListItem>
      </UnorderedList>
      <Heading fontSize={24} color="white.1000" textAlign="center">
        Para concluir o desafio, suba os relatórios para a pasta "reports" localizada na raiz do projeto, escreva as query utilizadas no arquivo querys.md
      </Heading>
    </Center>
  );
}
