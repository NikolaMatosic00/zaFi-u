// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from '@firebase/firestore'

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCGPuVUE--ZIXXhA7bc4SFa4He_0X9oDHA",
//     authDomain: "wd-projekat-baza.firebaseapp.com",
//     projectId: "wd-projekat-baza",
//     storageBucket: "wd-projekat-baza.appspot.com",
//     messagingSenderId: "563987165140",
//     appId: "1:563987165140:web:358e5c07511ed9c3e6b041",
//     measurementId: "G-YJLKP0SEDJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9k60pklB_nnYs33ht5bjYJ9581E0s-WA",
  authDomain: "wdpetshop-78d36.firebaseapp.com",
  projectId: "wdpetshop-78d36",
  storageBucket: "wdpetshop-78d36.appspot.com",
  messagingSenderId: "254654731284",
  appId: "1:254654731284:web:18dc5e0742fbc26300c301",
  measurementId: "G-QQFDKBH9SB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
