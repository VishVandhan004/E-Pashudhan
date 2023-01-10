import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
export default function FPass({ navigation }) {
  return (
    <ScrollView>
    <LinearGradient style={styles.container} colors={["#ffffff","#ffc172"]} start={{x:1,y:0.05}} end={{x:1,y:1}}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/images/cow.png")}
        />
        <Text style={styles.TopEP}>Forgot Password</Text>
      </View>
      <View style={styles.Epassword}>
        <Text>Enter your Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="ABCD1234@gmail.com"
        />
      </View>
      <View style={styles.Epassword}>
        <Text>Enter the OTP </Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="         XXXX"
        />
      </View>
      <View style={styles.Rpassword}>
        <Text> Create a new Password</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="            XXXX"
        />
      </View>
      <View style={styles.Rpassword}>
        <Text> Re-enter the new Password</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="               XXXX"
        />
      </View>
      <TouchableOpacity style={styles.buttonstyle}>
        <Text style={styles.txt} onPress={() => navigation.navigate("l")}>SET</Text>
      </TouchableOpacity>
    </LinearGradient>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC172",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonstyle: {
    backgroundColor: "black",
    height: 38,
    width: 100,
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop:5,
    borderRadius: 30,
  },
  txt:{
    fontSize: 13,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  TopEP: {
    margin: 5,
    fontWeight: "bold",
    fontSize: 33,
  },
  Epassword: {
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
  },
  Rpassword: {
    alignItems:"center",
    flexDirection: "column",
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 7,
    margin: 13,
    borderRadius: 20,
    borderColor: "black",
    alignSelf: "center",
  },
  image: {
    width: 150,
    height: 150,
    margin: 50,
    alignSelf: "center",
    borderRadius: 45,
  },
});
