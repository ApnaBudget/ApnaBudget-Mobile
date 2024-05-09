import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "@/components/common/Button";
import { ImagesAssets } from "@/constants/ImageAssets";
import { useRouter } from "expo-router";
import globalStyle from "../constants/globalStyle";

const VerfiedScreen = () => {
  const router = useRouter();
  const handleExplore = () => {};

  return (
    <View style={[globalStyle.container, styles.contain]}>
      <Image
        source={ImagesAssets.verified}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={globalStyle.mainHeading}>Verified Successfully !</Text>
      <Text style={globalStyle.subHeading}>
        Congratulations! Your account has been verified successfully.
      </Text>
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
  contain: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
});

export default VerfiedScreen;
