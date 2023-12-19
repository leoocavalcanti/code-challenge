import { Box, Button, LinkBox, Text } from '@chakra-ui/react';
import { ChallengeCardProps } from './challengeCard.interfaces';
import { useNavigate } from 'react-router-dom';

export function ChallengeCard({
  titleChallenge,
  descriptionChallenge,
  link,
}: ChallengeCardProps) {
  const navigate = useNavigate();
  return (
    <LinkBox maxW="sm" p="5" borderWidth="1px" rounded="md">
      <Box fontWeight="bold" color="blue.3000">
        {titleChallenge}
      </Box>

      <Text mb="3" color="white.1000">
        {descriptionChallenge}
      </Text>
      <Button
        bg="yellow.500"
        color="black.500"
        fontWeight="bold"
        onClick={() => navigate(link)}
      >
        Começar
      </Button>
    </LinkBox>
  );
}
