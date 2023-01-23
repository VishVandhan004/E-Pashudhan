// E-PASHUDHAN INTRO PORTAL
import React from "react";
import { StyleSheet, Button, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function Intro({ navigation }) {
  return (
    <LinearGradient style={styles.container} colors={["#ffffff","#008FFF"]} start={{x:1,y:0.05}} end={{x:1,y:1}}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/images/Clogo.png")}
        />
        <Text style={styles.TopEP}>E-Pashudhan</Text>
      </View>
      <TouchableOpacity style={styles.buttonstyle}>
        <Text  onPress={() =>navigation.navigate("options")} style={styles.buttontext}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonstyle}>
        <Text  onPress={() =>navigation.navigate("s")} style={styles.buttontext}>SIGN UP</Text>
      </TouchableOpacity>
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
    marginBottom: 45,
    justifyContent: "center",
    marginHorizontal: 15,
    marginTop:20,
    borderRadius: 30,
  },
  buttontext: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  image: {
    width: 260,
    height: 260,
    alignSelf: "center",
  },
  TopEP: {
    margin: 45,
    fontWeight: "bold",
    fontSize: 45,
  },
  
});
