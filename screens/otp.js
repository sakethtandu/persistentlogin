import React, { Component } from "react";
import { View , Text, Button, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Alert, Platform, AppRegistry} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import AsyncStorage from '@react-native-community/async-storage';
import { signIn} from './signIn';
import { home1} from './home1';
import { login} from './login';
// import MainTabScreen from './MainTabScreen';
import HomeScreen from './HomeScreen';


export class otp extends React.Component {
  
  state = {
    otp: ""
  }

  getDataUsingGet() {
    var password = this.state.otp
    var url = "http://ec2-15-206-74-22.ap-south-1.compute.amazonaws.com:8080/swrmsdc/authentication/verifyOTP";
    const {userName} = this.props.route.params
    var requestBody = { userName: userName, password: password }


    fetch(url, {
      // method: 'POST',
      method: "POST",//Request Type 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        var res = responseJson
        var token = res.data.jwString
        if (res.status == 200) {
          
          this.setState = { isLoading: false, }

          this.storeData(token)
          // this.storeData(userRole)
          console.log(res);
       
          this.props.navigation.navigate('home1',{screen: 'signIn'},res );
        }
      })

  }

  
  storeData = async ( token) => {
    try {
      await AsyncStorage.setItem('jwtToken', token);
      // await AsyncStorage.setItem('userRole', userRole);
      console.log("storeData is called  "+token)
    } catch (e) {
      // saving error
    }
  }
  
  render(){
    
  return(
    
      
<ScreenContainer>
<View style={styles.container}>
        <Text style={styles.logo}>krayans</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="otp"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ otp: text })}
          keyboardType={'numeric'}
          />

        </View>
    <TouchableOpacity onPress={() =>{ this.getDataUsingGet() }}  style={styles.loginBtn}>
    <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        </View >
</ScreenContainer>
      
);
  }
};

const styles = StyleSheet.create({
  ff: {
    backgroundColor: '#003f5c',
  },
  container: {
    // flex: 1,
    // flexDirection: 'column',
    height: "100%",
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
    marginBottom: 40
  },
  logo1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});





