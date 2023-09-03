import React from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebase/firebaseConfig';
import { API_BASE_URL } from "@env"
// import RNRestart from 'react-native-restart';

const Landing = ({ navigation }) => {

  const getData = async () => {
    const header = await getHeader();
    const url = `${API_BASE_URL}/api/anak`;
    axios.defaults.headers.common['Cookie'] = header;
    await axios.get(url).then((response) => { 
      console.log(response.data);
      // navigation.navigate("Login"); 
    })
  }

  const goToRegister = () => {
    navigation.navigate('Home', { screen: 'SelectChild' });
  }

  const goToLogin = () => {
    navigation.navigate('Auth', { screen: 'Login' });
  }

  const getHeader = async () => {
    const jsonValue = await AsyncStorage.getItem('user')
    return jsonValue != null ? JSON.parse(jsonValue) : null
  }

  const logout = async () => {
    const header = await getHeader();
    console.log(header);
    const url = `${API_BASE_URL}/api/auth/logout`;
    await AsyncStorage.removeItem("user")
    const auth = FIREBASE_AUTH;
    signOut(auth);
    await axios.get(url, {
      headers: {
          Cookie: header
      }}).then((response) => { 
      console.log(response);
      // RNRestart.restart();
      navigation.navigate('Auth', { screen: 'Login' }); 
    })
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/favicon.png")}
      />
      <View style={{ width: "100%" }}>
        <View style={styles.container1}>
          <Button
            onPress={getData}
            title={"Get Data"}
          />
        </View>
        <View style={styles.container1}>
          <Button
            onPress={goToLogin}
            title={"Login"}
          />
        </View>
        <View style={styles.container1}>
          <Button
            onPress={goToRegister}
            title={"Card"}
          />
        </View>
        <View style={styles.container1}>
          <Button
            onPress={logout}
            title={"Logout"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container1: {
    width: "100%",
    paddingTop: "5%",
    paddingHorizontal: "10%",
  },
  image: {
    width: "90%",
    height: "40%",
  },
});

export default Landing;