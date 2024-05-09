import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImagesAssets } from "@/constants/ImageAssets";
import globalStyle from "../constants/globalStyle";
import { verticalScale} from "react-native-size-matters";
import Button from "@/components/common/Button";

const WelcomeScreen = ({ onLayout }) => {
  const router = useRouter();

  return (
    <SafeAreaView onLayout={onLayout} style={globalStyle.container}>
      <Image
        style={styles.backgroundImage}
        source={ImagesAssets.welcomeBackground}
        resizeMode="contain"
      />

      <View style={styles.headingsContainer}>
        <Text style={globalStyle.mainHeading}>
          Know where your{"\n"}money goes
        </Text>
        <Text style={globalStyle.subHeading}>
          Track your transaction easily, with{"\n"}categories and financial
          report.
        </Text>
      </View>

      <View style={styles.buttonsWrapper}>
        <Button onPress={() => router.push("signup")} placeholder={"Signup"} />
        <Button onPress={() => router.push("login")} placeholder={"Login"} />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    alignSelf:'center',
    height: verticalScale(300),
  },
  headingsContainer: {
    position: "absolute",
    bottom: 200,
    alignSelf: "center",
  },
  buttonsWrapper: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    width: "100%",
  },
});
