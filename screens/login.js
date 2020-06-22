import React, { Component } from "react";
import { View , Text, Button, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Alert, Platform, AppRegistry} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import AsyncStorage from '@react-native-community/async-storage';
// import { signIn} from './signIn';
// import { home1} from './home1';
// import { otp} from './otp';
// import { AuthContext } from '../context';
export class login extends React.Component {
    
  //   pressHandler = () => {
  //    //navigation.navigate('ReviewDetails');
  //    const {navigate}=this.props.navigation;
  //    navigation.push('login');
  //  }

  state = {
    email: '',
    otp: ""
  }

  getDataUsingGet() {
    var emailId = this.state.email
    var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/authentication/sendOTP?emailId=";
    var url2 = url.concat(emailId);
    fetch(url2, {
      method: 'GET',

      //Request Type 
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {

        // alert(JSON.stringify(responseJson));
        var res = responseJson
        console.log(res)
        var userName = res.userName
        console.log("username "+userName)
        this.props.navigation.navigate('otp', {userName} )
      })


      //If response is not in json then in error
      .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
      });

  }

  signOut = async() => {
    // setUserToken(null);
    // setIsLoading(false);
    try {
      await AsyncStorage.removeItem('jwtToken');
      console.log("token removed")
    } catch(e) {
      console.log(e);
    }  
  }

  storeData = async (token) => {
    try {
      await AsyncStorage.setItem('jwtToken', "token")
      console.log("storeData is called ")
    } catch (e) {
      // saving error
    }
  }
  
  render(){
  return(
    // navigation.navigate('signIn')
    
      
<ScreenContainer>
<View style={styles.container}>
        <Text style={styles.logo}>krayans</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Mobile Number"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ email: text })}
          // keyboardType={'numeric'}
          />

        </View>
    {/* <Text>Login</Text> */}
    <TouchableOpacity onPress={() =>{ this.getDataUsingGet() }}  style={styles.loginBtn}>
    <Text style={styles.loginText}>Next</Text>
        </TouchableOpacity>
        </View >


    {/* <Button title = "Store Token Button" onPress={() => {storeData(); navigation.navigate('home1')}} /> */}

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