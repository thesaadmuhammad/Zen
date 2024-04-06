import React from 'react';
import SakhaHomeScreen from './src/screens/SakhaHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SakhaScreen from './src/screens/SakhaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide header for all screens
        }}>
        <Stack.Screen name="Sakha" component={SakhaScreen} />
        <Stack.Screen name="SakhaHome" component={SakhaHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
