import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../assets'

const ButtonIconOnly = ({ onPress, icon }) => {
  const Icon = () => {
    if (icon === 'dark-back') {
      return <IconBackDark />
    }
    if (icon === 'back-light') {
      return <IconBackDark />
    }
    return <IconBackDark />
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  )
}

export default ButtonIconOnly

const styles = StyleSheet.create({})
