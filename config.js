import { initializeApp, getApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDN8qaKpbh8ta1470i_F5K9AkXL5Y2s7EM",
  authDomain: "apnabudget-0.firebaseapp.com",
  projectId: "apnabudget-0",
  storageBucket: "apnabudget-0.appspot.com",
  messagingSenderId: "329608580466",
  appId: "1:329608580466:web:8343439384ff21601761eb",
  measurementId: "G-D8KNEC9082",
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { FIREBASE_APP, FIREBASE_AUTH, getApp, getAuth };