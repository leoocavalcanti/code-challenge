import { Box, Flex, Icon, Image, Text, Tooltip } from '@chakra-ui/react';
import { IoLocationOutline } from 'react-icons/all';
import {
  Container,
  LeftFlexContainer,
  LocationContainer,
  RightFlexContainer,
  TitleContainer,
} from './scheduleCard.styled';
import { ScheduleCardProps } from './schedulecard.interfaces';
import { useHandleSchedule } from 'modules/schedule/handlers/schedule.handlers';

export const ScheduleCard = ({
  data: { day, startTime, endTime, tags, place, title, users },
}: ScheduleCardProps) => {
  const { concatScheduleUserNames } = useHandleSchedule();

  return (
    <Container bg="white.900">
      <Flex justify="space-between">
        <LeftFlexContainer>
          <TitleContainer>
            <Text color="blue.400" as="b" fontSize="32px">
              {title}
            </Text>
            {tags.map(tag => (
              <Box
                bg={tag.color}
                borderRadius="8px"
                p="6px"
                color="blue.300"
                as="b"
                minW="78px"
                textAlign="center"
              >
                {tag.title}
              </Box>
            ))}
          </TitleContainer>

          <LocationContainer>
            <Flex>
              <Icon as={IoLocationOutline} boxSize="18px" color="black.500" />
            </Flex>
            <Text>{place}</Text>
          </LocationContainer>

          <Flex gap="16px">
            {users
              .slice(0, 4)
              .map(user => (
                <Image
                  src={user.source_image}
                  objectFit="cover"
                  alt={user.first_name}
                  borderRadius="full"
                  boxSize="44px"
                  title={user.first_name}
                  key={user.id}
                />
              ))}
            {users.length > 4 && (
              <Tooltip label={concatScheduleUserNames(users)} fontSize="md">
                <Image
                  src="/src/assets/Frame 16.svg"
                  objectFit="cover"
                  borderRadius="full"
                  boxSize="44px"
                />
              </Tooltip>
            )}
          </Flex>
        </LeftFlexContainer>

        <RightFlexContainer>
          <Text color="blue.400" as="b" fontSize="18px" align="center">
            {day}
          </Text>
          <Text>{startTime}</Text>
          <Text>{endTime}</Text>
        </RightFlexContainer>
      </Flex>
    </Container>
  );
};
