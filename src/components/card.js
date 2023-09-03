import React,  { Component } from "react";
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
        height: 492,
        justifyContent:"center",
        alignItems: "center"
      },
      cardContent: {
        margin: 30
      },
})

// class Card extends Component {  
//     render() {  
//       return (  
//           <View style={{alignItems: 'center'}}>  
//             <Text>Hello!</Text>  
//           </View>  
//       );  
//     }  
//   } 

// export default Card;

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text> Test </Text>
                {/* <Text> {props.name} </Text>
                <Text> {props.age} </Text>
                <Text> {props.gender} </Text> */}
            </View>
        </View>
    )
}