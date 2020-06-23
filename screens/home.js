import React from 'react';
import { View , Text, Button} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
// import { signIn} from './signIn';
import { AuthContext } from '../context';
import AsyncStorage from '@react-native-community/async-storage';
import {login} from './login';

export const home = ({navigation}) => {
  signOut = async() => {
    try {
      await AsyncStorage.removeItem('jwtToken');
      console.log("token has been removed")
    } catch(e) {
      console.log(e);
    }  
  }
  return(
    // navigation.navigate('signIn')
      
<ScreenContainer>

    <Text>Home</Text>
    moneyGenerated
    <Button title = "Home Button" onPress={() => {navigation.navigate('signIn')}} />
    <Button title = "SignOut Button" onPress={() => {signOut(); navigation.navigate('login')}} />


</ScreenContainer>
      
);
  };