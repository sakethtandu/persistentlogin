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
isLoading = true;
  state = {
    email: '',
    otp: ""
  }

  getDataUsingGet() {
  //   if (isLoading == true){
  //   <ActivityIndicator size="large" color="#0000ff" />
  // isLoading = false  
  // }
    var emailId = this.state.email
    var url = "http://ec2-15-206-74-22.ap-south-1.compute.amazonaws.com:8080/swrmsdc/authentication/sendOTP?emailId=";
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
  onButtonClick(){
    //  const proxy = "https://cors-anywhere.herokuapp.com/"
    var url = "https://api.binance.com/api/v3/order/test?";
    var symbol = "symbol="+"LTCBTC"
    var side="side="+"BUY"
    var type="type="+"LIMIT"
    var timeInForce="timeInForce="+"GTC"
    var quantity="quantity="+"1"
    var price="price="+"0.00235"
    var recvWindow="recvWindow="+"60000"
    var timestamp="timestamp="+"1593370680000"
    var signature="signature="+"60acf71e6d7d6a3d0d175a466ea34b20ae6826641df45aa313a2206586922d64"
    var uri = url.concat(symbol+'&' + side+'&'+type+'&'+timeInForce+'&'+quantity+'&'+price+'&'+recvWindow+'&'+timestamp+'&'+signature);
    console.log("request body= "+uri)
  var url2 = "https://api.binance.com/api/v3/order/test?symbol=LTCBTC&side=BUY&type=LIMIT&timeInForce=GTC&quantity=1&price=0.00235&recvWindow=60000&timestamp=1593370910000&signature=d2b0576099282c13c25f0c584d940771feb2e8a652b2cce9677e1dacd40edc86"
    // var apiKey = "0zqKUnwLYVkf5PE6VsCHZskFdLcUXM2jxQROj0sIqtsvv0q2YhxcSsx3GlDh5SiL"
   var head = 'X-MBX-APIKEY:0zqKUnwLYVkf5PE6VsCHZskFdLcUXM2jxQROj0sIqtsvv0q2YhxcSsx3GlDh5SiL'
   
    //   axios.post({url2},{
    //   headers: {
    //     head,
    //   //  'X-MBX-APIKEY': '0zqKUnwLYVkf5PE6VsCHZskFdLcUXM2jxQROj0sIqtsvv0q2YhxcSsx3GlDh5SiL',
    //   }
    // })
  
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })
  // }
  fetch(url2, {
      method: 'POST',
      // mode: 'CORS',
  
      // mode: "no-cors",
     headers:{
    //    head,
      // 'Access-Control-Allow-Origin': '*',
  
      // 'Access-Control-Allow-Origin': 'http://localhost:3000/',
      //  Authorization:
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Headers': 'X-MBX-APIKEY:0zqKUnwLYVkf5PE6VsCHZskFdLcUXM2jxQROj0sIqtsvv0q2YhxcSsx3GlDh5SiL',
      // 'Access-Control-Allow-Origin': 'same-origin',
      // 'content-type':'application/json',
      // Authorization:{
   'X-MBX-APIKEY': '0zqKUnwLYVkf5PE6VsCHZskFdLcUXM2jxQROj0sIqtsvv0q2YhxcSsx3GlDh5SiL',
      }
    // }
  //Request Type 
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
  
        alert(JSON.stringify(responseJson));
        var res = responseJson
        console.log(res)
       
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