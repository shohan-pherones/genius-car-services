// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXeMggj7VTKDdrXLkhUQwT5mYIr2rVHms",
  authDomain: "genius-car-services-1d9d4.firebaseapp.com",
  projectId: "genius-car-services-1d9d4",
  storageBucket: "genius-car-services-1d9d4.appspot.com",
  messagingSenderId: "542085859993",
  appId: "1:542085859993:web:fbccc365d9c57903d58608",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
