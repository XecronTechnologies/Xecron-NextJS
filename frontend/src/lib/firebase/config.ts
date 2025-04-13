import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

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
export const auth = getAuth(app);