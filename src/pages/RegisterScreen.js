import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Input } from '../components'
import { colors } from '../utils'

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" onPress={() => navigation.navigate('UploadPhotoScreen')}/>
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    padding: 40,
    paddingTop: 0,
  }
})
