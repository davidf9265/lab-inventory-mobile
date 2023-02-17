// library imports
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import LoginScreen from "../screens/auth/LoginScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}