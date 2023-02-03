// E- PASHUDHAN SIGNUP PORTAL
import React, { useState, useEffect } from "react";
import { RadioButton } from 'react-native-paper';
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
import Constants from "expo-constants";
import axios from "axios";
// college LAN
const baseUrl = "http://192.168.27.231:3000/register-user";
// home LAN
// const baseUrl = "http://192.168.1.6:3000/register-user";

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [district, setDistrict] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [role, setRole] = useState("farmer");
  const [createdUsername, setCreatedUsername] = useState("");
  const [createdPassword, setCreatedPassword] = useState("");
  // const { details } = route.params;


  const onChangeNameHandler = (name) => {
    setName(name);
  };
  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };
  const onChangeHouseNoHandler = (houseNo) => {
    setHouseNo(houseNo);
  };
  const onChangeDistrictHandler = (district) => {
    setDistrict(district);
  };
  const onChangeStateAddressHandler = (stateAddress) => {
    setStateAddress(stateAddress);
  };
  const onChangePostalCodeHandler = (postalCode) => {
    setPostalCode(postalCode);
  };
  const onChangePhoneNoHandler = (phoneNo) => {
    setPhoneNo(phoneNo);
  };
  const onChangeCreatedUsernameHandler = (createdUsername) => {
    setCreatedUsername(createdUsername);
  };
  const onChangeCreatedPasswordHandler = (createdPassword) => {
    setCreatedPassword(createdPassword);
  };
  
  const onSubmitFormHandler = async (event) => {
    if (!name.trim() || !email.trim() || !houseNo.trim() || !district.trim() || !stateAddress.trim() || !postalCode.trim() || !phoneNo.trim() || !createdUsername.trim() || !createdPassword.trim()) {
      alert("Invalid Credentials");
      return;
    }
    try {
      const response = await axios.post(baseUrl, {
        name,
        email,
        houseNo,
        district,
        stateAddress,
        postalCode,
        phoneNo,
        role,
        createdUsername,
        createdPassword,
      });

      if(response.data) {
        navigation.navigate("options");
      }
      if (response.data.success) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        // console.log(` You have created: ${JSON.stringify(response.data)}`);
        setName("");
        setEmail("");
        setHouseNo("");
        setDistrict("");
        setStateAddress("");
        setPostalCode("");
        setPhoneNo("");
        setRole("farmer");
        setCreatedPassword("");
        setCreatedPassword("");
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["#ffffff", "#008FFF"]}
      start={{ x: 1, y: 0.05 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/images/Clogo.png")}
          />
          <Text style={styles.TopEP}>E-Pashudhan SignUp</Text>
        </View>
        <View style={styles.Container}>
          <Text>Enter your Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="                              ABCD"
            value={name}
            onChangeText={onChangeNameHandler}
          />
        </View>
        <View style={styles.Container}>
          <Text>Enter your email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="                         xyz@email.com"
            value={email}
            onChangeText={onChangeEmailHandler}
          />
        </View>
        <View>
          <Text>Enter your Address</Text>
          <View style={styles.Container}>
            <TextInput
              style={styles.textInput}
              placeholder="                           House No"
              value={houseNo}
              onChangeText={onChangeHouseNoHandler}
            />
          </View>
          <View style={styles.Container}>
            <TextInput
              style={styles.textInput}
              placeholder="                           District"
              value={district}
              onChangeText={onChangeDistrictHandler}
            />
          </View>
          <View style={styles.Container}>
            <TextInput
              style={styles.textInput}
              placeholder="                            State"
              value={stateAddress}
              onChangeText={onChangeStateAddressHandler}
            />
          </View>
          <View style={styles.Container}>
            <TextInput
              style={styles.textInput}
              placeholder="                            Postal Code"
              value={postalCode}
              onChangeText={onChangePostalCodeHandler}
            />
          </View>
        </View>
        <View style={styles.Container}>
          <Text>Enter your Phone Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="                    XXXXXXXXXX"
            value={phoneNo}
            onChangeText={onChangePhoneNoHandler}
          />
        </View>
        <View>
          <Text>Choose your role</Text>
          <RadioButton  
          value="farmer"
          status={ role === 'farmer' ? 'checked' : 'unchecked' }
          onPress={() => setRole('farmer')} 
          /> 
          <Text>Farmer</Text>
          <RadioButton 
        value="admin"
        status={ role === 'admin' ? 'checked' : 'unchecked' }
        onPress={() => setRole('admin')}
        />
        <Text>Admin</Text>
          <RadioButton
        value="customer"
        status={ role === 'customer' ? 'checked' : 'unchecked' }
        onPress={() => setRole('customer')}
        />
        <Text>Customer</Text>
        </View>
        {/* <RadioForm radio_props={items} initial = {value} onPress =  */}
        <View style={styles.Container}>
          <Text>Create a Username</Text>
          <TextInput
            style={styles.textInput}
            placeholder="                        ABCD@1234"
            value={createdUsername}
            onChangeText={onChangeCreatedUsernameHandler}
          />
        </View>
        <View style={styles.Container}>
          <Text>Create a Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="                             XXXXXX"
            value={createdPassword}
            onChangeText={onChangeCreatedPasswordHandler}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonstyle}>
          <Text style={styles.buttontext} 
          onPress={onSubmitFormHandler}
          >SIGN UP</Text>
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
