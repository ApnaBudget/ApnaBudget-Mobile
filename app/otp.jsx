import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Button from "@/components/common/Button";
import { moderateScale } from "react-native-size-matters";
import { theme } from "@/constants/theme";
import globalStyle from "../constants/globalStyle";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import { useRouter } from "expo-router";

const OtpScreen = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      refs[index + 1].current.focus();
    } else if (!value && index > 0) {
      refs[index - 1].current.focus();
    }
  };

  const handleResendOtp = () => {
    router.push("verified");
  };

  const handleVerifyOtp = () => {
    // Logic to verify OTP
    router.replace("verified");
  };

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  return (
    <View style={globalStyle.container}>
      <AuthToolbar />

      <Text style={globalStyle.mainHeading}>You’re almost there!</Text>
      <Text style={globalStyle.subHeading}>
        You only have to enter an OTP code we sent via Email to your registered
        email hub@academy.com
      </Text>

      <Text style={styles.otpHeading}>OTP verification code</Text>

      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={refs[index]}
            style={[
              styles.otpInput,
              focusedIndex === index && styles.otpInputFocused,
            ]}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleOtpChange(value, index)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            value={value}
          />
        ))}
      </View>

      <Pressable onPress={handleResendOtp} style={styles.resendButton}>
        <Text>If you didn't recieved a OTP ? </Text>
        <Text style={styles.resendText}>Resend OTP</Text>
      </Pressable>

      <Button onPress={handleVerifyOtp} placeholder={"Verify"} />
    </View>
  );
};

const styles = StyleSheet.create({
  otpHeading: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInputFocused: {
    backgroundColor: "#FFF3E5",
  },
  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    textAlign: "center",
    fontSize: 18,
  },
  resendButton: {
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  resendText: {
    fontSize: moderateScale(14),
    color: theme.colors.primaryColor,
  },
});

export default OtpScreen;
