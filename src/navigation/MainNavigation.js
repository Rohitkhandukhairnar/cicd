import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DemoScreen from '../screens/DemoScreen';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="Demo">
      <Stack.Screen
        name="Demo"
        component={DemoScreen}
        options={{title: 'Demo'}}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
