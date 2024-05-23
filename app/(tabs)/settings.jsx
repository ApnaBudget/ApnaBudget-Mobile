import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../components/common/Button'
import { logout } from '../../utils/AuthHelper'

const settings = () => {

  const onLogout = () => {
    logout("login");
  }

  return (
    <SafeAreaView>
      <Text>settings</Text>
      <Button onPress={onLogout} placeholder="Logout" />
    </SafeAreaView>
  )
}

export default settings

const styles = StyleSheet.create({})