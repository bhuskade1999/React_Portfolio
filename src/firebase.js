import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXTMJlHVGnFMN4ALmNnpfdGv8PhtbLITk",
  authDomain: "bhushan-portfolio-a8c02.firebaseapp.com",
  projectId: "bhushan-portfolio-a8c02",
  storageBucket: "bhushan-portfolio-a8c02.appspot.com",
  messagingSenderId: "322911921971",
  appId: "1:322911921971:web:4594da3c660df76a260046",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();








// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDXTMJlHVGnFMN4ALmNnpfdGv8PhtbLITk",
//   authDomain: "bhushan-portfolio-a8c02.firebaseapp.com",
//   projectId: "bhushan-portfolio-a8c02",
//   storageBucket: "bhushan-portfolio-a8c02.appspot.com",
//   messagingSenderId: "322911921971",
//   appId: "1:322911921971:web:4594da3c660df76a260046"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);