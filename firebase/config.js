import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFfha-FbrzgcinYquscuqi15eZWelGHRQ",
  authDomain: "event-managment-app-1fb5d.firebaseapp.com",
  projectId: "event-managment-app-1fb5d",
  storageBucket: "event-managment-app-1fb5d.appspot.com",
  messagingSenderId: "621319298555",
  appId: "1:621319298555:web:0791e7f5c940e2b5d53f5e",
  measurementId: "G-P3WQ5DT0XP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
