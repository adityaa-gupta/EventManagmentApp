import app from "@firebase/config";
import useAuthStore from "@store/useAuthStore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";

const auth = getAuth(app);

const useAuth = () => {
  const { login, logout } = useAuthStore();
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        login(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        login(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) login(user);
    });
  }, []);
  return { signUp, signIn };
};

export default useAuth;
