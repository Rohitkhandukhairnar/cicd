import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
