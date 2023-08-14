import React from 'react';

import { ErrorMessage } from '@screens/home/creations/components/error-message';
import { useCreations } from '@screens/home/creations/hooks/creations';

import * as S from './styles';

export function Creations() {
  const creations = useCreations();

  if (creations.isLoading) {
    return (
      <S.LoadingWrapper>
        <S.Loading />
      </S.LoadingWrapper>
    );
  }

  if (creations.error) {
    return <ErrorMessage tryAgain={creations.refetch} />;
  }

  return (
    <S.Creations
      data={creations.data || []}
      renderItem={creations.renderCreationItem}
    />
  );
}
