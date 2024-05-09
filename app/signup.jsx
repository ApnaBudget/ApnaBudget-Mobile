import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { ImagesAssets } from "@/constants/ImageAssets";
import React, { useState } from "react";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import AuthInputBox from "@/components/Auth/AuthInputBox";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import { moderateScale, verticalScale } from "react-native-size-matters";
import Button from "@/components/common/Button";
import { sendToast } from "@/utils/SendToast";
import globalStyle from "../constants/globalStyle";

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
    <View style={globalStyle.container}>
      <Image
        source={ImagesAssets.authBackground}
        style={styles.authBackground}
      />

      <AuthToolbar />

      <Text style={globalStyle.companyHeading}>ApnaBudget</Text>
      <Text style={[globalStyle.darkSubHeading, styles.subHeading]}>
        Sign up your Account
      </Text>

      <View style={styles.SignupFormWrapper}>
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

        <Pressable style={styles.termConditionWrapper}>
          <Text style={styles.termConditionText}>
            I agree to the Terms and Conditions
          </Text>
        </Pressable>
      </View>

      <Button
        onPress={handleOnSignup}
        customButton={styles.SignupButton}
        customButtonText={styles.SignupButtonText}
        placeholder={"Sign up"}
      />

      <View style={styles.authButtonsContainer}>
        <Pressable style={[styles.authButton, styles.googleAuthButton]}>
          <Image
            resizeMode="contain"
            source={ImagesAssets.googleLogo}
            style={styles.authIcons}
          />
          <Text style={styles.authButtonText}>Google SignUp</Text>
        </Pressable>

        <Pressable style={styles.authButton}>
          <Image
            resizeMode="contain"
            source={ImagesAssets.appleLogo}
            style={styles.authIcons}
          />
          <Text style={styles.authButtonText}>Apple SignUp</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  authBackground: {
    position: "absolute",
    left: 0,
    top: -5,
    width: theme.width,
    height: theme.height,
  },
  SignupFormWrapper: {
    width: "100%",
    marginTop: moderateScale(24),
    gap: moderateScale(12),
  },
  subHeading: {
    marginTop: moderateScale(80),
  },
  termConditionWrapper: {
    alignSelf: "flex-start",
  },
  termConditionText: {
    fontSize: moderateScale(14),
    color: theme.colors.primaryColor,
  },
  authButtonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: moderateScale(20),
  },

  authButton: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
