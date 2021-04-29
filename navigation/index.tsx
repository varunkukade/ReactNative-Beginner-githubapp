/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import LandingPageScreen from "../screens/LandingPageScreen";
import UserPageScreen from "../screens/UserPageScreen";
import TopTabNavigator from "./TopTabNavigator";
import GobackBtn from "../components/GobackBtn";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "purple",
          elevation: 0, //this is for bottom border under the header
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="landingPage"
        component={LandingPageScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* landing page screen */}

      <Stack.Screen
        name="userPage"
        component={UserPageScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* screen for displaying specific user details */}

      <Stack.Screen
        name="topTab"
        component={TopTabNavigator}
        options={({ route }) => ({
          title: route.params.name, //here name of the person will be displayed.
          headerLeft: () => <GobackBtn />,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "purple",
            elevation: 0, //this is for bottom border under the header
          },
          headerTintColor: "white", //whatever is written in header has white color
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 21,
          },
        })}
      />
      {/* screen for folllowers and following */}

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      {/* screen for error */}
    </Stack.Navigator>
  );
}
