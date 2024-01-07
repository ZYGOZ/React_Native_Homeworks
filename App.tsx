import React from "react";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import Navigation from "./src/navigations/Navigation";
import { View, Text } from "react-native";

const App: React.FC = () => {
  const { token } = useAuth();
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
