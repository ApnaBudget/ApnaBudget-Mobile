import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImagesAssets } from '@/constants/ImageAssets'
import globalStyle from "../constants/globalStyle";
import { verticalScale, moderateScale } from 'react-native-size-matters'
import { theme, createRgba } from "../constants/theme"
import Button from '@/components/common/Button'

const WelcomeScreen = ({ onLayout }) => {
  const router = useRouter()

  return (
    <SafeAreaView onLayout={onLayout} style={globalStyle.container}>
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

  backgroundImage: {
    width: '100%',
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
    borderWidth:2,
   display:'flex',
   flexDirection:'column',
   position:'absolute',
   bottom:20,
   alignSelf:'center',
   width:'100%',
  },
  signupButtonText: {
    color: theme.colors.white,
  },
  loginButtonText: {
    color: theme.colors.primaryColor,
  },
})