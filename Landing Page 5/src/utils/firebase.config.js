import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0ldtQj9-katG-SF-tQxPcNhmaUFby7-g",
    authDomain: "crud-f64da.firebaseapp.com",
    projectId: "crud-f64da",
    storageBucket: "crud-f64da.appspot.com",
    messagingSenderId: "744135190318",
    appId: "1:744135190318:web:b9dc139fee0dc50a25bcbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
