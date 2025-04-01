import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ScrollView indicatorStyle={'white'} style={styles.container}>
            <Text
                style={styles.titleText}>
                Welcome to Little Lemon
            </Text>
            <Text
                style={styles.text}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear your experience with us!
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    titleText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    text: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    }
  });