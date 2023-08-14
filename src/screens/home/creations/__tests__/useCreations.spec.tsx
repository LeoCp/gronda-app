import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react-native';
import * as navigation from '@react-navigation/native';
import { CreationVisitsStorage } from '@storage/creation-visits';

import { useCreations } from '@screens/home/creations/hooks/creations';
import { Routes } from '@navigation/types/routes';
import { renderWithTheme } from '@utils/test';

const mockVisitCount = 7;
const mockNavigate = jest.fn();

const data = {
  item: {
    id: 1,
    category_id: 1,
    title: 'Test 1',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
  },
};

jest.mock('react-query', () => ({
  useQuery: jest.fn().mockReturnValue({
    data: [],
    isLoading: false,
    error: false,
    refresh: jest.fn(),
  }),
}));

describe('useCreations hook', () => {
  const increaseVisitCountMock = jest
    .spyOn(CreationVisitsStorage.prototype, 'increaseVisitCount')
    .mockReturnValue(mockVisitCount);

  jest
    .spyOn(navigation, 'useNavigation')
    .mockReturnValue({ navigate: mockNavigate });

  it('Should pass the id correctly when call increaseVisitCount', () => {
    const { result } = renderHook(() => useCreations());

    const { getByTestId } = renderWithTheme(
      result.current.renderCreationItem(data),
    );

    const creationItem = getByTestId('creation-item');
    fireEvent.press(creationItem);

    expect(increaseVisitCountMock).toBeCalledWith(data.item.id);
  });

  it('Should navigate to creation screen passing visitCount', () => {
    const { result } = renderHook(() => useCreations());

    const { getByTestId } = renderWithTheme(
      result.current.renderCreationItem(data),
    );

    const creationItem = getByTestId('creation-item');
    fireEvent.press(creationItem);

    expect(mockNavigate).toBeCalledWith(Routes.Creation, {
      visitCount: mockVisitCount,
    });
  });
});
