
import React , { useState , useEffect , useContext } from 'react';
import { StyleSheet, Text, Image ,View} from 'react-native';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Assessment" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={Landing} options={{ title: 'Welcome', headerLeft:null }}/>
        <Stack.Screen name="Login" component={Login} options={{}}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterProfile" component={RegisterProfile} />
        <Stack.Screen name="Assessment" component={Assessment}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;