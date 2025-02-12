import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBG } from '../assets'
import { colors, fonts } from '../utils'
import { ListHospital } from '../components'

const HospitalsScreen = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background} >
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital type="Rumah Sakit" name="Citra Buka Merdeka" address="Jln. Surya Sejahtera 20" pic={DummyHospital1} />
        <ListHospital type="Rumah Sakit Anak" name="Happy Family Kids" address="Jln. Surya Sejahtera 20" pic={DummyHospital2} />
        <ListHospital type="Rumah Sakit Jiwa" name="Tingkat Paling Atas" address="Jln. Surya Sejahtera 20" pic={DummyHospital3} />
      </View>
    </View>
  )
}

export default HospitalsScreen

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 30,
    flex: 1,
    marginTop: -30,
    paddingtop: 15,
  }
})
