import React from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Landing = ({ navigation }) => {

  const goToRegister = () => {
    navigation.navigate("Register");
  }

  const goToLogin = () => {
    navigation.navigate("Login");
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
            onPress={goToLogin}
            title={"Login"}
          />
        </View>
        <View style={styles.container1}>
          <Button
            onPress={goToRegister}
            title={"Register"}
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