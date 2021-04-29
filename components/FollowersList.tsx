import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Modal from "../components/Modal";
import { followersListProps } from "../types";

const FollowersList = (props: followersListProps) => {
  const displayUser = (props: followersListProps) => {
    const { usersArray } = props;
    if (usersArray.length > 0) {
      return (
        <FlatList
          data={usersArray}
          renderItem={({ item }) => (
            <View style={Styles.container}>
              <View>
                <Image
                  source={{ uri: item.avatar_url }}
                  style={Styles.avatar}
                />
              </View>
              <View>
                <Text style={Styles.name}>{item.login}</Text>
                <Text>id: {item.id}</Text>
              </View>
            </View>
          )}
        />
      );
    } else if (usersArray.length === 0 && props.clicked === "Following") {
      return <Modal>User doesn't follow anyone !</Modal>;
    } else if (usersArray.length === 0 && props.clicked === "Followers") {
      return <Modal>User don't have any followers !</Modal>;
    } else {
      return <Modal>Loading...</Modal>;
    }
  };
  return <>{displayUser(props)}</>;
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    textAlign: "center",
    marginBottom: 2,
  },
  avatar: {
    width: 45,
    height: 45,
    marginRight: 15,
    borderRadius: 50,
  },
  name: { fontWeight: "bold", fontSize: 16, marginBottom: 3 },
});

export default FollowersList;
