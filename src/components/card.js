import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/global";

export const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        elevation: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 10, height: -20 },
        shadowColor: "#009092",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        width: 285,
        height: 82,
      },
      cardContent: {
        marginLeft: 10
      },
      title: {
        fontSize: 20,
        fontWeight: "500",
        paddingVertical: 5
      },
      subtitle: {
        fontSize: 12
      }
})

const Card = ({ id, name, age, gender }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => {console.log(id)}}>
            <Text style={[styles.cardContent, styles.title]}>{name}</Text>
            <Text style={[styles.cardContent, styles.subtitle]}>{age} years old</Text>
            <Text style={[styles.cardContent, styles.subtitle]}>{gender}</Text>
        </TouchableOpacity>
    )
}

export default Card;