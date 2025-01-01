import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ILLogo } from '../assets/illustration'
import { colors } from '../utils'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 3000);
  }, [])
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
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Semibold',
    color: colors.text.primary,
    marginTop: 20
  }
})
