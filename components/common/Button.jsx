import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Button = ({ onPress, placeholder }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{placeholder}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },

  button: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(12),
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginTop: moderateScale(15),
    backgroundColor: theme.colors.primaryColor,
  },

  buttonText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: theme.colors.white,
  },
});
