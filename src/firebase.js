import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDsXX1YtqO1L7CsjlPfyL1hWkKQBcT9YHU",
  authDomain: "netflix-clone-ab7e5.firebaseapp.com",
  projectId: "netflix-clone-ab7e5",
  storageBucket: "netflix-clone-ab7e5.appspot.com",
  messagingSenderId: "478112945222",
  appId: "1:478112945222:web:7c1a9e1fde093de354a647"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth }
export default db;
