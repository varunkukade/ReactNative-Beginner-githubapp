import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Modal = (props) => {
  return (
    <View style={Styles.box}>
      <Text style={Styles.noUserYet}>{props.children}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  box: {
    marginTop: 50,
    marginLeft: 30,
    width: 300,
    height: 80,
    backgroundColor: "white",
    elevation: 5,
    justifyContent: "center",
    textAlign: "center",
  },
  noUserYet: {
    fontSize: 20,
    color: "purple",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default Modal;
