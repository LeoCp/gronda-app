import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RootSiblingParent } from 'react-native-root-siblings';

import { Navigation } from '@navigation/index';
import { ThemeProvider } from 'styled-components';
import { theme } from '@utils/theme';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RootSiblingParent>
          <Navigation />
        </RootSiblingParent>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
