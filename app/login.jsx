import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { ImagesAssets } from "@/constants/ImageAssets";
import React, { useState } from "react";
import { theme } from '@/constants/theme';
import { useRouter } from "expo-router";
import AuthInputBox from "@/components/Auth/AuthInputBox";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/common/Button";
import { sendToast } from "@/utils/SendToast";

const LoginScreen = () => {
  const router = useRouter()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleOnSignin = () => {
    if(!username) {
      sendToast("Please enter your username")
    } else if(!password) {
      sendToast("Please enter your password")
    } else if(username !== "admin" || password !== "admin@123") {
      sendToast("Invalid username or password!")
    } else {
      router.push('(tabs)')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={ImagesAssets.authBackground} style={styles.authBackground} />

      <AuthToolbar />
      
      <Text style={styles.heading}>ApnaBudget</Text>
      <Text style={styles.subHeading}>Sign In your Account</Text>

      <View style={styles.signinFormWrapper}>
        <AuthInputBox value={username} setValue={setUsername} isPassword={false} iconName={'person-outline'} inputPlaceholder={'Username'} />
        <AuthInputBox value={password} setValue={setPassword} isPassword={true} iconName={'lock-closed-outline'} inputPlaceholder={'Password'} />

        <Pressable style={styles.forgotPasswordWrapper}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </Pressable>
      </View>

      <Button onPress={handleOnSignin} customButton={styles.loginButton} customButtonText={styles.loginButtonText} placeholder={'Sign in'} />

      <View style={styles.authButtonsContainer}>
        <Pressable style={[styles.authButton, styles.googleAuthButton]}>
          <Image resizeMode="contain" source={ImagesAssets.googleLogo} style={styles.authIcons} />
          <Text style={styles.authButtonText }>Signin with Google</Text>
        </Pressable>

        <Pressable style={styles.authButton}>
          <Image resizeMode="contain" source={ImagesAssets.appleLogo} style={styles.authIcons} />
          <Text style={styles.authButtonText}>Signin with Apple</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(10),
    alignItems: 'center',
  },

  authBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: theme.width,
    height: theme.height,
  },

  heading: {
    fontFamily: theme.fonts.bold,
    fontSize: moderateScale(42),
    color: theme.colors.white,
    marginTop: moderateScale(30),
  },

  subHeading: {
    fontSize: moderateScale(14),
    color: theme.colors.black,
    fontFamily: theme.fonts.medium,
    marginTop: moderateScale(110),
  },

  signinFormWrapper: {
    width: '100%',
    marginTop: moderateScale(24),
    gap: moderateScale(12),
  },

  forgotPasswordWrapper: {
    alignSelf: 'flex-end',
  },

  forgotPasswordText: {
    fontSize: moderateScale(14),
    color: theme.colors.primaryColor,
  },

  loginButton: {
    width: '100%',
    marginTop: moderateScale(24),
    backgroundColor: theme.colors.primaryColor,
  },

  loginButtonText: {
    color: theme.colors.white,
  },
  
  authButtonsContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: moderateScale(40),
  },

  authButton: {
    width: '100%',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(8),
    marginTop: verticalScale(15),
    borderColor: theme.colors.borderColor,
    borderWidth: moderateScale(1),
    borderRadius: 8,
    backgroundColor: theme.colors.white,
  },

  authButtonText: {
    fontSize: moderateScale(13),
    fontFamily: theme.fonts.regular,
  },

  authIcons: {
    width: moderateScale(28),
    height: moderateScale(28),
    marginHorizontal: moderateScale(10),
  },
});