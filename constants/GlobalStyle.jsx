import { StyleSheet } from "react-native";
import { wpToDP } from "../utils/ResponsiveScreen";

const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: wpToDP(5),
    backgroundColor: "white",
  },
});

export default GlobalStyle;
