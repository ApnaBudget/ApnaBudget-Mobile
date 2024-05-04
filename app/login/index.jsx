import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { ImagesAssets } from "../../assets/images/ImageAssets";
import React, { useState } from "react";

const LoginScreen = ({ isSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    //todoLater
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={ImagesAssets.loginbg}
        style={styles.background}
      ></ImageBackground>
      <View style={styles.headerContainer}>
        <Pressable>
          <Image source={ImagesAssets.back} style={styles.icon} />
        </Pressable>
        <Pressable>
          <Image source={ImagesAssets.info} style={styles.icon} />
        </Pressable>
      </View>
      <Text style={styles.heading}>ApnaBudget</Text>
      <Text style={styles.subHeading}>Sign In your Account</Text>

      <View style={styles.inputContainer}>
        <Image source={ImagesAssets.user} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={ImagesAssets.lock} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={styles.subActions}>
        <Pressable style={styles.checkboxContainer} onPress={toggleCheckBox}>
          <Text style={[styles.checkbox, isChecked && styles.checked]}>✓</Text>
          <Text style={styles.label}>Remember Me</Text>
        </Pressable>
        <Pressable>
          <Text>Forgot Password?</Text>
        </Pressable>
      </View>
      <Pressable style={styles.actionButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
      <View style={styles.loginButtonsContainer}>
        <Pressable style={styles.googleSignUp}>
          <Image source={ImagesAssets.google} style={styles.icon} />
          <Text style={styles.signText}>SignIn with Google</Text>
        </Pressable>
        <Pressable style={styles.googleSignUp}>
          <Image source={ImagesAssets.microsoft} style={styles.icon} />
          <Text style={styles.signText}>SignIn with Microsoft</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    display: "flex",
    position: "absolute",
    top: 0,
    right: 0,
    width: 450,
    height: 300,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: "#f2f2f2",
    backgroundColor: "#fff",
  },
  loginButtonsContainer: {
    position: "absolute",
    bottom: "10%",
    display: "flex",
    flexDirection: "col",
    width: "100%",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    top: 50,
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    position: "absolute",
    top: 90,
    fontSize: 42,
    color: "white",
    fontWeight: "700",
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 20,
    color: "black",
    fontWeight: "400",
  },
  input: {
    width: "80%",
    height: 40,
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  subActions: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
    marginRight: 20,
  },
  actionButton: {
    width: "90%",
    backgroundColor: "#9E5FE6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  },
  signText: {
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: "15%",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    textAlign: "center",
    lineHeight: 20,
    marginRight: 8,
  },
  checked: {
    backgroundColor: "#9E5FE6",
    color: "white",
  },
  googleSignUp: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: "#f2f2f2",
    backgroundColor: "#ffff",
  },
});

export default LoginScreen;
