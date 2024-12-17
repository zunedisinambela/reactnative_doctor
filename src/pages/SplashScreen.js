import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogo } from '../assets/illustration'

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Semibold',
    color: '#112340',
    marginTop: 20
  }
})
