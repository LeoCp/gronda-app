import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { ListRenderItem } from '@shopify/flash-list';
import Toast from 'react-native-root-toast';

import { TCreation } from '@models/creation';
import { Routes } from '@navigation/types/routes';
import { getCreations } from '@services/resources/creations';
import { CreationItem } from '@screens/home/creations/components/creation-item';
import { CreationVisitsStorage } from '@storage/creation-visits';

const creationVisits = new CreationVisitsStorage();

export function useCreations() {
  const navigation = useNavigation();

  const { isLoading, error, data, refetch } = useQuery<TCreation[], Error>(
    'creations',
    getCreations,
  );

  const onOpenCreation = useCallback(
    (id: number) => {
      try {
        const visitCount = creationVisits.increaseVisitCount(id);

        navigation.navigate(Routes.Creation, { visitCount });
      } catch (e) {
        Toast.show('Unable to access the page. Please try again.');
      }
    },
    [navigation],
  );

  const renderCreationItem: ListRenderItem<TCreation> = ({ item }) => (
    <CreationItem
      imageUri={item.img_url}
      title={item.title}
      onPress={() => onOpenCreation(item.id)}
    />
  );

  return {
    isLoading,
    error,
    data,
    refetch,
    renderCreationItem,
  };
}
