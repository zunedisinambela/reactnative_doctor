import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { GetStarted, LoginScreen, RegisterScreen, SplashScreen } from './pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})