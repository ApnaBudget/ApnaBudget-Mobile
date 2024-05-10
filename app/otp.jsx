import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, KeyboardAvoidingView } from "react-native";
import Button from "@/components/common/Button";
import { theme } from "@/constants/theme";
import GlobalStyle from "../constants/GlobalStyle";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import { router } from "expo-router";
import { hpToDP, wpToDP } from "../utils/ResponsiveScreen";
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { sendToast } from "@/utils/SendToast";

const OtpScreen = () => {
  const handleResendOtp = () => {
    
  };

  const handleVerifyOtp = (otp) => {
    // Logic to verify OTP
    if(otp == 123456) {
      router.replace("verified");
    } else {
      sendToast("OTP is not valid!");
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.black}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}} bounces={false}>
          <View style={GlobalStyle.container}>
            <StatusBar style="light" />
            <AuthToolbar isDark={true} />

            <Text style={styles.heading}>
              You're almost there!
            </Text>

            <Text style={styles.subHeading}>
              You only have to enter an OTP code we sent to your registered email{" "}
              <Text style={[styles.subHeading, styles.emailText]}>tangobee@gmail.com</Text>
            </Text>

            <View style={styles.otpFormWrapper}>
              <Text style={styles.otpHeading}>OTP verification code</Text>

              <OtpInput
                numberOfDigits={6}
                focusColor={theme.colors.primaryColor}
                focusStickBlinkingDuration={500}
                onFilled={(otp) => handleVerifyOtp(otp)}
              />

              <View style={styles.resendOTPWrapper}>
                <Text style={styles.resendOTPText}>
                  If you didn't recieved a OTP?{" "}
                </Text>

                <Pressable onPress={handleResendOtp}>
                  <Text style={styles.resendOTPLink}>
                    Resend OTP
                  </Text>
                </Pressable>
              </View>
            </View>

            <Button customButtonStyle={styles.verifyButton} onPress={handleVerifyOtp} placeholder={"Verify"} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'bold',
    alignSelf:'center',
    fontSize: wpToDP(8),
    color: theme.colors.black,
    alignSelf: 'flex-start',
    marginTop: hpToDP(12),
  },

  subHeading: {
    fontSize: wpToDP(4),
    color: theme.colors.lightBlack,
    alignSelf:'flex-start',
    textAlign: 'left',
    fontFamily: 'medium',
    marginTop: hpToDP(1.25),
  },

  emailText: {
    fontFamily: 'semibold'
  },

  otpFormWrapper: {
    alignItems: 'center',
    marginVertical: hpToDP(20),
    gap: hpToDP(2.5)
  },

  otpHeading: {
    fontFamily: 'regular',
    fontSize: wpToDP(4.5),
  },

  resendOTPWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  resendOTPText: {
    fontSize: wpToDP(4),
    color: theme.colors.black,
    fontFamily: 'regular',
  },

  resendOTPLink: {
    color: theme.colors.primaryColor,
    fontFamily: 'semibold',
    fontSize: wpToDP(4.5)
  },
});

export default OtpScreen;
