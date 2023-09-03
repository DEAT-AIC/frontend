import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from "@env"
import AuthContainer from '../components/authcontainer'
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errorHandling = () => {
    Alert.alert(
      'Login Failed', 'Email not Registered / Wrong Password. Please try again!', [
      {
        text: 'Try Again',
        style: 'cancel',
      },
    ]);
  }

  const handleLogin = async () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      Alert.alert(
        'Invalid Email', 'Your email is invalid. Please try again!', [
        {
          text: 'Try Again',
          style: 'cancel',
        },
      ]);
    } else {
      const base = API_BASE_URL
      const serverUrl = `${base}/api/auth/login`;

      const requestData = {
        email: email,
        password: password,
      };

      try {
        const response = await axios.post(serverUrl, requestData);
        const data = response.data;
        console.log(data);
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('user', jsonValue);
        navigation.navigate("Landing");
      } catch (error) {
        if ((error.response.data.error == "Firebase: Error (auth/wrong-password).") || (error.response.data.error == "Firebase: Error (auth/missing-password).")) {
          Alert.alert(
            'Wrong Password', 'Your password is wrong. Please try again!', [
            {
              text: 'Try Again',
              style: 'cancel',
            },
          ]);
        } else if (error.response.data.error == "Firebase: Error (auth/user-not-found).") {
          Alert.alert(
            'Email not Found', "Your email hasn't registered. Regist first or try again!", [
            {
              text: 'Register',
              onPress: navigation.navigate("Register"),
              style: 'cancel',
            },
            {
              text: 'Try Again',
              style: 'cancel',
            },
          ]);
        }
        console.log(error.response.data.error)
        // errorHandling();
      }
    }
  };

  const loginGoogleAccount = () => {
    console.log("You click Google Account Login")
  }

  const goToRegister = () => {
    navigation.navigate("Register");
  }

  return (
    <View style={globalStyles.container}>
      <AuthContainer>
        <Text style={globalStyles.tittleCard}>LOGIN</Text>
        <Text>{'\n'}</Text>
        <Text>Email</Text>
        <TextInput
          placeholder="Email" // Change placeholder
          onChangeText={(text) => setEmail(text)} // Change state update function
          value={email} // Change state variable
          style={globalStyles.input}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          style={globalStyles.input}
        />
        <Text style={globalStyles.subtittleCard}>Forgot Password?</Text>
        <Text style={{ height: 20 }}>{'\n'}</Text>
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#009092', padding: 10, borderRadius: 8 }}>
          <Text style={{ color: '#fff', textAlign: "center", fontWeight: "bold" }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={loginGoogleAccount} style={styles.google}>
          <Image
            style={styles.buttonImage}
            source={require("../../assets/google.png")}
          />
          <Text style={{ textAlign: "center" }}>Login using Google</Text>
        </TouchableOpacity>
        <Text onPress={goToRegister} style={{ textAlign: "center", fontSize: 12 }}>CREATE AN ACCOUNT</Text>
      </AuthContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  google: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderRadius: 8,
  },
  buttonImage: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
});

export default Login;
