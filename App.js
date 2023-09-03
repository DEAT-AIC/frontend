import React, { useState, useEffect } from 'react';
import { AuthNavigator, HomeNavigator } from './src/routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const [isLogin, setIsLogin] = useState(false);

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        console.log(JSON.parse(value));
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

  useEffect(() => {
    _retrieveData();
  }, [])

  return (
    <NavigationContainer>
      {isLogin ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}
