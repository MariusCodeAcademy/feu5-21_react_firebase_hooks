import { createContext, useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

const AuthContext = createContext({
  user: {},
  isLoading: false,
  login() {},
  logout() {},
  isLoggedIn: false,
});

// pervadinti AuthContext
AuthContext.displayName = 'Autentifikacija';

function AuthProvider({ children }) {
  // const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, userLoading, userError] = useAuthState(auth);
  const isLoggedIn = !!user;
  console.log('user ===', user);
  console.log('isLoggedIn ===', isLoggedIn);
  // function login(newUser) {
  //   setUser(newUser);
  // }

  const authCtx = {
    user,
    isLoading,
    isLoggedIn,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
