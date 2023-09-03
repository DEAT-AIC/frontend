
import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { auth , onAuthStateChanged   } from "../utils/firebase";
// import { useDispatch, useSelector } from 'react-redux';
// import { setLoading } from '../state-management/reducers';

import Loading_Screen from '../utils/loading';

import Login from "../screens/login";
import Register from '../screens/register';
import Landing from '../screens/landing';
import RegisterProfile from '../screens/registerProfile';
import Assessment from '../screens/assessment';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={Landing} options={{ title: 'Welcome', headerLeft:null }}/>
        <Stack.Screen name="Login" component={Login} options={{}}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterProfile" component={RegisterProfile} />
        <Stack.Screen name="Assessment" component={Assessment}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={Landing} options={{ title: 'Welcome', headerLeft: null }} />
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterProfile" component={RegisterProfile} />
    </Stack.Navigator>
  );
}

export { AuthNavigator, HomeNavigator };