import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from './profile-screen';
import {HomeScreen} from './home-screen';
import * as React from 'react';
const HomeStack = createNativeStackNavigator();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};
