// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS86ZeBIZaE4wD6Wy2QebiYccBGdQ9Hro",
  authDomain: "auth-practice-2a2e8.firebaseapp.com",
  projectId: "auth-practice-2a2e8",
  storageBucket: "auth-practice-2a2e8.appspot.com",
  messagingSenderId: "6168359776",
  appId: "1:6168359776:web:b1e81af6f6928ab18ce405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;