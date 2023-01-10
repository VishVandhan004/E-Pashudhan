import * as React from "react";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Intro from "./screens/Intro";
import AboutUs from "./drawer/AboutUs";
import Dashboard from "./drawer/Dashboard";
import FPass from "./login/FPass";
import ContactUs from "./drawer/ContactUs";
import AddCattle from "./drawer/AddCattle";
import Profile from "./drawer/Profile";
import ADashboard from"./drawer1/ADashboard";
import CustomerDetails from "./drawer1/CustomerDetails";
import FarmerDetails from "./drawer1/FarmerDetails";
import AboutUs1 from "./drawer2/AboutUs1";
import CDashboard from "./drawer2/CDashboard";
import ContactUs1 from "./drawer2/ContactUs1";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useEffect } from "react";
import axios from "axios";
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
      <Drawer.Screen name="Customer Details" component={CustomerDetails} />
      <Drawer.Screen name="Farmer Details" component={FarmerDetails} />
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
  const fetchApi = async () => { 
    try{
      await axios.get('http://192.168.27.231:3001/');
    console.log(res.data);
    }
    catch (error) {
      console.log(error.message);
    }
    };
    
    useEffect(() => {
      fetchApi()
    },[])
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
          component={Login}
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
