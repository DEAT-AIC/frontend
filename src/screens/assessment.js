import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AssessmentCard from "../components/assessmentCard"
import { globalStyles } from '../styles/global';

const Assessment = () => {

    const handleRecord = () => {
        // Implement voice recording functionality here
        console.log('Start recording...');
    }

    return (
        <View style={globalStyles.container}>
            <View style={styles.contentContainer}>
                <AssessmentCard 
                    imageSource="https://storage.googleapis.com/image-data-aic/4/bag/bag0.jpeg" 
                    onRecordPress={handleRecord} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flex: 1
    },
});

export default Assessment;
