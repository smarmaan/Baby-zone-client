import { createContext, useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //
  //
  //
  //
  //
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  //
  //
  //
  //
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //
  //
  //
  //
  //
  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //
  //
  //
  //
  //
  const handleGitHubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  //
  //
  //
  //
  //
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  //
  //
  //
  //
  //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  //
  //
  //
  //
  //
  const authInfo = {
    user,
    createUser,
    signIn,
    logout,
    loading,
    handleGoogleSignIn,
    handleGitHubSignIn,
  };
  //
  //
  //
  //
  //
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
