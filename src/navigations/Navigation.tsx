import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
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
                  className="text-base p-1 text-green-600 font-medium"
                  // конкретно здесь тэйлвинд отказывается работать и я не нашел как можно это исправить
                  // так что вот написанный на тэйлвинде стиль но для внешнего вида оставил и реализацию через style
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
          options={{
            title: "Home",
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
