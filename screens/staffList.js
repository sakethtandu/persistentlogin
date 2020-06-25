import { StyleSheet, View, Text,Button ,TouchableOpacity} from 'react-native';
// import { globalStyles } from '../styles/global';
import React, { Component } from 'react';
import Card from '../shared/card';
import { render } from 'react-dom';
export default class staffList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: "",
      name: ""
    };
  }
  // componentDidMount() {

getDataUsingGet(){
        // var emailId = this.state.email
        // var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/class/getClassList";
        // var url2 = url.concat(emailId);
        var url = "https://api.test.datacite.org/providers/caltech/dois?page[size]=2"
        fetch(url, {
          method: 'GET',
          headers: {
            // 'Authorization': "Bearer" + global.token,
            // 'schoolId':2
          },
          //Request Type 
        })
          .then((response) => response.json())
          //If response is in json then in success
          .then((responseJson) => {
    
            this.setState({                                // ++++
              dataSource: responseJson                     // ++++
            });       
            console.log("response"); 
            console.log(this.state.dataSource.data[0].attributes.creators[0].name)
            this.setState({                                // ++++
              name : this.state.dataSource.data[0].attributes.creators[0].name                     // ++++
            }); 
           })
    
    
          //If response is not in json then in error
          .catch((error) => {
            //Error 
            alert(JSON.stringify(error));
            console.error(error);
          });
    
      // } 
    }    
render(){
      return (
    
    <View style={styles.ff}>
    <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Text></Text>
          <TouchableOpacity onPress={() =>{ this.getDataUsingGet() }}  style={styles.loginBtn}>
    <Text style={styles.loginText}>Retrieve</Text>
        </TouchableOpacity>
          </View>
        <View style={{flex: 1, backgroundColor: 'white'}} >

      <Card  style={{backgroundColor:'skyblue'}}><Text>Name: {this.state.name}</Text></Card>
          <Card style={styles.card1}><Text style={{justifyContent:"center"}}>hii</Text></Card>
          <Card style={styles.card1}><Text style={{justifyContent:"center"}}>hii</Text></Card>
          </View>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  ff: {
    flex: 1,
   
    justifyContent:"center"
  },
  card1: {
    borderRadius: 6,
    elevation: 3,
    height:20,
    padding:10,
    backgroundColor: 'steelblue',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
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
})