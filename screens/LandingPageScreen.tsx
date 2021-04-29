import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomHeader from "../components/customHeader";
import UserBox from "../components/Userbox";
import axios from "axios";

const LandingPageScreen = () => {
  const [usersArray, setUsersArray] = useState([]);
  const [searchedFor, setSearchedFor] = useState("");
  const searchedFun = (searchedFor: string) => {
    setSearchedFor(searchedFor);
  };

  useEffect(() => {
    loadDataForSearchedText();
  }, [searchedFor]);

  const loadDataForSearchedText = () => {
    axios
      .get(`https://api.github.com/search/users?q=${searchedFor}`)
      .then((response) => {
        console.log(response.data);
        const userData = response.data.items;
        setUsersArray(userData);
        //now recieved data is set to setUsersArray
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <View>
      <CustomHeader searchedFun={searchedFun} value={searchedFor} />
      <UserBox usersArray={usersArray} value={searchedFor} />
    </View>
  );
};

export default LandingPageScreen;
