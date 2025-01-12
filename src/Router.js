import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { GetStarted, LoginScreen, RegisterScreen, SplashScreen, UploadPhotoScreen, DoctorScreen, MessagesScreen, HospitalsScreen } from './pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from './components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainAppScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={DoctorScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Hospitals" component={HospitalsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainAppScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UploadPhotoScreen" component={UploadPhotoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainAppScreen" component={MainAppScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
