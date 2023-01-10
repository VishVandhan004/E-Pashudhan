import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image, Button, TextInput } from "react-native";
export default function AddCattle({ navigation }) {
  return (
    <LinearGradient style={styles.container} colors={["#ffffff","#ffc172"]}>
      <Image
        style={styles.image}
        source={require("../assets/images/cow.png")}
      />
      <View style={styles.UContainer}>
        <Text>Enter the quantity of milk you have (in Litres..): </Text>
        <TextInput style={styles.textInput} placeholder="XXXX" />
        <Text>Enter the amount of cattle you have (in No's...): </Text>
        <TextInput style={styles.textInput} placeholder="XXXX" />
      </View>
      <Button style={styles.T} color="black" title="ADD"/>
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
    marginTop: 1,
    margin: 40,
    borderRadius: 45,
    height: 180,
    width: 180,
  },
  UContainer: {
    flexDirection: "column",
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 7,
    margin: 20,
    borderRadius: 20,
    borderColor: "black",
    alignSelf: "center",
  },
  
});
