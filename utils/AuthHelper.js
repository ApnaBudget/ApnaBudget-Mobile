import FIREBASE_APP, { FIREBASE_AUTH } from "../config";
import { router } from "expo-router";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { sendToast } from "./SendToast";

const auth = getAuth();

export const signUpEmail = async (email, password, setAuthError) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError("");

      sendEmailVerification(userCredential.user).then(() => {
        sendToast("Please check your email for a verification link");
        setAuthError("");
      }).catch((error) => {
        setAuthError.log(error.code);
      });
    })
    .catch((error) => {
      if(error.code === "auth/email-already-in-use") {
        setAuthError("That email address is already in use!");
      } else if(error.code === "auth/invalid-email") {
        setAuthError("That email address is invalid!");
      } else {
        setAuthError(error.code);
      }
    });
};

export const signInEmail = async (email, password, setAuthError, nextRoute) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if(userCredential.user.emailVerified) {
        setAuthError("");
        router.dismissAll();
        router.replace(nextRoute);
      } else {
        auth.signOut();
        setAuthError("Your email is not verified!");
      }
    })
    .catch((error) => {
      if(error.code === "auth/invalid-credential") setAuthError("Invalid Credential");
      else setAuthError(error.code);
    });
};

export const sendForgetPasswordLink = async (email, setIsEmailValid, setAuthError) => {
  sendPasswordResetEmail(auth, email).then(() => {
    setAuthError("");
    setIsEmailValid(true);
    sendToast("Check your email for password reset link!");
  }).catch((error) => {
    if(error.code === "auth/invalid-email") {
      setIsEmailValid(false);
      setAuthError("That email address is invalid!");
    } else {
      setIsEmailValid(true);
      setAuthError(error.code);
    }
  });
}

export const logout = async (nextRoute) => {
  await auth.signOut();
  
  if(router.canDismiss()) {
    router.dismissAll();
  }
  router.replace(nextRoute);
}
