import React, { Component , useEffect} from "react";

import { NavigationContainer} from "@react-navigation/native";
import { View , Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from "@react-navigation/stack";
import { signIn} from './screens/signIn';
import {login} from './screens/login';
import {home} from './screens/home';
import {home1} from './screens/home1';
import {otp} from './screens/otp';
import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from './screens/RootStackScreen';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import {login1} from './screens/login1';
import {AuthContext} from './context'

const authStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends Component {
  
  constructor(){
    super();
    this.state = { jwtToken: false };
    // this.state = { userRole: false };

  }
  componentDidMount() {
    AsyncStorage.getItem('jwtToken').then((token) => {
      this.setState({ jwtToken: token !== null })
      console.log("jwtToken  "+this.state.jwtToken)
      
    })
  }
  
  // componentDidMount() {
  //   // AsyncStorage.getItem('jwtToken').then((token) => {
  //   //   this.setState({ jwtToken: token !== null })
  //     AsyncStorage.getItem('userRole').then((role) => {
  //       this.setState({ userRole: role !== null })
  //     // console.log(this.state.jwtToken)
  //     console.log("role  "+this.state.userRole)
  //   })
  // }
   
  
 


render() {
    return (
      <PaperProvider>
    <NavigationContainer>
      {   this.state.jwtToken !== false ? (
        <Drawer.Navigator>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="Sign In" component={signIn} />
          <Drawer.Screen name="Home" component={home} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
      )
    :
    <authStack.Navigator>
          <Drawer.Screen name="login" component={login} />
          <Drawer.Screen name="login1" component={login1} />
          <Drawer.Screen name="home1" component={home1} />
          <Drawer.Screen name="otp" component={otp} />
        </authStack.Navigator>
}
    </NavigationContainer>
</PaperProvider>
    );
}
}
