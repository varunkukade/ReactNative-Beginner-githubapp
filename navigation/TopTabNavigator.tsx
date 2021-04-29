/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";

import useColorScheme from "../hooks/useColorScheme";
import FollowersScreen from "../screens/FollowersScreen";

import { useRoute } from "@react-navigation/native";

import { TopTabParamList } from "../types";

const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

export default function TopTabNavigator() {
  const colorScheme = useColorScheme();
  const route = useRoute();

  return (
    <TopTab.Navigator
      initialRouteName="Followers"
      tabBarOptions={{
        activeTintColor: "black",
        style: {
          backgroundColor: "white",
          padding: 5,
        },
        indicatorStyle: {
          backgroundColor: "purple",
          height: 4,
        },
        labelStyle: {
          fontWeight: "bold",
          fontSize: 14,
        },
      }}
    >
      <TopTab.Screen
        name="Followers"
        children={() => (
          <FollowersScreen params={route.params} clicked="Followers" />
        )}
      />
      <TopTab.Screen
        name="Following"
        children={() => (
          <FollowersScreen params={route.params} clicked="Following" />
        )}
      />
    </TopTab.Navigator>
  );
}
