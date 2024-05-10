import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyle from "@/constants/GlobalStyle";
import Button from "@/components/common/Button";
import { createRgba, theme } from "@/constants/theme";
import { wpToDP } from "@/utils/ResponsiveScreen";
import { hpToDP } from "../utils/ResponsiveScreen";
import WelcomeBackground from "../assets/images/WelcomeBackground";

const WelcomeScreen = ({ onLayout }) => {
  const router = useRouter();

  return (
    <SafeAreaView onLayout={onLayout} style={[GlobalStyle.container, styles.container]}>
      <WelcomeBackground style={styles.backgroundImage} />

      <View style={styles.headingsContainer}>
        <Text style={styles.heading}>
          Track Your Spending Wisely
        </Text>

        <Text style={styles.subHeading}>
          Effortlessly Categorize Transactions and Access Detailed Financial Reports
        </Text>
      </View>

      <View style={styles.buttonsWrapper}>
        <Button onPress={() => router.push("signup")} placeholder={"Signup"} />
        <Button customButtonStyle={styles.loginButton} customButtonTextStyle={styles.loginButtonText} onPress={() => router.push("login")} placeholder={"Login"} />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    gap: hpToDP(2),
  },

  backgroundImage: {
    width: "100%",
    height: 0,
  },

  headingsContainer: {
    width: '90%',
    alignSelf: "center",
    justifyContent: 'center',
    gap: 12,
  },

  heading: {
    fontSize: wpToDP(10),
    fontFamily: 'bold',
    textAlign: "center",
  },
  
  subHeading: {
    fontSize: wpToDP(4),
    color: theme.colors.gray,
    fontFamily: 'regular',
    textAlign: "center",
  },

  buttonsWrapper: {
    width: "100%",
    gap: 12,
    marginBottom: hpToDP(3),
  },

  loginButton: {
    backgroundColor: createRgba(theme.colors.primaryColor, 0.2),
  },

  loginButtonText: {
    color: theme.colors.primaryColor,
  },
});
