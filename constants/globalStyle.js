import { StyleSheet } from "react-native";
import { theme } from "@/constants/theme";
import { moderateScale, verticalScale } from "react-native-size-matters";
const globalStyle = StyleSheet.create({
  container: {
    borderWidth:2,
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  companyHeading: {
    fontFamily: theme.fonts.bold,
    alignSelf:'center',
    fontSize: moderateScale(42),
    color: theme.colors.white,
    marginTop: moderateScale(20),
  },
  darkSubHeading: {
    fontSize: moderateScale(16),
    color: theme.colors.black,
    alignSelf:'center',
    fontFamily: theme.fonts.medium,

  },
  mainHeading: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 16,
    marginBottom: 20,
    color: "grey",
    textAlign: "center",
  },
});

export default globalStyle;
