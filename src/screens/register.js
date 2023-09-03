import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import AuthContainer from '../components/authcontainer'
import { globalStyles } from '../styles/global';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const errorHandling = () => {
    Alert.alert(
      'Invalid Confirm Password', 'Password is not the same as confirm password. Please try again!', [
      {
        text: 'Try Again',
        style: 'cancel',
      },
    ]);
  }

  const goToLogin = () => {
    navigation.navigate('Auth', { screen: 'Login' });
  }

  const next = () => {
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
      if ((confirmPassword != password) || !password || !confirmPassword) {
        errorHandling();
      } else {
        navigation.navigate('Auth', { screen: 'RegisterProfile', params: {
          email, password
        } });
      }
    }
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <Image
        style={styles.logoImage}
        source={require("../../assets/Logo.png")}
      />
      <AuthContainer>
        <Text style={globalStyles.tittleCard}>SIGN UP</Text>
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
        <Text>Confirm Password</Text>
        <TextInput
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry
          style={globalStyles.input}
        />

        <TouchableOpacity onPress={next} style={{ backgroundColor: '#009092', padding: 10, borderRadius: 8, marginTop:8 }}>
          <Text style={{ color: '#fff', textAlign: "center", fontWeight: "bold" }}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToLogin} style={styles.google}>
          <Text onPress={goToLogin} style={{ textAlign: "center", fontSize: 12 }}>ALREADY HAVE AN ACCOUNT?</Text>
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
    marginTop:10
  },
  logoImage: {
    height: 150,
    width: 150,
  },
});

export default Register;
