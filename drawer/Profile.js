import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import axios from "axios";
const baseUrl = "http://192.168.1.6:3000/login-user";
export default function Profile({ navigation }) {
  // const fetchUser = async () => {
  //   const configurationObject = {
  //     method: 'get',
  //     url: `${baseUrl}/api/users/1`,
  //   };
  //   const response = await axios(configurationObject);
  //   console.log(response.data);
  // };
  // Invoking get method to perform a GET request
  const fetchUser = async () => {
    const url = `${baseUrl}`;
    const response = await axios.get(url);
    console.log(response.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  
  return (
    <LinearGradient style={styles.container} colors={["#ffffff","#008FFF"]} start={{x:1,y:0.05}} end={{x:1,y:1}}>
      <Image
        style={styles.image}
        source={require("../assets/images/person.jpg")}
      />
      <Text style={styles.EP}>Farmer details:</Text>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    height: 170,
    width: 170,
    margin: 5,
    borderRadius: 50,
  },
  EP: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    margin: 90,
    fontWeight: "bold",
  },
  txt: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 5,
  },
});
