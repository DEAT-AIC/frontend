import React, { useState, useEffect } from 'react';
import { HomeNavigator, AuthNavigator } from './src/routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, ActivityIndicator } from 'react-native';
import { globalStyles } from './src/styles/global';

export default function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createNativeStackNavigator();

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      console.log(value);
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  useEffect( () => {
    setTimeout(async () => {
      await _retrieveData();
      setIsLoading(false); // Set isLoading to false when data is ready
    }, 2000);
  }, [navigator])

  return (
    isLoading ? (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" color="#009092" />
      </View>
    ) : (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isLogin ? "Auth" : "Home"}>
          <Stack.Screen name="Home" component={HomeNavigator} />
          <Stack.Screen name="Auth" component={AuthNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  )
}
