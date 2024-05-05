import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImagesAssets } from '@/constants/ImageAssets'

import { verticalScale, moderateScale } from 'react-native-size-matters'
import { theme, createRgba } from "../constants/theme"
import Button from '@/components/common/Button'

const WelcomeScreen = ({ onLayout }) => {
  const router = useRouter()

  return (
    <SafeAreaView onLayout={onLayout} style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={ImagesAssets.welcomeBackground}
        resizeMode="contain"
      />

      <Text style={styles.heading}>Know where your{"\n"}money goes</Text>
      <Text style={styles.subheading}>Track your transaction easily, with{"\n"}categories and financial report.</Text>

      <View style={styles.buttonsWrapper}>
        <Button onPress={() => router.push('signup')} customButton={styles.signupButton} customButtonText={styles.signupButtonText} placeholder={'Signup'} />
        <Button onPress={() => router.push('login')} customButton={styles.loginButton} customButtonText={styles.loginButtonText} placeholder={'Login'} />
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },

  backgroundImage: {
    width: '90%',
    height: verticalScale(300),
    position: 'absolute',
    top: verticalScale(50),
  },

  heading: {
    width: '85%',
    color: theme.colors.black,
    marginTop: verticalScale(90),
    fontSize: moderateScale(32),
    textAlign: 'center',
  },

  subheading: {
    width: '85%',
    color: theme.colors.gray,
    fontSize: moderateScale(16),
    textAlign: 'center',
    marginTop: verticalScale(12),
  },

  buttonsWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: verticalScale(50),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupButton: {
    backgroundColor: theme.colors.primaryColor,
  },

  signupButtonText: {
    color: theme.colors.white,
  },

  loginButton: {
    backgroundColor: createRgba(theme.colors.primaryColor, 0.2),
  },

  loginButtonText: {
    color: theme.colors.primaryColor,
  },
})