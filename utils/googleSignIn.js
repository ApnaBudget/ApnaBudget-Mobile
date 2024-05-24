import { Alert } from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { GoogleAuthProvider } from "firebase/auth/cordova";

GoogleSignin.configure({
  webClientId:
    "329608580466-0jtufn4ftqr3dkcu2l2si64q9enfpnvm.apps.googleusercontent.com",
});

export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();
    const googleCredentials = GoogleAuthProvider.credential(idToken);
    await signInWithCredentials(googleCredentials);
    Alert.alert("Success", `Welcome ${userInfo.user.name}!`);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      Alert.alert("Cancelled", "Sign in cancelled");
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      Alert.alert("In Progress", "Sign in already in progress");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      Alert.alert("Play Services", "Play services are not available");
    } else {
      // some other error happened
      console.error(error);
    }
  }
};
