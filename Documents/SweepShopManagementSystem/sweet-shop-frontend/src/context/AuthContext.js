// context/AuthContext.js
import { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "../services/authService";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  loading:true
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    // ✅ Hydrate from localStorage on first load
    const storedUser = getCurrentUser();
    if (storedUser) setUser(storedUser);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser,loading }}>
      {children}
    </AuthContext.Provider>
  );
}
