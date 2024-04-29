import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown: false
      }} />

      <Stack.Screen name='welcome/WelcomeScreen' options={{
        headerShown: false
      }} />

      <Stack.Screen name='authentication/index' options={{
        headerShown: false
      }} />

      <Stack.Screen name='dashboard/index' options={{
        headerShown: false
      }} />
    </Stack>
  )
}

export default _layout