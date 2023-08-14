import React from 'react';

import { Home } from '@screens/home';
import { renderWithTheme } from '@utils/test';

jest.mock('@screens/home/creations/hooks/creations', () => ({
  useCreations: jest.fn().mockReturnValue({
    isLoading: false,
    error: false,
    refetch: jest.fn(),
    data: [],
  }),
}));

describe('Home', () => {
  it('Should match snapshot', () => {
    const { toJSON } = renderWithTheme(<Home />);
    expect(toJSON()).toMatchSnapshot();
  });
});
