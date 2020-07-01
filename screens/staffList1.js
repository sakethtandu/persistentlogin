import { StyleSheet, View, Text,Button ,TouchableOpacity, ActivityIndicator} from 'react-native';
// import { globalStyles } from '../styles/global';
import React, { Component } from 'react';
import Card from '../shared/card';
import { render } from 'react-dom';
export default class staffList1 extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dataSource: "",
      name: "",
      
    };
  }

  
  
  

  // componentDidMount() {

getDataUsingGet(){
  
        var url = "http://ec2-15-206-74-22.ap-south-1.compute.amazonaws.com:8080/swrmsdc/staff/getAllStaffDetails";
        fetch(url, {
          method: 'GET',
          //Request Type 
          headers: {
          'Authorization': "Bearer " + global.token,
          'schoolId': '1',
          }
        })
          .then((response) => response.json())
          //If response is in json then in success
          .then((responseJson) => {
    
            this.setState({                                // ++++
              dataSource: responseJson                     // ++++
            });
            console.log(this.state.dataSource.data[0].firstName); 
       
            // console.log("response"); 
            // console.log(this.state.dataSource.data[0].attributes.creators[0].name)
            this.setState({                                // ++++
              name : this.state.dataSource.data[0].firstName,
              phoneNumber : this.state.dataSource.data[0].phoneNumber,
                                 // ++++
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
          <TouchableOpacity onPress={() =>{this.getDataUsingGet()}}  style={styles.loginBtn}>
    <Text style={styles.loginText}>Retrieve</Text>
        </TouchableOpacity>
          </View>
        <View style={{flex: 1, backgroundColor: 'white'}} >

      <Card  style={{backgroundColor:'skyblue'}}><Text>Name: {this.state.name}</Text></Card>
      <Card  style={{backgroundColor:'skyblue'}}><Text>Phone Number: {this.state.phoneNumber}</Text></Card>
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

///

import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default FlatListDemo;
