import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
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

  const registerGoogleAccount = () => {
    console.log("You click Google Account Login")
  }

  const goToLogin = () => {
    navigation.navigate("Login");
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
            navigation.navigate("RegisterProfile", {
                email, password
            });
        }
    }
  }

  return (
    <View style={globalStyles.container}>
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

        <TouchableOpacity onPress={next} style={{ backgroundColor: '#009092', padding: 10, borderRadius: 8 }}>
          <Text style={{ color: '#fff', textAlign:"center", fontWeight:"bold" }}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={registerGoogleAccount} style={styles.google}>
          <Image 
            style={styles.buttonImage}
            source={require("../../assets/google.png")}
          />
          <Text style={{ textAlign:"center" }}>Signup using Google</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        <Text onPress={goToLogin} style={{ textAlign: "center", fontSize:12}}>ALREADY HAVE AN ACCOUNT?</Text>
      </AuthContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  google: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  buttonImage: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
});

export default Register;
