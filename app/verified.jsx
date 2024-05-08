import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Button from "@/components/common/Button";
import { ImagesAssets } from "@/constants/ImageAssets";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";

const VerfiedScreen = () => {
  const router = useRouter();

  const handleExplore = () => {
    
  };


  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={ImagesAssets.verified}
        style={styles.image}
        resizeMode="contain"
      />
      {/* Title */}
      <Text style={styles.title}>Verified Successfully !</Text>
      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Congratulations! Your account has been verified successfully.
      </Text>
      {/* Explore Button */}
      <Button
        onPress={handleExplore}
        customButton={styles.loginButton}
        customButtonText={styles.loginButtonText}
        placeholder={"Let's Explore"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  loginButton: {
    width: "100%",
    marginTop: moderateScale(24),
    backgroundColor: theme.colors.primaryColor,
  },

  loginButtonText: {
    color: theme.colors.white,
  },
});

export default VerfiedScreen;
