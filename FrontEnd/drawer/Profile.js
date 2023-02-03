import { LinearGradient } from "expo-linear-gradient";
import React, {useState} from "react";
import { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import details from "../login/FLogin";

// import axios from "axios";
// const baseUrl = "http://192.168.27.231:3000/login-user";
export default function Profile() {

  // const details = route.params.userDetails;
  return (
    <LinearGradient style={styles.container} colors={["#ffffff","#008FFF"]} start={{x:1,y:0.05}} end={{x:1,y:1}}>
      <Image
        style={styles.image}
        source={require("../assets/images/person.jpg")}
      />
<View>
      <Text style={styles.EP}>Farmer details:</Text>
      <Text>details : {details} </Text>

</View>
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
    fontSize: 19,
  },
});
