import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TCreationRouteProp } from '@screens/creation/types/route-prop';

import { Icon } from '@components/icon';

import * as S from './styles';

export function Creation() {
  const { params } = useRoute<TCreationRouteProp>();

  const navigation = useNavigation();

  const label = `Visit${params?.visitCount > 1 ? 's' : ''}`;

  return (
    <S.Wrapper>
      <StatusBar barStyle="light-content" />
      <S.GoBack onPress={navigation.goBack} testID="go-back">
        <Icon name="back" width={46} height={46} />
      </S.GoBack>
      <S.Content>
        <S.VisitCount>{params?.visitCount}</S.VisitCount>
        <S.Label>{label}</S.Label>
      </S.Content>
    </S.Wrapper>
  );
}
