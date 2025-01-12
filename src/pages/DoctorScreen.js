import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../components'

const DoctorScreen = () => {
  return (
    <View>
      <HomeProfile />
      <Text>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Top Rated Doctors</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  )
}

export default DoctorScreen

const styles = StyleSheet.create({})
