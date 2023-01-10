import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function AboutUs1({ navigation }) {
  return (
    <LinearGradient style={styles.container} colors={["#ffffff","#ffc172"]} start={{x:1,y:0.05}} end={{x:1,y:1}}>
      <Text style = {styles.EP}>E-Pashudhan</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/cow.png")}
      />
      <Text style={styles.T}>
        E-Pashudhan is an online portal for diary farmers. Its a Mobile App used
        for online processing and registration of diary farmers producing milk
        and other livestock organically. This portal shall help the diary
        farmers to gain more information about the livestock and their produce,
        diary market trends and many more...
      </Text>
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
    margin: 35,
    borderRadius: 45,
    height: 200,
    width: 200,
  },
  T: {
    alignItems: "center",
    justifyContent: "center",
    margin: 24,
    fontSize: 19,
  },
  EP:{
     alignItems:"center",
     fontSize:40,
     fontWeight:"bold",
  },
});
