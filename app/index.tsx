import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuItems from "./MenuItems";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import LittleLemonHeader from '../components/LittleLemonHeader';
import LittleLemonFooter from '../components/LittleLemonFooter';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  footerContainer: {
    backgroundColor: '#333333'
  }
});