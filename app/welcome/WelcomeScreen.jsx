import React from 'react'
import { Text, Image, Pressable, View } from 'react-native'
import { ImagesAssets } from '../../assets/images/ImageAssets'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WelcomeScreenStyles as styles } from './WelcomeScreen.styled'
import { useRouter } from 'expo-router'

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

      <View style={styles.buttonWrapper}>
        <Pressable onPress={() => router.push('authentication')} style={[styles.signupButton, styles.button]}>
          <Text style={[styles.signupButtonText, styles.buttonText]}>Sign Up</Text>
        </Pressable>
        
        <Pressable onPress={() => router.push('dashboard')} style={[styles.loginButton, styles.button]}>
          <Text style={[styles.loginButtonText, styles.buttonText]}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen