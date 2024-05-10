import React, { useState } from "react";
import Button from "@/components/common/Button";
import { ImagesAssets } from "@/constants/ImageAssets";
import { Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView, View } from "react-native";
import AuthInputBox from "@/components/Auth/AuthInputBox";
import AuthToolbar from "@/components/Auth/AuthToolbar";
import GlobalStyle from "@/constants/GlobalStyle";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { hpToDP, wpToDP } from "@/utils/ResponsiveScreen";

const ConfirmPasswordScreen = () => {
  const router = useRouter();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleVerify = () => {
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.white}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}} bounces={false}>
          <SafeAreaView style={GlobalStyle.container}>
            <StatusBar style="dark" />
            <AuthToolbar isDark={true} heading={"Create New Password"} />
            
            <Image source={ImagesAssets.confirmPasswordBackground} style={styles.backgroundImage} />
            
            <Text style={styles.subHeading}>
              Time to create your new password!
            </Text>
            
            <View style={styles.inputsContainer}>
              <AuthInputBox
                value={password}
                setValue={setPassword}
                iconName={"lock-closed-outline"}
                inputPlaceholder={"Password"}        
              />
              
              <AuthInputBox
                value={confirmPassword}
                setValue={setConfirmPassword}
                iconName={"lock-closed-outline"}
                inputPlaceholder={"Confirm Password"}        
              />
            </View>
            
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

export default ConfirmPasswordScreen

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: hpToDP(40),
    resizeMode: "contain",
    marginVertical: hpToDP(8),
  },

  subHeading: {
    alignSelf: 'flex-start',
    marginBottom: hpToDP(3),
    color: theme.colors.lightblack,
    fontSize: wpToDP(4),
    fontFamily: 'light'
  },

  inputsContainer: {
    gap: hpToDP(1.5),
  },

  continueButton: {
    marginVertical: hpToDP(3),
  },
});