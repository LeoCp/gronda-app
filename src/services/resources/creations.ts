import { Api } from '@services/api';

import { TCreation } from '@models/creation';

export async function getCreations(): Promise<TCreation[]> {
  const { data } = await Api.get('/creations');

  return data;
}
