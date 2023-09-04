
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from "../screens/login";
import Register from '../screens/register';
import Landing from '../screens/landing';
import RegisterProfile from '../screens/registerProfile';
import SelectChild from '../screens/selectChild';
import Assessment from '../screens/assessment';
import DataChild from '../screens/dataChild';
import AddChildData from '../screens/addChildData';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterProfile" component={RegisterProfile} />
    </Stack.Navigator>
  );
}

const HomeNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Landing" component={Landing} options={{ title: 'Home', headerLeft: null }} />
      <Tab.Screen name="SelectChild" component={DataChild} options={{}} />
      <Tab.Screen name="Assessment" component={Assessment} options={{}} />
    </Tab.Navigator>
  );
}

export { AuthNavigator, HomeNavigator };