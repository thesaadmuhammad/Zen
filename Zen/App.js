import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import AnxityLevelScreen from './src/screen/AnxityLevelScreen';
import ActivityScreen from './src/screen/ActivityScreen';
import RewardScreen from './src/screen/RewardScreen';
import ConfirmScreen from './src/screen/ConfirmScreen';

// 

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AnxityLevelScreen" component={AnxityLevelScreen} />
        <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
        <Stack.Screen name="RewardScreen" component={RewardScreen} />
        <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
