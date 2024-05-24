import { View, Text, Image, Pressable, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import { ImagesAssets } from "@/constants/ImageAssets";
import React, { useState } from "react";
import { theme } from "@/constants/theme";
import AuthInputBox from "@/components/Auth/AuthInputBox";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import Button from "@/components/common/Button";
import GlobalStyle from "@/constants/GlobalStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { hpToDP, wpToDP } from "@/utils/ResponsiveScreen";
import { StatusBar } from "expo-status-bar";
import { signInEmail } from "@/utils/AuthHelper";
import { isValidEmail, isValidPassword } from "@/utils/AuthValidator";
import { Ionicons } from "@expo/vector-icons";
import { sendForgetPasswordLink } from "../utils/AuthHelper";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [authError, setAuthError] = useState("");

  const handleOnLoginin = () => {
    if(!isValidEmail(email) && !isValidPassword(password)) {
      setIsEmailValid(false);
      setIsPasswordValid(false);
    } else if(!isValidEmail(email)) {
      setIsEmailValid(false);
    } else if(!isValidPassword(password)) {
      setIsPasswordValid(false);
    } else {
      setIsEmailValid(true);
      setIsPasswordValid(true);
      signInEmail(email, password, setAuthError, "(tabs)");
    }
  };

  const handleOnForgetPassword = () => {
    if(!isValidEmail(email)) {
      setIsEmailValid(false);
      setAuthError("Please enter a valid email!");
    } else {
      sendForgetPasswordLink(email, setIsEmailValid, setAuthError);
    }
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
                value={email}
                setValue={setEmail}
                iconName={"person-outline"}
                inputPlaceholder={"Email"}
                setIsInputValid={setIsEmailValid}
                inputValidator={isValidEmail}
                shouldErrored={!isEmailValid}
                error="Invalid email"
              />

              <AuthInputBox
                value={password}
                setValue={setPassword}
                isPassword={true}
                iconName={"lock-closed-outline"}
                inputPlaceholder={"Password"}
                setIsInputValid={setIsPasswordValid}
                inputValidator={isValidPassword}
                shouldErrored={!isPasswordValid}
                error="Password must be 6 characters in length."
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

            {
              authError && <View style={styles.warningContainer}>
                  <Ionicons
                  name={"warning"}
                  style={styles.inputErrorIcon}
                  size={16}
                  color={theme.colors.iconColor}
                  />
                  <Text style={styles.inputError}>{authError}</Text>
              </View>
            }

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
  
  warningContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: wpToDP(5),
    marginTop: hpToDP(2.5),
  },

  inputErrorIcon: {
    marginTop: hpToDP(-1),
    marginStart: wpToDP(1),
  },

  inputError: {
      color: "darkred",
      marginTop: 0,
      fontSize: wpToDP(3.3),
      marginTop: hpToDP(-1),
      marginStart: wpToDP(1),
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
