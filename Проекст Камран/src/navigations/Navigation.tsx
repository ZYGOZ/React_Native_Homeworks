import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import TicketsScreen from "../screens/TicketsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useAuth } from "../contexts/AuthContext";
import AuthNavigation from "./AuthNavigation";
import TicketIcon from "../icons/TicketsIcon";
import ProfileIcon from "../icons/ProfileIcon";
import HomeIcon from "../icons/HomeIcon";
import WhiteHeartIcon from "../icons/WhiteHeartIcon";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      {token ? (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            options={{
              tabBarIcon: HomeIcon,
              headerShown: false,
              tabBarShowLabel: false,
            }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: TicketIcon,
              headerShown: false,
              tabBarShowLabel: false,
            }}
            name="Tickets"
            component={TicketsScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: WhiteHeartIcon,
              headerShown: false,
              tabBarShowLabel: false,
            }}
            name="Favourites"
            component={FavouritesScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ProfileIcon,
              headerShown: false,
              tabBarShowLabel: false,
            }}
            name="Profile"
            component={ProfileScreen}
          />
        </Tab.Navigator>
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
