import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILGetStarted, ILLogo } from '../assets/illustration'
import { Button, Gap } from '../components'

const GetStarted = () => {
  return (
    <ImageBackground imageStyle={styles.image} source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    opacity: 0.8,
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-Semibold'
  }
})
