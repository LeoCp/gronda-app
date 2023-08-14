import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import * as hook from '@screens/home/creations/hooks/creations';
import { Creations } from '@screens/home/creations';
import { renderWithTheme } from '@utils/test-helper';

const data = [
  {
    id: 2,
    category_id: 3,
    title: 'Test 2',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
  },
];

describe('Creations Component', () => {
  const refetchMock = jest.fn();

  const useCreationsSpy = jest.spyOn(hook, 'useCreations');

  it('Should call refetch when when pressing try again button', () => {
    // @ts-ignore
    useCreationsSpy.mockReturnValue({
      isLoading: false,
      error: new Error('error'),
      refetch: refetchMock,
      data: [],
    });

    const { getByTestId } = renderWithTheme(<Creations />);

    const tryAgain = getByTestId('try-again');
    fireEvent.press(tryAgain);

    expect(refetchMock).toBeCalled();
  });

  it('Should render the loading when the isLoading field is true.', () => {
    // @ts-ignore
    useCreationsSpy.mockReturnValue({
      isLoading: true,
      error: null,
      refetch: refetchMock,
      data: [],
    });

    const { queryByTestId } = renderWithTheme(<Creations />);

    const loading = queryByTestId('loading');

    expect(loading).not.toBeNull();
  });

  it('Should render creation list.', () => {
    // @ts-ignore
    useCreationsSpy.mockReturnValue({
      isLoading: false,
      error: null,
      refetch: refetchMock,
      data,
    });

    const { queryByTestId } = renderWithTheme(<Creations />);
    const creationList = queryByTestId('creations');

    expect(creationList).not.toBeNull();
  });
});
