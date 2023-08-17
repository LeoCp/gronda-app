import * as mmkv from 'react-native-mmkv';
import { CreationVisitsStorage } from '@storage/creation-visits';

jest.mock('react-native-mmkv');

describe('CreationVisits storage', () => {
  const mmkvSpy = jest.spyOn(mmkv, 'MMKV');

  const setMock = jest.fn();

  it.each([null, undefined, '', '{}', '{1:}'])(
    'Should return an {} when getString returns %p',
    value => {
      mmkvSpy.mockReturnValue({
        getString: () => value,
      } as any);

      const creationVisits = new CreationVisitsStorage();
      expect(creationVisits.creationVisits).toEqual({});
    },
  );

  it('Should return parsed object correctly', () => {
    // @ts-ignore
    mmkvSpy.mockReturnValue({
      getString: () => '{"12":3}',
    });

    const creationVisitsStore = new CreationVisitsStorage();

    expect(creationVisitsStore.creationVisits).toEqual({ 12: 3 });
  });

  it('Should return the count correctly when there are no visits.', () => {
    // @ts-ignore
    mmkvSpy.mockReturnValue({
      getString: () => '{}',
      set: setMock,
    });

    const creationVisitsStore = new CreationVisitsStorage();

    creationVisitsStore.increaseVisitCount(2);

    expect(setMock).toBeCalledWith('CREATION_VISITS', '{"2":1}');
  });

  it('Should increment correctly when there is a visit.', () => {
    // @ts-ignore
    mmkvSpy.mockReturnValue({
      getString: () => '{"3":1}',
      set: setMock,
    });

    const creationVisitsStore = new CreationVisitsStorage();

    creationVisitsStore.increaseVisitCount(3);

    expect(setMock).toBeCalledWith('CREATION_VISITS', '{"3":2}');
  });

  it('increaseVisitCount should return the correct count.', () => {
    // @ts-ignore
    mmkvSpy.mockReturnValue({
      getString: () => '{"5":2}',
      set: setMock,
    });

    const creationVisitsStore = new CreationVisitsStorage();

    const data = creationVisitsStore.increaseVisitCount(5);

    expect(data).toBe(3);
  });

  it.each([{}, [], undefined, null, ''])(
    'Should return an error if the value passed to function increaseVisitCount is %p.',
    value => {
      const creationVisitsStore = new CreationVisitsStorage();

      expect(() => {
        // @ts-ignore
        creationVisitsStore.increaseVisitCount(value);
      }).toThrow(Error);
    },
  );
});
