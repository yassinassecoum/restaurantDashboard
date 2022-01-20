// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1QxGzwmy8AexTyRjCCgSQkOMCdw9ZULA",
  authDomain: "dispatch-project-ad133.firebaseapp.com",
  projectId: "dispatch-project-ad133",
  storageBucket: "dispatch-project-ad133.appspot.com",
  messagingSenderId: "1058599004224",
  appId: "1:1058599004224:web:bf8c62aea44e96536b97a5",
  measurementId: "G-988YDH5FL6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);
