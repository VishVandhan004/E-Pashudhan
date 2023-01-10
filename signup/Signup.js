// E- PASHUDHAN SIGNUP PORTAL
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import client from '../api/client';
export default  function Signup() {
    const signup1 = () => (
      client.post('/register-user')

    )
  
      return (
        <LinearGradient
          style={styles.container}
          colors={["#ffffff", "#ffc172"]}
          start={{ x: 1, y: 0.05 }}
          end={{ x: 1, y: 1 }}
        >
          <ScrollView>
            <View>
              <Image
                style={styles.image}
                source={require("../assets/images/cow.png")} />
              <Text style={styles.TopEP}>E-Pashudhan SignUp</Text>
            </View>
            <View style={styles.Container}>
              <Text>Enter your Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="                              ABCD" />
            </View>
            <View style={styles.Container}>
              <Text>Enter your Phone Number</Text>
              <TextInput
                style={styles.textInput}
                placeholder="                    XXXXXXXXXX" />
            </View>
            <View style={styles.Container}>
              <Text>Enter your State</Text>
              <TextInput
                style={styles.textInput}
                placeholder="                            State" />
            </View>
            <View style={styles.Container}>
              <Text>Enter your District</Text>
              <TextInput style={styles.textInput} placeholder="                           District" />
            </View>
            <View style={styles.Container}>
              <Text>Enter your House No</Text>
              <TextInput style={styles.textInput} placeholder="                           House No" />
            </View>
            <View style={styles.Container}>
              <Text>Create a Username</Text>
              <TextInput
                style={styles.textInput}
                placeholder="                        ABCD@1234" />
            </View>
            <View style={styles.Container}>
              <Text>Create a Password</Text>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="                             XXXXXX" />
            </View>
            <View style={styles.Container}>
              <Text>Re enter the Password</Text>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="                             XXXXXX" />
            </View>
            <TouchableOpacity style={styles.buttonstyle}>
              <Text
                onPress={signup1}
                style={styles.buttontext}
              >
                SIGN UP
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </LinearGradient>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD3B5",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonstyle: {
    alignItems: "center",
    backgroundColor: "black",
    height: 50,
    width: 210,
    marginBottom: 40,
    justifyContent: "center",
    marginHorizontal: 60,
    marginTop: 15,
    borderRadius: 30,
  },
  buttontext: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  TopEP: {
    margin: 15,
    fontWeight: "bold",
    fontSize: 32,
  },
  Container: {
    flexDirection: "column",
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 7,
    margin: 10,
    borderRadius: 20,
    borderColor: "black",
    alignSelf: "center",
  },
  image: {
    width: 150,
    height: 150,
    margin: 40,
    alignSelf: "center",
    borderRadius: 55,
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
