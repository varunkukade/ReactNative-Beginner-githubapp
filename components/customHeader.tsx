import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Props } from "../types";

const CustomHeader = (props: Props) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>GitHub</Text>
      <View style={Styles.searchSection}>
        <EvilIcons name="search" style={Styles.searchIcon} color="grey" />
        <TextInput
          placeholder="Search Users"
          style={Styles.textInput}
          onChangeText={props.searchedFun}
          value={props.value}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
  },
  searchSection: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 6,
    marginBottom: 15,
    padding: 5,
    borderRadius: 13,
    textAlign: "center",
  },
  searchIcon: {
    padding: 3,
    fontSize: 23,
    marginRight: 3,
    marginTop: 2,
  },
  text: {
    marginTop: 37,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  textInput: {
    width: "100%",
    flex: 1,
    fontSize: 17,
  },
});

export default CustomHeader;
