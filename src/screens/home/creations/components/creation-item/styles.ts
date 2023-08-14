import { Text } from '@components/text';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 24px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const Image = styled(FastImage)`
  width: 100%;
  height: 190px;
  border-radius: 12px;
`;

export const Title = styled(Text).attrs({
  bold: true,
  size: 'sm',
})`
  margin-top: 12px;
`;
