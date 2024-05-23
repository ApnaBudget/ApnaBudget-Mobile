import FIREBASE_APP, { FIREBASE_AUTH } from "../config";
import { router } from "expo-router";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { sendToast } from "./SendToast";

const auth = getAuth();

export const signUpEmail = async (email, password, setIsEmailValid, setAuthError) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError("");
      setIsEmailValid(true);

      sendEmailVerification(userCredential.user).then(() => {
        sendToast("Please check your email for a verification link");
      }).catch((error) => {
        console.log(error);
      });
    })
    .catch((error) => {
      console.log(error);
      setIsEmailValid(false);
      if(error.code === "auth/email-already-in-use") {
        setAuthError("That email address is already in use!");
      } else if(error.code === "auth/invalid-email") {
        setAuthError("That email address is invalid!");
      } else {
        setAuthError(error.message);
      }
    });
};

export const signInEmail = async (email, password, setIsEmailValid, setIsPasswordValid, setAuthError, nextRoute) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      setIsEmailValid(true);
      setIsPasswordValid(true);
      router.dismissAll();
      router.replace(nextRoute);
    })
    .catch((error) => {
      console.log(error);
      setIsEmailValid(false);
      setIsPasswordValid(false);
      
      if(error.code === "auth/invalid-credential") setAuthError("Invalid Credential");
      setAuthError(error.code);
    });
};

export const logout = async (nextRoute) => {
  await auth.signOut();
  
  if(router.canDismiss()) {
    router.dismissAll();
  }
  router.replace(nextRoute);
}
