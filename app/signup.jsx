import { View, Text, Image, Pressable, StyleSheet, KeyboardAvoidingView, ScrollView, Linking } from "react-native";
import { ImagesAssets } from "@/constants/ImageAssets";
import React, { useState } from "react";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import AuthInputBox from "@/components/Auth/AuthInputBox";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import Button from "@/components/common/Button";
import { sendToast } from "@/utils/SendToast";
import GlobalStyle from "@/constants/GlobalStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { wpToDP, hpToDP } from "@/utils/ResponsiveScreen";
import { StatusBar } from "expo-status-bar";

const SignupScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleOnSignup = () => {
    if (!username) {
      sendToast("Please enter your username");
    } else if (!email) {
      sendToast("Please enter your email");
    } else if (!password) {
      sendToast("Please enter your password");
    } else {
      router.push("otp");
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

            <View style={styles.signupFormWrapper}>
              <Text style={styles.subHeading}>
                Sign up your Account
              </Text>

              <AuthInputBox
                value={username}
                setValue={setUsername}
                iconName={"person-outline"}
                inputPlaceholder={"Username"}
              />

              <AuthInputBox
                value={email}
                setValue={setEmail}
                iconName={"mail-outline"}
                inputPlaceholder={"Email"}
              />

              <AuthInputBox
                value={password}
                setValue={setPassword}
                isPassword={true}
                iconName={"lock-closed-outline"}
                inputPlaceholder={"Password"}
              />

              <View style={styles.termConditionWrapper}>
                <Text style={styles.termConditionText}>
                  I agree to the{" "}
                </Text>

                <Pressable onPress={() => Linking.openURL('https://apnabudget.com/terms-and-conditions')}>
                  <Text style={styles.termConditionLink}>
                    Terms and Conditions
                  </Text>
                </Pressable>
              </View>
            </View>

            <Button
              onPress={handleOnSignup}
              customButtonStyle={styles.signupButton}
              placeholder={"Sign up"}
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

export default SignupScreen;

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

  signupFormWrapper: {
    width: "100%",
    gap: hpToDP(1.75),
    marginTop: hpToDP(32),
  },

  termConditionWrapper: {
    alignSelf: "flex-start",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  termConditionText: {
    fontSize: wpToDP(3.5),
    color: theme.colors.black,
    fontFamily: 'regular',
  },

  termConditionLink: {
    color: theme.colors.primaryColor,
    fontFamily: 'semibold',
    fontSize: wpToDP(3.5)
  },

  signupButton: {
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
