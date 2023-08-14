import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import * as navigation from '@react-navigation/native';

import { Creation } from '@screens/creation';
import { renderWithTheme } from '@utils/test-helper';
import { TCreationRouteProp } from '@screens/creation/types/route-prop';

describe('Creation Screen', () => {
  const useRouteSpy = jest.spyOn(navigation, 'useRoute').mockReturnValue({
    params: { visitCount: 2 },
  } as TCreationRouteProp);

  const mockGoBack = jest.fn();

  jest
    .spyOn(navigation, 'useNavigation')
    .mockReturnValue({ goBack: mockGoBack });

  it('Should call goBack', () => {
    const { getByTestId } = renderWithTheme(<Creation />);

    const goBackButton = getByTestId('go-back');

    fireEvent.press(goBackButton);

    expect(mockGoBack).toBeCalled();
  });

  it('Should return Vists when the visitCount is greater than 1.', () => {
    const { getByTestId } = renderWithTheme(<Creation />);

    const labelText = getByTestId('label');

    expect(labelText.props.children).toBe('Visits');
  });

  it('Should return Vists when the visitCount is 1.', () => {
    useRouteSpy.mockReturnValue({
      params: { visitCount: 1 },
    } as TCreationRouteProp);

    const { getByTestId } = renderWithTheme(<Creation />);

    const labelText = getByTestId('label');

    expect(labelText.props.children).toBe('Visit');
  });
});
