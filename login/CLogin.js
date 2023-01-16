// E- PASHUDHAN CUSTOMER LOGIN PORTAL
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function CLogin({ navigation }){
return (
        <LinearGradient style={styles.container} colors={["#ffffff", "#ffc172"]} start={{ x: 1, y: 0.05 }} end={{ x: 1, y: 1 }}>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/images/cow.png")} />
            <Text style={styles.TopEP}>Customer Login</Text>
          </View>
          <View style={styles.UContainer}>
            <Text>Enter your Username</Text>
            <TextInput style={styles.textInput} placeholder="ABC@1234" />
          </View>
          <View style={styles.PContainer}>
            <Text>Enter your Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="XXXXXX"
              secureTextEntry={true} />
          </View>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.txt} onPress={() => navigation.navigate("hometabcomps2")}>LOGIN</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.stext} onPress={() => navigation.navigate("f")}>Forgot Password??</Text>
          </View>
          <View>
            <Text style={styles.stext} onPress={() => navigation.navigate("s")}>New User?? SignUp Here</Text>
          </View>
        </LinearGradient>
      );
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#A8E6CE",
        alignItems: "center",
        justifyContent: "center",
      },
      buttonstyle: {
        backgroundColor: "black",
        height: 38,
        width: 100,
        justifyContent: "center",
        marginHorizontal: 10,
        marginTop: 5,
        borderRadius: 30,
      },
      txt: {
        fontSize: 13,
        textAlign: "center",
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      TopEP: {
        margin: 25,
        fontWeight: "bold",
        fontSize: 33,
      },
      UContainer: {
        flexDirection: "column",
        margin: 14,
      },
      PContainer: {
        flexDirection: "column",
        margin: 15,
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "80%",
        padding: 7,
        margin: 20,
        borderRadius: 20,
        borderColor: "black",
        alignSelf: "center",
      },
      image: {
        width: 150,
        height: 150,
        margin: 25,
        alignSelf: "center",
        borderRadius: 45,
      },
      stext: {
        fontWeight: "bold",
        margin: 35,
      },
    });
