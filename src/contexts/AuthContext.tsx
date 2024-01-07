import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

let registredTokens = ["1", "2", "3"];

type AuthContextType = {
  token: string | null;
  signIn: (newToken: string) => Promise<boolean>;
  signOut: () => void;
  signUp: (token: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  token: null,
  signIn: async () => false,
  signOut: () => {},
  signUp: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const token2 = await SecureStore.getItemAsync("token");
      if (!token2) return;
      setToken(token2);
    };
    checkToken();
  }, []);
  const signUp = async (newToken: string) => {
    try {
      await SecureStore.setItemAsync("token", newToken);
      setToken(newToken);
      registredTokens.push(newToken);
    } catch (error) {
      console.error("Error storing token:", error);
    }
  };

  const signIn = async (newToken: string): Promise<boolean> => {
    try {
      if (!newToken) {
        return false;
      }
      if (registredTokens.includes(newToken)) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error storing token:", error);
      return false;
    }
  };

  const signOut = async () => {
    try {
      await SecureStore.deleteItemAsync("token");
      setToken(null);
    } catch (error) {
      console.error("Error removing token:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
