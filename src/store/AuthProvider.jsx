import { createContext, useContext, useState } from 'react';

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
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = !!user;

  function login(newUser) {
    setUser(newUser);
  }

  const authCtx = {
    user,
    isLoading,
    login,
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
