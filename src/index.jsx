import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "./screens/AuthScreen";
import ContentScreen from "./screens/ContentScreen";

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Content"
        component={ContentScreen}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Route;
