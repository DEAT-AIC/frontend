import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import {API_BASE_URL} from "@env"

const Card = ({name, age, gender}) => {
    return (
      <View style={styles.card}>
        <Text style={
            {fontWeight: 'bold',}
        }>{name}</Text>
        <Text>{age}</Text>
        <Text>{gender}</Text>
      </View>
    );
};

const DataAnakScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
    <Card name={"Sultan Fahrezy"} age={20} gender={"Laki-laki"}>

    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'start',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 50,
    backgroundColor: 'red'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'column',
    paddingHorizontal: 50,
    paddingVertical: 10,
    alignItems: 'flex-start',
    boxShadow: '1px 2px 9px #FFFFF',
    backgroundColor: 'white'
  }
});

export default DataAnakScreen;
