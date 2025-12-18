import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  login: (userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => { },
  logout: () => { },
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setUser(null);

    // 🔥 Reset email + password so Chrome shows account chooser
    sessionStorage.removeItem("identifier");
    sessionStorage.removeItem("password");

    // Also clear localStorage user data
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
