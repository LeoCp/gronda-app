import { Text as TextBase } from '@components/text';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 8px;
`;

export const BannerImage = styled(FastImage).attrs({
  source: {
    uri: 'https://d3566jsyo19arr.cloudfront.net/banner/marco_mueller_banner.jpg',
    priority: FastImage.priority.normal,
  },
})`
  width: 100%;
  height: 170px;
  border-radius: 8px;
  margin-top: 15px;
`;

export const BannerContent = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 20px;
`;

export const Text = styled(TextBase).attrs({
  color: 'light',
  bold: true,
})``;

export const Label = styled(Text).attrs({
  size: 'xs',
})``;

export const Title = styled(Text).attrs({
  size: 'lg',
})`
  margin-top: 6px;
  margin-bottom: 12px;
`;

export const Description = styled(Text).attrs({
  size: 'sm',
  bold: false,
})``;

export const SectionTitle = styled(Text).attrs({
  size: 'md',
  color: 'black',
})`
  margin-top: 30px;
  margin-bottom: 16px;
`;
