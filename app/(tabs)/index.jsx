import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/home/Header";
import DatePicker from "@/components/common/DatePicker";
import ExpenseType from "@/components/ExpenseType";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { ImagesAssets } from "@/constants/ImageAssets";
import { StyleSheet } from "react-native";
import { theme } from "@/constants/theme";

const DashboardScreen = ({ onLayout }) => {
  const [data, setData] = useState();

  return (
    <SafeAreaView style={styles.container} onLayout={onLayout}>
      <Header />
      <DatePicker />

      <View style={styles.contentContainer}>
        <View style={[styles.contentWrapper, styles.expensesWrapper]}>
          <ExpenseType
            icon={
              <FontAwesome6
                name="money-bills"
                size={24}
                color={theme.colors.iconColor}
              />
            }
            value="-$12,000"
            type="Expenses"
          />
          <ExpenseType
            icon={
              <FontAwesome6
                name="wallet"
                size={24}
                color={theme.colors.iconColor}
              />
            }
            value="$42,000"
            type="Balance"
          />
          <ExpenseType
            icon={
              <FontAwesome
                name="bank"
                size={24}
                color={theme.colors.iconColor}
              />
            }
            value="$72,000"
            type="Income"
          />
        </View>

        <View style={[styles.contentWrapper, styles.graphWrapper]}>
          <Image style={styles.demoGraph} source={ImagesAssets.demoGraph} />
        </View>

        {!data ? (
          <Text style={styles.nothingHereError}>Nothing Here!</Text>
        ) : (
          <View style={[styles.contentWrapper]}></View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:  (16),
    paddingVertical:  (10),
    alignItems: "center",
    gap:  (25),
  },

  contentContainer: {
    alignItems: "center",
    gap:  (15),
  },

  contentWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding:  (20),
    borderColor: theme.colors.borderColor,
    borderWidth:  (1),
    borderRadius: 10,
  },

  expensesWrapper: {
    marginTop:  (10),
  },

  graphWrapper: {
    padding:  (-10),
  },

  demoGraph: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },

  nothingHereError: {
    fontFamily: "regular",
    fontSize:  (16),
    marginTop:  (100),
  },
});
