// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateTaskScreen from "./src/screens/CreateTaskScreen";
import UncompletedTasksScreen from "./src/screens/UncompletedTasksScreen";
import CompletedTasksScreen from "./src/screens/CompletedTasksScreen";
import Navigation from "./src/navigations/Navigation";

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
