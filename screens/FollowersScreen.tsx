import React, { useEffect, useState } from "react";
import FollowersList from "../components/FollowersList";
import axios from "axios";
import { FollowersProps } from "../types";

const FollowersScreen = (props: FollowersProps) => {
  console.log(props.params);
  const userObject = { ...props.params };
  console.log(userObject);
  const [usersArray, setUsersArray] = useState([]);

  useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  const loadDataOnlyOnce = () => {
    if (props.clicked === "Followers") {
      axios
        .get(`${userObject.followersUrl}`)
        .then((response) => {
          console.log(response.data);
          const userData = response.data;
          setUsersArray(userData); //now recieved data is set to setUsersArray.
        })
        .catch((error) => {
          console.log(error.data);
        });
    } else {
      axios
        .get(`https://api.github.com/users/${userObject.name}/following`)
        .then((response) => {
          console.log(response.data);
          const userData = response.data;
          setUsersArray(userData); //now recieved data is set to setUsersArray.
        })
        .catch((error) => {
          console.log(error.data);
        });
    }
  };

  return <FollowersList usersArray={usersArray} clicked={props.clicked} />;
};

export default FollowersScreen;
