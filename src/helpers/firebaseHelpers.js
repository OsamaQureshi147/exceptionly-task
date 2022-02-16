import {
  GoogleAuthProvider,
  OAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { firebase } from "../firebase-config";

const auth = getAuth();

export const handleGooglSignIn = () => {
  const google_provider = new GoogleAuthProvider();
  signInWithPopup(auth, google_provider)
    .then((res) => console.log("Sign in successful", res))
    .catch((err) => console.error("Error signing in with google", err));
};

export const handleMicrosoftSignIn = () => {
  const microsoft_provider = new OAuthProvider("microsoft.com");
  signInWithPopup(auth, microsoft_provider)
    .then((res) => console.log("Sign in successful", res))
    .catch((err) => console.error("Error signing in with microsoft", err));
};
