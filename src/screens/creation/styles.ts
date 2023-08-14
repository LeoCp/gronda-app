import styled from 'styled-components/native';
import { Text } from '@components/text';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #075669;
`;

export const GoBack = styled.TouchableOpacity`
  padding: 16px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const VisitCount = styled(Text).attrs({
  bold: true,
  size: 'xl',
  color: 'light',
})`
  margin-bottom: 16px;
`;

export const Label = styled(Text).attrs({
  bold: true,
  size: 'lg',
  color: 'light',
  testID: 'label',
})``;
