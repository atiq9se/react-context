// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbraUeYVYicLM9NuOL00IZt-wyGnbVkWg",
  authDomain: "auth-moha-milon-b51a4.firebaseapp.com",
  projectId: "auth-moha-milon-b51a4",
  storageBucket: "auth-moha-milon-b51a4.firebasestorage.app",
  messagingSenderId: "147331108890",
  appId: "1:147331108890:web:3f806eb412da1bc76ec1a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);