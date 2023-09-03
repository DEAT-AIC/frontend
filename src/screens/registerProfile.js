import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from "@env"
import AuthContainer from '../components/authcontainer'
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterProfile = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const { email, password } = route.params;

  const handleRegister = async () => {
    const base = API_BASE_URL
    const serverUrl = `${base}/api/auth/register`;
    console.log(serverUrl);

    const requestData = {
      email: email,
      password: password,
      nama: name,
      phone: phone,
      address: address
    };
    console.log("Click");
    console.log(requestData);

    try {
      const response = await axios.post(serverUrl, requestData);
      const data = response.data;
      console.log(data);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (error) {
      if (error.response.data.error == "Firebase: Error (auth/email-already-in-use).") {
        Alert.alert(
          'Email Already Registered', 'Your email is arleady registered. Please try again!', [
          {
            text: 'Try Again',
            onclick: navigation.goBack(),
            style: 'cancel',
          },
        ]);
      }
    }
  };

  const registerGoogleAccount = () => {
    console.log("You click Google Account Login")
  }

  const goToLogin = () => {
    navigation.navigate('Auth', { screen: 'Login' });
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <Image
        style={styles.logoImage}
        source={require("../../assets/Logo.png")}
      />
      <AuthContainer>
        <Text style={globalStyles.tittleCard}>SIGN UP</Text>
        <Text>Name</Text>
        <TextInput
          placeholder="Name" // Change placeholder
          onChangeText={(text) => setName(text)} // Change state update function
          value={name} // Change state variable
          style={globalStyles.input}
        />
        <Text>Phone</Text>
        <TextInput
          placeholder="Phone"
          onChangeText={(text) => setPhone(text)}
          value={phone}
          style={globalStyles.input}
        />
        <Text>Address</Text>
        <TextInput
          placeholder="Address"
          onChangeText={(text) => setAddress(text)}
          value={address}
          style={globalStyles.input}
        />
        <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: '#009092', padding: 10, borderRadius: 8, marginTop:10 }}>
          <Text style={{ color: '#fff', textAlign: "center", fontWeight: "bold" }}>SIGN UP</Text>
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
    borderRadius: 8,
    marginTop:10
  },
  logoImage: {
    height: 150,
    width: 150,
  },
});

export default RegisterProfile;
