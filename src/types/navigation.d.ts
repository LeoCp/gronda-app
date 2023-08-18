import { TRootStackParamList } from '@navigation/types/param-list';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootStackParamList {}
  }
}
