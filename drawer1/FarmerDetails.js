import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
export default function FarmerDetails({ navigation }) {
  return (
    <LinearGradient style={styles.container} colors={["#ffffff","#008FFF"]} start={{x:1,y:0.05}} end={{x:1,y:1}}>
      <Text style={styles.EP}> {"\u2B24"}   List of Farmers details:</Text>
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
    fontSize: 29,
    marginBottom: 400,
    fontWeight: "bold",
  },
  txt: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
  },
});
