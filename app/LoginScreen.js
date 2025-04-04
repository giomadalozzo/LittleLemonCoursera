import * as React from 'react';
import { ScrollView, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export default function LoginScreen() {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [logIn, setLogIn] = React.useState(false);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {logIn && <Text style={styles.headerText}>You are logged in!</Text>}
            {!logIn && (
                <>
                    <Text style={styles.regularText}>Login to continue </Text>

                    <TextInput
                        style={styles.inputBox}
                        value={email}
                        onChangeText={onChangeEmail}
                        placeholder='email'
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={styles.inputBox}
                        value={password}
                        onChangeText={onChangePassword}
                        placeholder='password'
                        secureTextEntry={true}
                        keyboardType='default'
                    />
                    <Pressable onPress={() => {
                        setLogIn(!logIn);
                    }} style={styles.button}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </Pressable>
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50,
      },
      buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
      },
});
