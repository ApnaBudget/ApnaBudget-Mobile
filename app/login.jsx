import { View, Text, Image, Pressable, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import { ImagesAssets } from "@/constants/ImageAssets";
import React, { useState } from "react";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import AuthInputBox from "@/components/Auth/AuthInputBox";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import Button from "@/components/common/Button";
import { sendToast } from "@/utils/SendToast";
import GlobalStyle from "../constants/GlobalStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { hpToDP, wpToDP } from "../utils/ResponsiveScreen";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleOnLoginin = () => {
    if (!username) {
      sendToast("Please enter your username");
    } else if (!password) {
      sendToast("Please enter your password");
    } else if (username !== "admin" || password !== "admin@123") {
      sendToast("Invalid username or password!");
    } else {
      router.push("(tabs)")
    }
  };

  const handleOnForgetPassword = () => {
    router.push("forgetPassword");
  };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.black}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}} bounces={false}>
          <View style={GlobalStyle.container}>
            <StatusBar style="light" />
            <AuthToolbar />
            
            <View style={styles.authBackground}>
              <Text style={styles.heading}>ApnaBudget</Text>
            </View>

            <View style={styles.loginFormWrapper}>
              <Text style={styles.subHeading}>
                Login your Account
              </Text>

              <AuthInputBox
                value={username}
                setValue={setUsername}
                iconName={"mail-outline"}
                inputPlaceholder={"Email or Phone number"}
              />

              <AuthInputBox
                value={password}
                setValue={setPassword}
                isPassword={true}
                iconName={"lock-closed-outline"}
                inputPlaceholder={"Password"}
              />

              <Pressable onPress={handleOnForgetPassword} style={styles.forgotPasswordWrapper}>
                <Text style={styles.forgotPasswordText}>
                  Forgot Password
                </Text>
              </Pressable>
            </View>

            <Button
              onPress={handleOnLoginin}
              customButtonStyle={styles.loginButton}
              placeholder={"Login"}
            />

            <View style={styles.authSeparator}>
              <View style={styles.authSeparatorLine} />
              <View>
                <Text style={styles.authSeparatorText}>OR</Text>
              </View>
              <View style={styles.authSeparatorLine} />
            </View>

            <View style={styles.authButtonsContainer}>
              <Pressable style={[styles.authButton, styles.googleAuthButton]}>
                <Image
                  resizeMode="contain"
                  source={ImagesAssets.googleLogo}
                  style={styles.authIcons}
                />
              </Pressable>

              <Pressable style={styles.authButton}>
                <Image
                  resizeMode="contain"
                  source={ImagesAssets.appleLogo}
                  style={styles.authIcons}
                />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen

const styles = StyleSheet.create({
  authBackground: {
    position: "absolute",
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.width,
    height: hpToDP(28),
    backgroundColor: theme.colors.primaryColor,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },

  heading: {
    fontFamily: 'bold',
    alignSelf:'center',
    fontSize: wpToDP(11.5),
    color: theme.colors.white,
    marginTop: hpToDP(7),
  },

  subHeading: {
    fontSize: wpToDP(5),
    color: theme.colors.black,
    alignSelf:'center',
    fontFamily: 'medium',
    marginBottom: hpToDP(2),
  },

  loginFormWrapper: {
    width: "100%",
    gap: hpToDP(1.75),
    marginTop: hpToDP(32),
  },

  forgotPasswordWrapper: {
    alignSelf: "flex-end",
  },

  forgotPasswordText: {
    fontSize: wpToDP(3.5),
    color: theme.colors.primaryColor,
    fontFamily: 'semibold'
  },

  loginButton: {
    marginTop: hpToDP(2.5),
  },

  authSeparator: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hpToDP(5),
  },

  authSeparatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.gray,
  },

  authSeparatorText: {
    width: wpToDP(10),
    textAlign: 'center',
    fontFamily: 'light',
    color: theme.colors.lightblack,
  },

  authButtonsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: wpToDP(2),
    marginBottom: hpToDP(2),
  },

  authButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hpToDP(1.4),
    borderColor: theme.colors.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    gap: wpToDP(1.3),
  },

  authIcons: {
    width: wpToDP(8),
    height: wpToDP(8),
  },
});
