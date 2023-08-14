import React from 'react';
import FastImage from 'react-native-fast-image';

import * as S from './styles';

type Props = {
  imageUri: string;
  title: string;
  onPress: () => void;
};

export function CreationItem({ imageUri, title, onPress }: Props) {
  return (
    <S.Wrapper onPress={onPress} testID="creation-item">
      <S.Image
        source={{
          uri: imageUri,
          priority: FastImage.priority.normal,
        }}
      />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
