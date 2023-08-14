import React from 'react';

import * as S from './styles';

export function Banner() {
  return (
    <S.Wrapper>
      <S.BannerImage>
        <S.BannerContent>
          <S.Label>NEW</S.Label>
          <S.Title>{'Fish preparation like\na star chef'}</S.Title>
          <S.Description>With Rolf Fliegauf</S.Description>
        </S.BannerContent>
      </S.BannerImage>
      <S.SectionTitle>Creation for you</S.SectionTitle>
    </S.Wrapper>
  );
}
