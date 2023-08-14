import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/home';
import { Creation } from '@screens/creation';
import { Routes } from '@navigation/types/routes';

const Stack = createNativeStackNavigator();

const SCREEN_OPTIONS = { headerShown: false };

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Creation} component={Creation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
