import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/customHeader2";
import axios from "axios";
import moment from "moment";
import { specificUserType } from "../types";
import initialobject from "../initialobjects";

const UserPageScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const userObject = { ...route.params };
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<specificUserType>(
    initialobject
  );

  useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  const loadDataOnlyOnce = () => {
    axios
      .get(`https://api.github.com/users/${userObject.name}`)
      .then((response) => {
        const userData = response.data;
        console.log(userData, "userData received");
        setUserDetails(userData);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  let mainUserContent = (
    <View>
      <Text>Loading....</Text>
    </View>
  );
  if (loading) {
    mainUserContent = (
      <View>
        <Header
          login={userDetails.login}
          followersUrl={userDetails.followers_url}
          followingUrl={userDetails.following_url}
        />
        <View></View>

        <View style={Styles.container}>
          <View style={Styles.profile}>
            <View style={Styles.center}>
              <Image
                source={{ uri: userDetails.avatar_url }}
                style={Styles.image}
              ></Image>
              <Text style={Styles.name}>{userDetails.login}</Text>
              <Text style={Styles.location}>{userDetails.location}</Text>
              <View style={Styles.flexRow}>
                <Text style={Styles.FollowersFollowing}>
                  {userDetails.followers} Followers
                </Text>

                <Text style={Styles.middleBar}>|</Text>

                <Text style={Styles.FollowersFollowing}>
                  {userDetails.following} Following
                </Text>
              </View>
              <View style={Styles.subContainer}>
                <Text style={Styles.heading}>Bio:</Text>
                <Text style={Styles.answer}>
                  {userDetails.bio ? userDetails.bio : "No bio to display"}
                </Text>
                <Text style={Styles.heading}>Public repositories:</Text>
                <Text style={Styles.answer}>{userDetails.public_repos}</Text>
                <Text style={Styles.heading}>Public gists:</Text>
                <Text style={Styles.answer}>{userDetails.public_gists}</Text>
                <Text style={Styles.heading}>Updated at:</Text>
                <Text style={Styles.answer}>
                  {moment(userDetails.updated_at).format("MMMM Do YYYY")}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return mainUserContent;
};

const Styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "grey",
  },

  image: {
    width: 130,
    height: 130,
    borderRadius: 70,
    marginBottom: 15,
  },
  profile: {
    height: 580,
    overflow: "hidden",
    backgroundColor: "white",
    marginHorizontal: 15,
    marginTop: 15,
    elevation: 5,
  },
  center: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 15,
    color: "grey",
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  middleBar: {
    marginHorizontal: 9,
    color: "grey",
  },
  FollowersFollowing: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subContainer: {
    width: "100%",
    height: "80%",
    padding: 12,
    marginTop: 17,
    marginBottom: 5,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  answer: {
    marginBottom: 5,
    fontSize: 16,
  },
});

export default UserPageScreen;
