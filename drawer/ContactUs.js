import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
export default function ContactUs({ navigation }) {
  return (
    <LinearGradient style={styles.container}colors={["#ffffff","#ffc172"]} start={{x:1,y:0.05}} end={{x:1,y:1}}>
      <Image
        style={styles.image}
        source={require("../assets/images/cow.png")}
      />
      <Text style={styles.Data}>
         In case of any queries, you can contact us via the information given below...{"\n"}
        {"\n"}
        {"\u2B24"}  Phone : +91XXXXXXXXXX {"\n"}{"\n"}
        {"\u2B24"}  Email: XXXXXX123@gmail.com {"\n"}{"\n"}
        {"\u2B24"}  Website : www.epashudhan.gov.in {"\n"}{"\n"}
        {"\u2B24"}  Facebook : epashudhan {"\n"}{"\n"}
        {"\u2B24"}  Instagram : epashudhan {"\n"}{"\n"}
        {"\u2B24"}  Twitter : epashudhan {"\n"}
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
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    borderRadius: 45,
    height: 175,
    width: 175,
  },
  Data: {
    alignSelf: "center",
    justifyContent: "center",
    margin: 40,
    fontSize: 18,
  },
});
