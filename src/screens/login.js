import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert, SafeAreaView } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from "@env"
import AuthContainer from '../components/authcontainer'
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [accessToken, setAccessToken] = useState('');
  // const [refreshToken, setRefreshToken] = useState('');
  // const auth = FIREBASE_AUTH;

  // const setCookie = async (accessToken, refreshToken) => {
  //   const url = `${API_BASE_URL}/api/auth/setToken`;
  //   const data = {
  //     accessToken: accessToken,
  //     refreshToken: refreshToken,
  //   };

  //   await axios
  //     .post(url, data, { withCredentials: true })
  //     .then((response) => {
  //       navigation.navigate("Landing");
  //     })
  //     .catch((e) => {
  //       errorHandling();
  //     });
  // };

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
        navigation.navigate('Home', { screen: 'Landing' });
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
              onPress: navigation.navigate('Auth', { screen: 'Register' }),
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

  // const loginGoogleAccount = async () => {
  //   const provider = new GoogleAuthProvider();
  //   await signInWithPopup(auth, provider)
  //     .then(async function (result) {
  //       const user = result.user;
  //       const accessToken = await user.getIdToken(true)
  //       const refreshToken = user.refreshToken;
  //       setAccessToken(accessToken);
  //       setRefreshToken(refreshToken);
  //       const data = {
  //         uid: user.uid,
  //         accessToken: accessToken,
  //         refreshToken: refreshToken
  //       }
  //       const jsonValue = JSON.stringify(data);
  //       await AsyncStorage.setItem('user', jsonValue);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   setCookie(accessToken, refreshToken);
  // }

  const goToRegister = () => {
    navigation.navigate('Auth', { screen: 'Register' });
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <Image
        style={styles.logoImage}
        source={require("../../assets/Logo.png")}
      />
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
        <TouchableOpacity onPress={goToRegister} style={styles.google}>
          <Text onPress={goToRegister} style={{ textAlign: "center", fontSize: 12 }}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
        
      </AuthContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  google: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderRadius: 8,
    marginTop: 10
  },
  logoImage: {
    height: 150,
    width: 150,
  },
});

export default Login;
