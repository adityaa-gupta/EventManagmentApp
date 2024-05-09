import { app } from "@firebase/config";
import useAuthStore from "@store/useAuthStore";
import { toastError } from "@utils/toast";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = (loginURL, logoutURL) => {
  const auth = getAuth(app);
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const { user, isAuthenticated, setIsAuthenticated, setUser } = useAuthStore();

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        if (userCredentials) {
          setIsAuthenticated(true);
          setUser(userCredentials.user);
          loginURL && router.replace(loginURL);
        }
      })
      .catch((err) => {
        console.log(err);
        toastError(err.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticated(false);
        setUser({});
        logoutURL && router.replace(logoutURL);
      })
      .catch((err) => {
        console.log(err);
        toastError(err.message);
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        if (userCredentials) {
          setIsAuthenticated(true);
          setUser(userCredentials.user);
          loginURL && router.replace(loginURL);
        }
      })
      .catch((err) => {
        console.log(err);
        toastError(err.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
        loginURL && router.replace(loginURL);
      } else setIsAuthenticated(false);
      setLoading(false);
    });
  }, [auth, router, setUser, setIsAuthenticated, loginURL]);

  return { user, isAuthenticated, setUser, signup, login, logout, isLoading };
};

export default useAuth;
