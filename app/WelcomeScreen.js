import * as React from 'react';
import { useColorScheme, View, Image, KeyboardAvoidingView, Platform, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [message, onChangeMessage] = React.useState('');
    const colorScheme = useColorScheme();

    return (
        <KeyboardAvoidingView style={[styles.container, colorScheme === 'light'
            ? { backgroundColor: '#fff' }
            : { backgroundColor: '#333333' }, ]}
            behavior = { Platform.OS === 'ios' ? 'padding' : 'height' } >
        <ScrollView indicatorStyle={'white'} keyboardDismissMode='on-drag'>
            <View style={styles.headerWrapper}>
                <Image
                    style={styles.image}
                    source={require('../img/LittleLemonLogo.png')}
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Little Lemon Logo'}
                />
                <Text
                    style={[styles.titleText,
                        colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
                      ]}>
                    Little Lemon
                </Text>
            </View>
            <Text
                style={[styles.text,
                    colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
                  ]}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear your experience with us!
            </Text>
            <TextInput
                style={styles.inputBox}
                value={firstName}
                onChangeText={onChangeFirstName}
                placeholder='First Name'
            />
            <TextInput
                style={styles.inputBox}
                value={lastName}
                onChangeText={onChangeLastName}
                placeholder='Last Name'
            />
            <TextInput
                style={styles.messageBox}
                value={message}
                onChangeText={onChangeMessage}
                placeholder='Please leave feedback'
                multiline={true}
                maxLength={250}
            />
        </ScrollView>
        </KeyboardAvoidingView >
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
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#EDEFEE',
    },
    messageBox: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#EDEFEE',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
});