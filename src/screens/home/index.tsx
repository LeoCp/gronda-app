import React from 'react';
import { StatusBar } from 'react-native';

import { Icon } from '@components/icon';
import { Creations } from '@screens/home/creations';

import * as S from './styles';

export function Home() {
  return (
    <S.Wrapper>
      <StatusBar barStyle="dark-content" />
      <S.Header>
        <Icon name="logo" height={45} width={130} />
      </S.Header>
      <Creations />
    </S.Wrapper>
  );
}
