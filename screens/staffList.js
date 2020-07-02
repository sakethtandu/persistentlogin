import React, { Component } from 'react';
import { ListItem, SearchBar } from 'react-native-elements';

import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Alert,
  RefreshControl,
} from 'react-native';

export default class staffList extends Component {
  constructor(props) {
    super(props);
    //True to show the loader
    this.arrayholder = [];

    this.state = { refreshing: true };
    //Running the getData Service for the first time
    this.GetData();

    
  }

  GetData = () => {
    //Service to get the data from the server to render
    const url = "http://ec2-15-206-74-22.ap-south-1.compute.amazonaws.com:8080/swrmsdc/staff/getAllStaffDetails";

    return fetch(url, {
      headers: {
        'Authorization': "Bearer " + global.token,
        'schoolId': '1',
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        this.setState({
          refreshing: false,
          //Setting the data source for the list to render
         
          dataSource: responseJson.data
        });
        this.arrayholder = responseJson.data;
      })
     

      .catch(error => {
        console.error(error);
      });
  };
  ListViewItemSeparator = () => {
    return (
      //returning the listview item saparator view
      <View
        style={{
          height: 0.2,
          width: '90%',
          backgroundColor: '#808080',
        }}
      />
    );
  };
  onRefresh() {
    //Clear old data of the list
    this.setState({ dataSource: [] });
    //Call the Service to get the latest data
    this.GetData();
  }
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
      const itemData = `${item.firstName.toUpperCase()} ${item.lastName.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
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
      //Returning the ListView
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          enableEmptySections={true}
          keyExtractor={item => item.emailId}

          renderItem={({item}) => (
            <ListItem
              title={`${item.firstName} ${item.lastName}`}
              subtitle={item.emailId}
              
            />
          )}
          refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}

        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
  },
  rowViewContainer: {
    fontSize: 20,
    padding: 10,
  },
});
