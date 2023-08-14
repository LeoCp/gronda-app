import { getCreations } from '@services/resources/creations';

const data = [{ id: 123 }];

jest.mock('@services/api', () => ({
  Api: {
    get: jest.fn().mockResolvedValue({ data }),
  },
}));

describe('getCreations function', () => {
  it('Should return the data correctly.', async () => {
    await expect(getCreations()).resolves.toBe(data);
  });
});
