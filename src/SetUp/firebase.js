import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBVFcAptkGlXrIcb0ZEs4XAkfCBqEhT4as",
    authDomain: "qrstory-tees.firebaseapp.com",
    projectId: "qrstory-tees",
    storageBucket: "qrstory-tees.firebasestorage.app",
    messagingSenderId: "398513163604",
    appId: "1:398513163604:web:98df72261993a91aa14cc1",
    measurementId: "G-SN7B4P5XY7"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Экспортируем сервисы, чтобы использовать в других файлах
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const firebaseAnalytics = analytics; // Экспортируем аналитику, если нужно
export default app;
export const provider = new GoogleAuthProvider(app);
