import { StyleSheet, View, Text,Button } from 'react-native';
// import { globalStyles } from '../styles/global';
import React from 'react';
import Card from '../shared/card';
export default function moneyGenerated({navigation}) {
    const pressHandler = () => {
        navigation.goBack();
      }
    
  return (
    <View style={styles.ff}>
    <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Text></Text>
          </View>
        <View style={{flex: 1, backgroundColor: 'white'}} >
          <Card  style={{backgroundColor:'skyblue'}}><Text  >hii</Text></Card>
          <Card style={styles.card1}><Text style={{justifyContent:"center"}}>hii</Text></Card>
          <Card style={styles.card1}><Text style={{justifyContent:"center"}}>hii</Text></Card>
          </View>
      </View>
    </View>
  );
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
})