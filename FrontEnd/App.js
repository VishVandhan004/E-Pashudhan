import * as React from "react";
import FLogin from "../FrontEnd/login/FLogin";
import ALogin from "../FrontEnd/login/ALogin";
import CLogin from "../FrontEnd/login/CLogin";
import Signup from "../FrontEnd/signup/Signup";
import Intro from "../FrontEnd/screens/Intro";
import AboutUs from "../FrontEnd/drawer/AboutUs";
import Dashboard from "../FrontEnd/drawer/Dashboard";
import FPass from "../FrontEnd/login/FPass";
import ContactUs from "../FrontEnd/drawer/ContactUs";
import AddCattle from "../FrontEnd/drawer/AddCattle";
import Profile from "../FrontEnd/drawer/Profile";
import ADashboard from "../FrontEnd/drawer1/ADashboard";
import CustomersDetails from "../FrontEnd/drawer1/CustomersDetails";
import FarmerDetails from "../FrontEnd/drawer1/FarmerDetails";
import AboutUs1 from "../FrontEnd/drawer2/AboutUs1";
import CDashboard from "../FrontEnd/drawer2/CDashboard";
import ContactUs1 from "../FrontEnd/drawer2/ContactUs1";
import Options from "../FrontEnd/screens/Options";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useEffect } from "react";
// import axios from "axios";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const HomeTabsComp = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Add Cattle" component={AddCattle} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
    </Drawer.Navigator>
  );
};
const HomeTabsComp1 = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={ADashboard} />
      <Drawer.Screen name="Customers Details" component={CustomersDetails} />
      <Drawer.Screen name="Farmers Details" component={FarmerDetails} />
    </Drawer.Navigator>
  );
};
const HomeTabsComp2 = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={CDashboard} />
      <Drawer.Screen name="About Us" component={AboutUs1} />
      <Drawer.Screen name="Contact Us" component={ContactUs1} />
    </Drawer.Navigator>
  );
};
export default function App() {
  // const fetchApi = async () => {
  //   try {
  //     await axios.get("http://192.168.27.231:3000/");
  //     console.log(res.data);
  //   } catch (error) {
  //     cosole.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchApi();
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="i"
          component={Intro}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="options"
          component={Options}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="hometabcomps"
          component={HomeTabsComp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="hometabcomps1"
          component={HomeTabsComp1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="hometabcomps2"
          component={HomeTabsComp2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="s"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="l"
          component={FLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="l1"
          component={ALogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="l2"
          component={CLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="f"
          component={FPass}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
