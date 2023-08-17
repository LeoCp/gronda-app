import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react-native';
import * as navigation from '@react-navigation/native';
import { CreationVisitsStorage } from '@storage/creation-visits';

import { useCreations } from '@screens/home/creations/hooks/creations';
import { Routes } from '@navigation/types/routes';
import { renderWithTheme } from '@utils/test-helper';
import Toast from 'react-native-root-toast';
import { RenderTargetOptions } from '@shopify/flash-list';

const mockVisitCount = 7;
const mockNavigate = jest.fn();
const mockShowToast = jest.fn();

const data = {
  index: 1,
  target: RenderTargetOptions.Cell,
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

  jest.spyOn(Toast, 'show').mockImplementation(mockShowToast);

  jest
    .spyOn(navigation, 'useNavigation')
    .mockReturnValue({ navigate: mockNavigate });

  afterEach(() => {
    jest.clearAllMocks();
  });

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

  it('Should display error when the creation does not have an id.', () => {
    increaseVisitCountMock.mockReset();

    const { result } = renderHook(() => useCreations());

    const { getByTestId } = renderWithTheme(
      // @ts-ignore
      result.current.renderCreationItem({ item: {} }),
    );

    const creationItem = getByTestId('creation-item');
    fireEvent.press(creationItem);

    expect(mockShowToast).toBeCalledWith(
      'Unable to access the page. Please try again.',
    );
  });
});
