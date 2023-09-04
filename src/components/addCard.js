import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/global";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 8,
        borderColor: "black",
        elevation: 10,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10,
        width: 285,
        height: 82,
        alignItems: "center",
        justifyContent: "center",
      },
})

const AddCard = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} >
            <FontAwesome name="plus" size={36} />
        </TouchableOpacity>
    )
}

export default AddCard;