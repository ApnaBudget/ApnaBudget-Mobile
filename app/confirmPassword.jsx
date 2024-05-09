import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "@/components/common/Button";
import { ImagesAssets } from "@/constants/ImageAssets";
import { theme } from "@/constants/theme";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import { moderateScale } from "react-native-size-matters";
import globalStyle from "../constants/globalStyle";
import { useRouter } from "expo-router";

const CreateNewPasswordScreen = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };
  const handleVerify = () => {
    router.push("otp");
  };
  return (
    <View style={globalStyle.container}>
      <AuthToolbar />
      <Text style={globalStyle.mainHeading}>Create New Password</Text>
      <Image source={ImagesAssets.reset} style={styles.image} />
      <View style={styles.inputContainer}>
        <Icon name="lock-closed" size={24} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />
        <Icon name="eye-off" size={24} color="#000" style={styles.icon} />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-closed" size={24} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
        <Icon name="eye-off" size={24} color="#000" style={styles.icon} />
      </View>

      <Button onPress={handleVerify} placeholder={"Continue"} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  image: {
    alignSelf: "center",
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  icon: {
    color: "grey",
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
});

export default CreateNewPasswordScreen;
