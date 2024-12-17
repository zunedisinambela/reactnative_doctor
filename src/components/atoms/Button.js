import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = ({ type, title }) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: 18,
    fontFamily: 'Nunito-Semibold',
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : 'white'
  })
})
