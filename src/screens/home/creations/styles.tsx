import React from 'react';
import styled from 'styled-components/native';
import { FlashListProps, FlashList } from '@shopify/flash-list';

import { Banner } from '@screens/home/creations/components/banner';
import { TCreation } from '@models/creation';

export const LoadingWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  testID: 'loading',
  color: theme.color.primary,
}))``;

export const Creations = styled(FlashList).attrs(props => ({
  ...props,
  numColumns: 2,
  estimatedItemSize: 200,
  ListHeaderComponent: <Banner />,
  contentContainerStyle: { paddingHorizontal: 8 },
  testID: 'creations',
}))<FlashListProps<TCreation>>``;
