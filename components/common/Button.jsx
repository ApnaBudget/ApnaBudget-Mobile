import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import { hpToDP, wpToDP } from "../../utils/ResponsiveScreen";

const Button = ({ customButtonStyle, customButtonTextStyle, onPress, placeholder }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={[styles.button, customButtonStyle]}>
        <Text style={[styles.buttonText, customButtonTextStyle]}>{placeholder}</Text>
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
    paddingHorizontal: wpToDP(3),
    paddingVertical: hpToDP(2),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
    width: "100%",
    backgroundColor: theme.colors.primaryColor,
  },

  buttonText: {
    fontSize: wpToDP(4.5),
    fontFamily: 'bold',
    color: theme.colors.white,
  },
});
