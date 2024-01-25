import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { useAuth } from "../contexts/AuthContext";
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={({ navigation }) => ({
          title: "Welcome",
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: "Log In",
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Sign Up", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
