import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from "../components/card";
import { globalStyles } from "../styles/global";
import { API_BASE_URL } from "@env"
import { useFocusEffect } from '@react-navigation/native';

const SelectChild = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [dataExist, setDataExist] = useState(false);
    const getData = async () => {
        const header = await getHeader();
        axios.defaults.headers.common['Cookie'] = header;
        const url = `${API_BASE_URL}/api/anak`;
        await axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data.length)
            if (response.data.length != 0) setDataExist(true);
            else setDataExist(false);
        })
    }

    const getHeader = async () => {
        const jsonValue = await AsyncStorage.getItem('user')
        return jsonValue != null ? JSON.parse(jsonValue) : null
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          getData();
        });
    
        return unsubscribe;
      }, [navigation]);

    const keyExtractor = (item) => item.idAnak.toString();
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={[globalStyles.title, { padding: 10, marginTop: 30 }]}>Assessment Test</Text>
            <Text style={[globalStyles.subtitle, { padding: 10, paddingTop: 0 }]}>Who's up for an assessment today?</Text>
            {dataExist ?
                <FlatList
                    data={data}
                    keyExtractor={keyExtractor} // Use the custom keyExtractor function
                    renderItem={({ item }) => <Card id={item.idAnak} name={item.nama} age={item.umur.years} gender={item.jenisKelamin} />}
                /> :
                <Text style={[{ padding: 10, textAlign: "center" }, globalStyles.subtitle]}>You don't have children data.{"\n"} Please update your children data first!</Text>
            }
        </SafeAreaView>
    );
}

export default SelectChild;