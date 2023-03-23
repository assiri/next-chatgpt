import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// project-793276141229 ibraheem.m.assiri@gmail.com


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDaaNsK_1ptcIej_qXM1qWI9trU6GkndNQ",
//   authDomain: "chatgpt-messenger-yt-db8b8.firebaseapp.com",
//   projectId: "chatgpt-messenger-yt-db8b8",
//   storageBucket: "chatgpt-messenger-yt-db8b8.appspot.com",
//   messagingSenderId: "1070020904027",
//   appId: "1:1070020904027:web:077d3b0497626e75c2eb7e"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBnnJNVFJ9rJCB0i8tj2vt6NMUwTtf_yFA",
  authDomain: "payment-47eae.firebaseapp.com",
  databaseURL: "https://payment-47eae-default-rtdb.firebaseio.com",
  projectId: "payment-47eae",
  storageBucket: "payment-47eae.appspot.com",
  messagingSenderId: "793276141229",
  appId: "1:793276141229:web:16fb76e46f0289e5158024",
  measurementId: "G-BLLWCHPMLL"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };