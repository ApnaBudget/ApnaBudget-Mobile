import React, { useState } from 'react';
import { View,Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from "@/components/common/Button";
import { ImagesAssets } from "@/constants/ImageAssets";
import { theme } from "@/constants/theme";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import { moderateScale, verticalScale } from "react-native-size-matters";
const CreateNewPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };
  const handleVerify = () => {
    // Logic to resend OTP
  };
  return (
    <View style={styles.container}>
      {/* Rest of the component code */}
      <AuthToolbar />
      <Text style={styles.heading}>Create New Password</Text>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
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
    color:'grey',
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding:10
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
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default CreateNewPasswordScreen;