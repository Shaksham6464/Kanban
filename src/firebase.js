
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
  import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADbijBXc37U1ORGZwCbE5OdSCHWplcJ9M",
  authDomain: "flowboard-bdaaf.firebaseapp.com",
  projectId: "flowboard-bdaaf",
  storageBucket: "flowboard-bdaaf.firebasestorage.app",
  messagingSenderId: "1033386104560",
  appId: "1:1033386104560:web:b2174eff41d20d6b5dd435",
  measurementId: "G-E50NEFPHH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);
export const db = getFirestore(app);
if (process.env.NODE_ENV === "development") {
 //  connectAuthEmulator(auth, "http://localhost:9099");
  // connectFirestoreEmulator(db, "localhost", 8082);
  // connectFunctionsEmulator(fbFunctions, "localhost", 5002);
}