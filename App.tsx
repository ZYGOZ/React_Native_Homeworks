import React from "react";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import Navigation from "./src/navigations/Navigation";
import { useFonts } from "expo-font";

const App: React.FC = () => {
  const [isLoaded] = useFonts({
    Hiatus: require("./assets/fonts/Hiatus.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
  const { token } = useAuth();
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
