import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "@/components/common/Button";
import { ImagesAssets } from "@/constants/ImageAssets";
import { router } from "expo-router";
import GlobalStyle from "../constants/GlobalStyle";
import { theme } from "../constants/theme";
import { hpToDP, wpToDP } from "@/utils/ResponsiveScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const VerfiedScreen = () => {
  const handleExplore = () => {
    router.replace("(tabs)");
  }

  return (
    <SafeAreaView style={[GlobalStyle.container, styles.container]}>
      <StatusBar style="dark" />
      <Image
        source={ImagesAssets.verifiedScreenBackground}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={{gap: hpToDP(1)}}>
        <Text style={styles.heading}>
          Verified Successfully 
        </Text>
        
        <Text style={styles.subHeading}>
          Congratulations! Your account has been verified successfully.
        </Text>
      </View>
      
      <Button
        onPress={handleExplore}
        placeholder={"Let's Explore"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
  },

  backgroundImage: {
    width: '100%',
    height: hpToDP(40),
    resizeMode: "contain",
    marginVertical: hpToDP(8),
  },

  heading: {
    color: theme.colors.black,
    fontSize: wpToDP(8),
    textAlign: 'center',
    fontFamily: 'bold'
  },

  subHeading: {
    color: theme.colors.lightBlack,
    fontSize: wpToDP(4),
    textAlign: 'center',
    fontFamily: 'light'
  },
});

export default VerfiedScreen;
