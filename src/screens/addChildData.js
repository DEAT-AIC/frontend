import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import AuthContainer from "../components/authcontainer";
import DatePicker from 'react-native-date-picker';
import Select from 'react-select';
        

const AddChildData = ({ navigation }) => {
    const [name, setName] = useState('');
    const [gender, setgender] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const genderOption = [
        { value: 'Laki-laki', label: 'Laki-laki' },
        { value: 'Perempuan', label: 'Perempuan' },
    ]

    const handleConfirm = () => {
        // Implement voice recording functionality here
        console.log('data confirmed');
    }


    return (
        <SafeAreaView style={globalStyles.container}>
            <AuthContainer>
                <Text style={globalStyles.tittleCard}>Add New Child</Text>
                <Text>{'\n'}</Text>
                <Text>Name</Text>
                <TextInput
                placeholder="Full Name" // Change placeholder
                onChangeText={(text) => setName(text)} // Change state update function
                value={name} // Change state variable
                style={globalStyles.input}
                />
                <Text>Date of Birth</Text>
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <TextInput
                    placeholder="Select Date of Birth" // Change placeholder
                    value={date} // Change state variable
                    style={globalStyles.input}
                    />
                    <DatePicker
                        modal
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
                <Text>Gender</Text>
                <Select options={genderOption} placeholder="Selec Gender"/>
                <TouchableOpacity style={{ backgroundColor: '#009092', padding: 10, borderRadius: 8, marginTop:8 }}>
                    <Text style={{ color: '#fff', textAlign: "center", fontWeight: "bold" }}>CONFRIM</Text>
                </TouchableOpacity>
            </AuthContainer>
        </SafeAreaView>
    );
}

export default AddChildData;