import React, { useState } from "react";
import Button from "@/components/common/Button";
import { ImagesAssets } from "@/constants/ImageAssets";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { theme } from "@/constants/theme";
import AuthToolbar from "@/components/Auth/AuthToolbar";

const ForgetPasswordScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };
  const handleVerify = () => {
    // Logic to resend OTP
  };

  return (
    <View style={styles.container}>
      <AuthToolbar />
      <Text style={styles.heading}>Forgot Password</Text>
      <Text style={styles.subHeading}>
        Select which method should we use to reset your password. Make sure the
        data is correct to minimize process errors.
      </Text>
      <Image source={ImagesAssets.reset} style={styles.image} />
      <TouchableOpacity
        style={[
          styles.optionContainer,
          selectedOption === 'sms' && styles.selectedOption,
        ]}
        onPress={() => handleOptionPress('sms')}
      >
        <View style={styles.iconContainer}>
          <Image source={ImagesAssets.msg} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.optionHeading}>Email To</Text>
          <Text style={styles.optionDetail}>email@example.com</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionContainer,
          selectedOption === 'email' && styles.selectedOption,
        ]}
        onPress={() => handleOptionPress('email')}
      >
        <View style={styles.iconContainer}>
          <Image source={ImagesAssets.mail} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.optionHeading}>SMS To</Text>
          <Text style={styles.optionDetail}>123-456-7890</Text>
        </View>
      </TouchableOpacity>
      <Button
        onPress={handleVerify}
        customButton={styles.loginButton}
        customButtonText={styles.loginButtonText}
        placeholder={"Continue"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  loginButton: {
    width: "100%",
    marginTop: moderateScale(24),
    backgroundColor: theme.colors.primaryColor,
  },

  loginButtonText: {
    color: theme.colors.white,
  },
  heading: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
  },
  subHeading: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    color:'grey'
  },
  image: {
    alignSelf: "center",
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#f2f2f2",
    borderRadius: 10,
  },
  selectedOption: {
    borderColor: '#9E5FE6',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    height: 35,
    width: 35,
  },
  optionHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
  },
  optionDetail: {
    fontSize: 16,
    color: "#888",
  },
  continueButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ForgetPasswordScreen;
