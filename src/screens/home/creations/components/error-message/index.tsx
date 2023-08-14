import React from 'react';
import { Button } from 'react-native';

import * as S from './styles';

type Props = {
  tryAgain: () => void;
};

export function ErrorMessage({ tryAgain }: Props) {
  return (
    <S.Wrapper>
      <S.ErroText>Could not retrieve the creations.</S.ErroText>
      <Button title="Try again" onPress={tryAgain} testID="try-again" />
    </S.Wrapper>
  );
}
