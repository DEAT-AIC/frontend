import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import AuthContainer from "../components/authcontainer";
import DatePicker from 'react-native-date-picker';
import { Picker } from "@react-native-picker/picker";
import { API_BASE_URL } from "@env"
import axios from "axios";

const AddChildData = ({ navigation }) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const handleConfirm = async () => {
        // Implement voice recording functionality here
        console.log('data confirmed');
        const base = API_BASE_URL
        const serverUrl = `${base}/api/anak`;
        const requestData = {
            "nama":"Siti",
            "tanggalLahir":"2002-08-08",
            "jenisKelamin":"PEREMPUAN"
        }
        const response = await axios.post(serverUrl, requestData);
        const data = response.data;
        console.log(data);
        navigation.navigate('Home', { screen: 'SelectChild' });
    }


    return (
        <SafeAreaView style={globalStyles.container}>
            <AuthContainer>
                <Text style={globalStyles.tittleCard}>Add New Child</Text>
                <Text>{'\n'}</Text>
                <Text style={{paddingBottom:8}}>Name</Text>
                <TextInput
                    placeholder="Full Name" // Change placeholder
                    onChangeText={(text) => setName(text)} // Change state update function
                    value={name} // Change state variable
                    style={globalStyles.input}
                />
                <Text style={{paddingBottom:8}}>Date of Birth</Text>
                <TouchableOpacity onPress={() => {setOpen(true); console.log("Click")}}>
                    <Text
                        value={date} // Change state variable
                        style={[globalStyles.input, {paddingTop: 10}]}
                    >{date? "Select Date of Birth" : date}</Text>
                    <DatePicker
                        modal={true}
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </TouchableOpacity>
                <Text style={{paddingBottom:8}}>Gender</Text>
                <TouchableOpacity style={{ borderRadius: 8, borderWidth: 0.8, height:40, justifyContent:"center", marginBottom:20 }}>
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
                        <Picker.Item label="Male" value="PRIA" />
                        <Picker.Item label="Female" value="PEREMPUAN" />
                    </Picker>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ backgroundColor: '#009092', padding: 10, borderRadius: 8, marginTop: 8 }}>
                    <Text style={{ color: '#fff', textAlign: "center", fontWeight: "bold" }}>CONFRIM</Text>
                </TouchableOpacity>
            </AuthContainer>
        </SafeAreaView>
    );
}

export default AddChildData;