import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const DashboardScreen = ({ onLayout }) => {
  return (
    <SafeAreaView onLayout={onLayout}>
      <Text>DashboardScreen</Text>
    </SafeAreaView>
  )
}

export default DashboardScreen