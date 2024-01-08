import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateTaskScreen from "../screens/CreateTaskScreen";
import UncompletedTasksScreen from "../screens/UncompletedTasksScreen";
import { NavigationContainer } from "@react-navigation/native";
import CompletedTasksScreen from "../screens/CompletedTasksScreen";

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Uncompleted" component={UncompletedTasksScreen} />
        <Tab.Screen name="Completed" component={CompletedTasksScreen} />
        <Tab.Screen
          name="CreateTask"
          component={CreateTaskScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
