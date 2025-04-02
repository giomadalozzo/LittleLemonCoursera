import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                All rights reserved by Little Lemon, 2025
            </Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9972',
        marginBottom: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        fontStyle: 'italic'
    }
  });