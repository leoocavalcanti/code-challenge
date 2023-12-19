import { Box as BoxC, Flex as FlexC } from '@chakra-ui/react';
import styled from 'styled-components';

export const Container = styled(BoxC)`
  width: 100%;
  border-radius: 8px;
  padding: 16px 24px;
`;

export const LeftFlexContainer = styled(FlexC)`
  flex-direction: column;
  gap: 8px;
`;

export const TitleContainer = styled(FlexC)`
  align-items: center;
  gap: 8px;
`;

export const LocationContainer = styled(FlexC)`
  align-items: center;
  gap: 8px;
`;

export const RightFlexContainer = styled(FlexC)`
  width: 130px;
  border-left: 1px solid #d9d9d9;
  padding-left: 12px;
  margin-left: 12px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
