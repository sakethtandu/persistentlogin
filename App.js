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
import SplashScreen from './screens/SplashScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from './screens/RootStackScreen';
import moneyGenerated from './screens/moneyGenerated';

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
    global.jwtToken =  this.getData().then(value => global.token =value)
      }
      
		 getData = async () => {
			try {
			  const value = await AsyncStorage.getItem('jwtToken')
			  if(value !== null) {
				console.log("getData in App is called " + value)
				return value
				// value previously stored
			  }
			  else{
				  console.log('value is null')
			  }
			} catch(e) {
			  // error reading value
			}
		  }

  
  componentDidMount() {
    AsyncStorage.getItem('jwtToken').then((token) => {
      this.setState({ jwtToken: token !== null })
      console.log("jwtToken  "+this.state.jwtToken)
      
    })
  }

  
  
render() {
    return (
      <PaperProvider>
    <NavigationContainer value = {AuthContext}>
      {   this.state.jwtToken !== false ? (
        <Drawer.Navigator>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="Sign In" component={signIn} />
          <Drawer.Screen name="Home" component={home} />
          <Drawer.Screen name="moneyGenerated" component={moneyGenerated} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          <Drawer.Screen name="login" component={login} options={{headerShown:false}} />
        </Drawer.Navigator>
      )
    :
    <authStack.Navigator>
          <authStack.Screen name="login" component={login} options={{headerShown:false}} />
          <authStack.Screen name="login1" component={login1} />
          <authStack.Screen name="home1" component={home1} />
          <authStack.Screen name="otp" component={otp} options={{headerShown:false}}/>
        </authStack.Navigator>
}
    </NavigationContainer>
</PaperProvider>
    );
}
}
