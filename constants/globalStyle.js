import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
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
