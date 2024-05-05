import { Alert, Platform, ToastAndroid } from "react-native";

export const sendToast = (msg) => {
    if(Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
        Alert.alert(msg);
    }
}