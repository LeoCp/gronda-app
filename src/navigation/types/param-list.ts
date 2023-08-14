import { Routes } from '@navigation/types/routes';

export type TRootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.Creation]: { visitCount: number };
};
