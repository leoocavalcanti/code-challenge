import { Center, Text } from '@chakra-ui/react';
import { Image } from './Avatar.styled';
import { AvatarProps } from './avatar.interface';

export const Avatar = ({ data }: AvatarProps) => {
  const { sourceImage, firstName } = data;

  return (
    <Center flexDirection="column">
      <Image src={sourceImage} objectFit="cover" alt={firstName} w="300px" />
      <Text color="yellow.500" fontSize="18px">
        {firstName}
      </Text>
    </Center>
  );
};
