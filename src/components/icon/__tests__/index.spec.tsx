import React from 'react';
import { render } from '@testing-library/react-native';

import { Icon } from '@components/icon';

describe('Icon Component', () => {
  it('Should match snapshot', () => {
    const { toJSON } = render(<Icon name="logo" height={10} width={10} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
