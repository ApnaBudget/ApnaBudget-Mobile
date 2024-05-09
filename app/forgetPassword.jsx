import React, { useState } from "react";
import Button from "@/components/common/Button";
import { ImagesAssets } from "@/constants/ImageAssets";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import globalStyle from "../constants/globalStyle";
import { useRouter } from "expo-router";

const ForgetPasswordScreen = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };
  const handleVerify = () => {
    router.push("confirmPassword");
  };

  return (
    <View style={globalStyle.container}>
      <AuthToolbar />
      <Text style={globalStyle.mainHeading}>Forgot Password</Text>
      <Text style={globalStyle.subHeading}>
        Select which method should we use to reset your password. Make sure the
        data is correct to minimize process errors.
      </Text>
      <Image source={ImagesAssets.reset} style={styles.image} />
      <Pressable
        style={[
          styles.optionContainer,
          selectedOption === "sms" && styles.selectedOption,
        ]}
        onPress={() => handleOptionPress("sms")}
      >
        <View style={styles.iconContainer}>
          <Image source={ImagesAssets.msg} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.optionHeading}>Email To</Text>
          <Text style={styles.optionDetail}>email@example.com</Text>
        </View>
      </Pressable>
      <Pressable
        style={[
          styles.optionContainer,
          selectedOption === "email" && styles.selectedOption,
        ]}
        onPress={() => handleOptionPress("email")}
      >
        <View style={styles.iconContainer}>
          <Image source={ImagesAssets.mail} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.optionHeading}>SMS To</Text>
          <Text style={styles.optionDetail}>123-456-7890</Text>
        </View>
      </Pressable>
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
