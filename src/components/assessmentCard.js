import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { styles as authStyles } from './authcontainer';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from '../styles/global';

const AssessmentCard = ({ imageSource, onRecordPress, number, index }) => {
    const [answer, setAnswer] = useState("");
    return (
        <View style={[authStyles.card, styles.cardOverride]}>
            <View key={index} style={styles.circle}>
                <Text style={styles.circleText}>{number}</Text>
            </View>
            
            <Text style={styles.headerText}>Assessment Test</Text>
            <Text style={styles.descriptionText}>Describe this Image</Text>
            <View style={styles.contentContainer}>
                <Image source={{ uri: imageSource }} style={styles.image} />
                <Text style={styles.jawabanText}>Jawaban Kamu:</Text>
                <TextInput
                    placeholder="Your Answer" 
                    onChangeText={(text) => setAnswer(text)} 
                    value={answer} 
                    style={[globalStyles.input, styles.recordButton, {color:"#FFFFFF"}]}
                />
                <TouchableOpacity style={styles.recordButton} onPress={onRecordPress}>
                    <Text style={{color:"#FFFFFF"}}> Submit </Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.circleContainer}>
                {Array(5).fill().map((_, index) => (
                    <View key={index} style={styles.circle}>
                        <Text style={styles.circleText}>{index + 1}</Text>
                    </View>
                ))}
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    cardOverride: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 20
    },
    descriptionText: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 12,
        marginBottom: 20,
    },
    contentContainer: {
        alignItems: 'flex-start',  // Left align its children
        width: 200,  // This matches the image width
    },
    image: {
        width: 200, 
        height: 200, 
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 20
    },
    jawabanText: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    recordButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        textAlign: "center",
        padding: 10,
        backgroundColor: '#007c7d', 
        borderRadius: 10,
        width: '100%',  // This ensures it's the same width as the image
        marginBottom: 20
    },
    recordButtonText: {
        color: '#FFFFFF',
        textAlign: "center",
        flex: 1  // Push the icon to the end of the button
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#007c7d',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleText: {
        color: '#FFFFFF'
    }
});

export default AssessmentCard;
