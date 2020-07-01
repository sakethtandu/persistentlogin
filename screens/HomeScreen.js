import React from 'react';
import { View, Text,Image, Button, ScrollView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Card from '../shared/card';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <ScrollView>
      <View style={{ flex:1, backgroundColor: 'powderblue'}}>
      <Text style= {{justifyContent:"center"}}>Saketh </Text><Image   style={{ width: 300, height: 150 , marginLeft: 50 , marginBottom:10,}} source={require('../assets/Webp.net-resizeimage.png')} />
  
      </View>
    <View style={{flex: 1,  width: 300, height: 150 }}>
    </View>
    <View>
        {/* <Card style={styles.card1}><Text style={{justifyContent:"center"}}>hii</Text></Card> */}
  <Text style={{textAlign:'center'}}>Saketh </Text><Image   style={{ width: 300, height: 150 , marginLeft: 50 , marginRight: 10}} source={require('../assets/Webp.net-resizeimage.png')} />
  <Card  ><Text style= {{justifyContent:"center"}}>Saketh </Text><Image   style={{ width: 300, height: 150 }} source={require('../assets/Webp.net-resizeimage.png')} /></Card> 
  <Card  ><Image   style={{ width: 300, height: 150 }} source={require('../assets/Webp.net-resizeimage.png')} /></Card> 
  <Card  ><Image   style={{ width: 300, height: 150 }} source={require('../assets/Webp.net-resizeimage.png')} /></Card> 
  <Card  ><Image   style={{ width: 300, height: 150 }} source={require('../assets/Webp.net-resizeimage.png')} /></Card> 
  <Card  ><Image   style={{ width: 300, height: 150 }} source={require('../assets/Webp.net-resizeimage.png')} /></Card> 
  <Card  ><Image   style={{ width: 300, height: 150 }} source={require('../assets/Webp.net-resizeimage.png')} /></Card> 
  <Card  ><Image   style={{ width: 300, height: 150 }} source={require('../assets/Webp.net-resizeimage.png')} /></Card> 
          </View>
           
      
    
    </ScrollView>
        );
      
  
};

export default HomeScreen;





const styles = StyleSheet.create({
  ff: {
    flex: 1,
   
    justifyContent:"center"
  },
  card1: {
    borderRadius: 6,
    elevation: 1,
    height:20,
    padding:10,
    backgroundColor: '#003f5c',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 2,
    marginVertical: 3,
  },
})
