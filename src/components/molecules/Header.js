import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../atoms'
import { colors, fonts } from '../../utils'

const Header = ({ onPress, title }) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap height={24} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  }
})
