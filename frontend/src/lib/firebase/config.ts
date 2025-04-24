// Suggested code may be subject to a license. Learn more: ~LicenseLog:1032242589.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1203933501.
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { Dispatch, SetStateAction } from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyD3u_ozgZVYkQtOgCy4E88i3ekncRKCHSQ",
  authDomain: "xecron-e86d9.firebaseapp.com",
  projectId: "xecron-e86d9",
  storageBucket: "xecron-e86d9.firebasestorage.app",
  messagingSenderId: "854369318726",
  appId: "1:854369318726:web:5ecf2b78a35094f31ad747",
  measurementId: "G-JSQ4QC6N7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();




// Handle SignUp Method

const handleSignUp = async(email: string, password: string, setError: Dispatch<SetStateAction<string>>)=>{
  try{
    await createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("Sign-Up:  ",user);
    setError('');
    })
  } catch(err) {
      if (err instanceof Error) {
        const errorCode = err.name;
    const errorMessage = err.message;
        console.log(errorCode, errorMessage);
        setError("Sign Up Failed: "+errorMessage);
      }
  }
}

// Handle Google Login
const handleGoogleLogin = async(setError: Dispatch<SetStateAction<string>>)=>{
  try{
    const result = await signInWithPopup(auth,googleProvider)
    console.log("Google Sign-In:  ",result.user);
    setError('');
  }catch(err){
    console.log(err);
    setError("Google Sign-In Failed: ");
  }
}

export { auth, googleProvider, handleGoogleLogin, handleSignUp }