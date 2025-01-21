import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ListDoctor } from '../components'
import { colors, fonts } from '../utils'
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../assets'

const MessagesScreen = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexande Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...'
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Nairobi Putri hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...'
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...'
    },
  ])
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <ListDoctor key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc} />
          )
        })}
      </View>
    </View>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
})
