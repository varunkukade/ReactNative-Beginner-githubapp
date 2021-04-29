import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GobackBtn = () => {
  const navigation = useNavigation();
  return (
    <EvilIcons
      name="chevron-left"
      size={50}
      style={Styles.leftIcon}
      onPress={() => navigation.goBack()}
    />
  );
};

const Styles = StyleSheet.create({
  leftIcon: {
    color: "white",
  },
});
export default GobackBtn;
