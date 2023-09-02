import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import {API_BASE_URL} from "@env"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const base = API_BASE_URL
    const serverUrl = `${base}/api/auth/login`;
    console.log(serverUrl);

    const requestData = {
      email: email, 
      password: password,
    };
    console.log("Click");
    console.log(requestData);

    // try {
    //   const response = await axios.post(serverUrl, requestData);

    //   console.log('Response from server:', response.data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="Email" // Change placeholder
        onChangeText={(text) => setEmail(text)} // Change state update function
        value={email} // Change state variable
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={goToRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Login;
