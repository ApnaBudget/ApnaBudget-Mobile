import React, { useState } from "react";
import Button from "@/components/common/Button";
import { ImagesAssets } from "@/constants/ImageAssets";
import { Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import AuthInputBox from "@/components/Auth/AuthInputBox";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import GlobalStyle from "@/constants/GlobalStyle";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { hpToDP, wpToDP } from "@/utils/ResponsiveScreen";

const ForgetPasswordScreen = () => {
  const router = useRouter();
  const [contactDetail, setContactDetail] = useState();

  const handleVerify = () => {
    router.push("confirmPassword");
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.white}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}} bounces={false}>
          <SafeAreaView style={GlobalStyle.container}>
            <StatusBar style="dark" />
            <AuthToolbar isDark={true} heading={"Forgot Password"} />
            
            <Text style={styles.subHeading}>
              Select which method should we use to reset your password. Make sure the data is correct to minimize process errors.
            </Text>
            
            <Image source={ImagesAssets.forgotPasswordBackground} style={styles.backgroundImage} />
            
            <AuthInputBox
              value={contactDetail}
              setValue={setContactDetail}
              iconName={"mail-outline"}
              inputPlaceholder={"Email or Phone number"}        
            />
            
            <Button
              onPress={handleVerify}
              customButtonStyle={styles.continueButton}
              placeholder={"Continue"}
            />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subHeading: {
    marginTop: hpToDP(10),
    color: theme.colors.lightBlack,
    fontSize: wpToDP(4),
    fontFamily: 'light'
  },

  backgroundImage: {
    width: '100%',
    height: hpToDP(40),
    resizeMode: "contain",
    marginVertical: hpToDP(7),
  },

  continueButton: {
    marginVertical: hpToDP(2),
  },
});

export default ForgetPasswordScreen;
