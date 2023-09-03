import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from "@env"
import AuthContainer from '../components/authcontainer'
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterProfile = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const { password, email } = route.params;

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
    navigation.navigate("Login");
  }

  return (
    <View style={globalStyles.container}>
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
        <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: '#009092', padding: 10, borderRadius: 8 }}>
          <Text style={{ color: '#fff', textAlign:"center", fontWeight:"bold" }}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={registerGoogleAccount} style={styles.google}>
          <Image 
            style={styles.buttonImage}
            source={require("../../assets/google.png")}
          />
          <Text style={{ textAlign:"center" }}>Sign up using Google</Text>
        </TouchableOpacity>
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
    padding: 10, 
    borderRadius: 8,
  },
  buttonImage: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
});

export default RegisterProfile;
