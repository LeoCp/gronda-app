import type { RouteProp } from '@react-navigation/native';
import { TRootStackParamList } from '@navigation/types/param-list';
import { Routes } from '@navigation/types/routes';

export type TCreationRouteProp = RouteProp<
  TRootStackParamList,
  Routes.Creation
>;
