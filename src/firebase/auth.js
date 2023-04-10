import { app } from "./firebase";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, connectAuthEmulator, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);

const actionCodeSettings = {
  url: 'http://localhost:5173/',
  handleCodeInApp: true,
};

const emailLinkSignup = async(email) => 
{
 try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
    await window.localStorage.setItem('emailForSignIn', email);
 } catch (error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode, errorMessage);
 } 
}

// fetching user after he clicks the link from email
const emailLinkGetUser = () =>{
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      email = window.prompt('Please provide your email for confirmation');
    }
    signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      window.localStorage.removeItem('emailForSignIn');
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });
  }
}

const signInWithGoogle = async() => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)    
  } catch (error) {
    console.error(error);
  }
}

const userSignOut = async() => {
  try {
    await signOut(auth)
    console.log('happened');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage)
  }
}

connectAuthEmulator(auth, "http://localhost:9099");

export default { emailLinkSignup, auth, emailLinkGetUser, signInWithGoogle, userSignOut }
