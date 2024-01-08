import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigation from "./src/navigations/Navigation";
import { initDatabase } from "./src/databases/ToDoDB";
import { DatabaseProvider } from "./src/contexts/DatabaseContext";

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  useEffect(() => {
    initDatabase();
  }, []);
  return (
    <DatabaseProvider>
      <Navigation />
    </DatabaseProvider>
  );
};

export default App;
