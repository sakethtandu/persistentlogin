import React, { Component } from "react";
import { NavigationContainer} from "@react-navigation/native";
import { View , Text, Button} from 'react-native';

import {createStackNavigator} from "@react-navigation/stack";
import { signIn} from './screens/signIn';
import {login} from './screens/login';
import {login1} from './screens/login1';

const authStack = createStackNavigator();
const token = "token";
// const token = null;

global.SampleVar
export default class App extends Component {
  render() {
    return (
<NavigationContainer> 
  <Text>
    token
  </Text>
<authStack.Navigator>
{ global.SampleVar !== undefined ? (
      <authStack.Screen name = "signIn" component = {signIn}/>
      )
    :
    <authStack.Screen name = "login1" component = {login1}/>
    }
     <authStack.Screen name = "login" component = {login}/>

 
</authStack.Navigator>
</NavigationContainer>
    );
}
}
