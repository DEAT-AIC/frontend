import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import {API_BASE_URL} from "@env"

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // You should replace 'YOUR_SERVER_URL' with the actual URL of your server
    const base = API_BASE_URL
    const serverUrl = `${base}/api/auth/login`;
    console.log(serverUrl);

    const requestData = {
      email: email, // Change to 'email'
      password: password,
    };

    try {
      const response = await axios.post(serverUrl, requestData);

      console.log('Response from server:', response.data);
      // Handle your login logic here based on the response from the server
    } catch (error) {
      console.error('Error:', error);
      // Handle error scenarios, including specific error codes or messages from the server
    }
  };

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

export default LoginScreen;
