import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL8NDEv6KqNQWrUv2MaIml4fmiFDS5rhI",
  authDomain: "news-report-429df.firebaseapp.com",
  projectId: "news-report-429df",
  storageBucket: "news-report-429df.appspot.com",
  messagingSenderId: "420915007001",
  appId: "1:420915007001:web:3910d4d1d8c9181cc8e488",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
