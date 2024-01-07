import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { useAuth } from "../contexts/AuthContext";
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={({ navigation }) => ({
            title: "Log In",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text
                  style={{
                    padding: 5,
                    color: "#5DB075",
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
