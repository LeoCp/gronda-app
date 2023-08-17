import React from 'react';
import { render } from '@testing-library/react-native';

import { theme } from '@utils/theme';
import { ThemeProvider } from 'styled-components/native';

export function renderWithTheme(children: React.ReactElement | null) {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
