import React from "react";
import { View, StyleSheet, Image } from "react-native";

export const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        elevation: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 10, height: -20 },
        shadowColor: "#009092",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        width: 267,
        height: 500,
        justifyContent:"center",
        alignItems: "center"
      },
      cardContent: {
        margin: 30
      },
      buttonImage: {
        height: 100,
        width: 100,
        resizeMode: 'stretch',
      },
  });

export default function AuthContainer(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
}