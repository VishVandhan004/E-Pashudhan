// E-PASHUDHAN INTRO PORTAL
import React from "react";
import { StyleSheet, Button, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function Options({ navigation }) {
  return (
    <LinearGradient style={styles.container} colors={["#ffffff","#ffc172"]} start={{x:1,y:0.05}} end={{x:1,y:1}}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/images/cow.png")}
        />
        <Text style={styles.TopEP}>E-Pashudhan</Text>
      </View>
      <TouchableOpacity style={styles.buttonstyle}>
        <Text  onPress={() =>navigation.navigate("l")} style={styles.buttontext}> FARMER </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonstyle}>
        <Text  onPress={() =>navigation.navigate("l1")} style={styles.buttontext}> ADMIN </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonstyle}>
        <Text  onPress={() =>navigation.navigate("l2")} style={styles.buttontext}> CUSTOMER </Text>
      </TouchableOpacity>
      {/* <Text
        style={styles.J}
        onPress={() => navigation.navigate("hometabcomps")}
      >
        {" "}
        Just want to Browse
      </Text>
      <Text
        style={styles.J}
        onPress={() => navigation.navigate("hometabcomps1")}
      >
        Admin
      </Text>
      <Text
        style={styles.J}
        onPress={() => navigation.navigate("hometabcomps2")}
      >
        Customer
      </Text> */}
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FC9D9A",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonstyle: {
    backgroundColor: "black",
    height: 50,
    width: 210,
    marginBottom: 40,
    justifyContent: "center",
    marginHorizontal: 15,
    marginTop:15,
    borderRadius: 30,
  },
  buttontext: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  B: {
    alignItems: "center",
    justifyContent: "space-between",
    margin: 35,
  },
  image: {
    width: 150,
    height: 150,
    margin: 9,
    alignSelf: "center",
    borderRadius: 50,
  },
  TopEP: {
    margin: 45,
    fontWeight: "bold",
    fontSize: 45,
  },
  J: {
    fontWeight: "bold",
    fontSize: 15,
    margin: 20,
  },
});
