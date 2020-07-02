

import React from 'react';
import {
  RefreshControl, StyleSheet, Text, SafeAreaView, Image, View, FlatList, Dimensions, ToastAndroid
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

const enappdIcon = require('../assets/icon.png');
const widthConst = Dimensions.get('screen').width;

export default function staffList () {
  
  const initialData = []
  const [refreshing, setRefreshing] = React.useState(false);
  const [listData, setListData] = React.useState(initialData);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (listData.length < 10) {
      try {
        const url = "http://ec2-15-206-74-22.ap-south-1.compute.amazonaws.com:8080/swrmsdc/staff/getAllStaffDetails";
        let response = await fetch(
          url,{
          headers: {
                  'Authorization': "Bearer " + global.token,
                  'schoolId': '1',
                }}
        );
        let responseJson = await response.json();
        console.log(responseJson);
        setListData(responseJson.data);
        setRefreshing(false)
      } catch (error) {
        console.error(error);
      }
    }
    else{
      ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      setRefreshing(false)
    }
  }, [refreshing]);

  function Item({ title, image }) {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{title}</Text>
      </View>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({ item }) => <Item title={`${item.firstName} ${item.lastName}`} subtitle={item.lastName} />}
        
        keyExtractor={item => item.emailId}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.list}
      />
     
            

     
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  scrollView: {
    flex: 1, backgroundColor: '#eeeeee',
  },
  list: {
    alignItems: 'flex-start', justifyContent: 'flex-start', width: widthConst, flex: 1
  },
  enappdWrapper: {
    position: 'absolute',  bottom: 0
  },
  enappdIcon: {
    width: 100, height: 40
  },
  item: {
    flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 20, paddingTop: 20
  },
  thumbnail: {
    width: 60, height: 60, borderWidth: 1, borderColor: '#aaa'
  },
  itemText: {
    paddingTop: 5, paddingLeft: 10, fontSize: 18
  }
});