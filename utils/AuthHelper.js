import FIREBASE_APP, { FIREBASE_AUTH } from "../config";
import { sendToast } from "@/utils/SendToast";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();
export const signUpEmail = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("User account created & signed in!");
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        sendToast("That email address is already in use!");
      } else if (error.code === "auth/invalid-email") {
        sendToast("That email address is invalid!");
      } else {
        sendToast(error.message);
      }
    });
};

export const signInEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      sendToast("signUpSuccessful");
    })
    .catch((error) => {
      console.log(error);
    });
};
