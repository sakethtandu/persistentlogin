import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { View , Text, Button} from 'react-native';

import {createStackNavigator} from "@react-navigation/stack";
import { signIn} from './screens/signIn';
import {login} from './screens/login';

const authStack = createStackNavigator();
const token = "token";
// const token = null;

export default () =>(
<NavigationContainer> 
  <Text>
    token
  </Text>
<authStack.Navigator>
{ token !== null ? (
      <authStack.Screen name = "signIn" component = {signIn}/>
      )
    :
    <authStack.Screen name = "login" component = {login}/>
    }
     <authStack.Screen name = "login" component = {login}/>

 
</authStack.Navigator>
</NavigationContainer>
);

