import { app } from "./firebase";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  connectAuthEmulator,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, setDoc, query, collection, where, getDocs } from "firebase/firestore";
import { db } from "./firestore";
const auth = getAuth(app);

const actionCodeSettings = {
  url: "http://localhost:5173/",
  handleCodeInApp: true,
};

const emailLinkSignup = async (email) => {
  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    await window.localStorage.setItem("emailForSignIn", email);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};

// fetching user after he clicks the link from email
const emailLinkGetUser = async () => {
  try {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      const userData = await signInWithEmailLink(auth, email, window.location.href);
      console.log(userData.user);
      const data = {
        email: userData.user.email,
      }
      await setDoc(doc(db, "users", userData.user.uid), data)
      await window.localStorage.removeItem("emailForSignIn");
    }
  } catch (err) {
    console.log(err);
  }
};

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
   const res =  await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    console.log(q);
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        isAdmin: false
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const userSignOut = async () => {
  try {
    await signOut(auth);
    console.log("happened");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
};

connectAuthEmulator(auth, "http://localhost:9099");

export default {
  emailLinkSignup,
  auth,
  emailLinkGetUser,
  signInWithGoogle,
  userSignOut,
};
