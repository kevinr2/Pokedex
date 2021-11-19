import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Navigations from './src/navigations/Navigations';
import { AuthProvider } from './src/context/AuthContext'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigations />
      </AuthProvider>
    </NavigationContainer>
  );
}

