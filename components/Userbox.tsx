import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableNativeFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Modal from "../components/Modal";
import { Userprops } from "../types";

const UserBox = (props: Userprops) => {
  const navigation = useNavigation();
  const onClick = (id: number, login: string, avatar_url: string) => {
    navigation.navigate("userPage", {
      id: id,
      name: login,
      avatar_url: avatar_url,
    });
  };

  const displayUser = (props: Userprops) => {
    const { usersArray } = props;
    if (usersArray.length > 0) {
      return (
        <FlatList
          data={usersArray}
          renderItem={({ item }) => (
            <TouchableNativeFeedback
              onPress={() => onClick(item.id, item.login, item.avatar_url)}
            >
              <View style={Styles.container}>
                <View>
                  <Image
                    source={{ uri: item.avatar_url }}
                    style={Styles.avatar}
                  />
                </View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>{item.login}</Text>
                  <View style={Styles.idAndScoreContainer}>
                    <Text>{item.id}</Text>
                    <Text>Score:{item.score}</Text>
                  </View>
                </View>
                <AntDesign
                  name="right"
                  color="black"
                  style={Styles.rightArrow}
                />
              </View>
            </TouchableNativeFeedback>
          )}
        />
      );
    } else {
      return <Modal>Search for the user</Modal>;
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
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 50,
  },
  idAndScoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginTop: 3,
    marginRight: 80,
  },
  rightArrow: {
    padding: 3,
    fontSize: 16,
    marginRight: 3,
    marginTop: 2,
  },
});

export default UserBox;
