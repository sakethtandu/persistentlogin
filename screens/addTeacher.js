
import { StyleSheet, Button, TextInput,
  ScrollView, View, Text,TouchableWithoutFeedback, Keyboard ,Alert } from 'react-native';
//import { globalStyles } from '../styles/global.js';
import {globalStyles} from '../styles/global';
import { Formik } from 'formik';
//import React from 'react';
import React, { useState } from 'react';
import * as yup from 'yup';
import Card from '../shared/card';
console.disableYellowBox = true;
const reviewSchema = yup.object({
  fname: yup.string()
    .required()
    .min(4),
    lname: yup.string()
    .required()
    .min(4),
    createdBy: yup.string()
    .required(),
    email: yup.string()
    .required(),
    location: yup.string()
    .required(),
    role: yup.string()
    .required(),
    dob: yup.string()
    .required(),
    comments: yup.string()
    .required(),
    clsTeaf: yup.string()
    .required(),
    department: yup.string()
    .required(),
    
  address: yup.string()
    .required()
    .min(8),
  mobileNo: yup.string()
    .required()
    .test('is-num-1-5', 'Number must be 10 digit', (val) => {
      return val.length ==10 && parseInt(val) > 0;
    }),
    pincode: yup.string()
    .required()
    .test('is-num-1-5', 'Number must be 6 digit', (val) => {
      return val.length ==6 && parseInt(val) > 0;
    }),
});

export function ReviewForm({navigation}) {
 //console.log({navigation});
  return (
   
    <View style={globalStyles.container}>
      <ScrollView>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Formik scrollable
        initialValues={{ fname: '',lname:'',createdBy:'',email:'',mobileNo: '',location:'', address: '' ,
      pincode:'',role:'',dob:'',comments:'',clsTeaf:'',department:''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          // addReview(values);
          console.log(values);
        }}
      >
        {props => (
          <View>
            <Text>
              {/* {navigation.getParam('j')} */}
              {/* {navigation.getParam('j')} */}
              {/* {navigation.state.params} */}
              {/* {navigation.getParam('data').jwString} */}
              </Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Enter First Name'
              onChangeText={props.handleChange('fname')}
              value={props.values.fname}
            />
            <Text style={globalStyles.errorText}>{props.touched.fname && props.errors.fname}</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Enter Last Name'
              onChangeText={props.handleChange('lname')}
              value={props.values.lname}
            />
            <Text style={globalStyles.errorText}>{props.touched.lname && props.errors.lname}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Created By Id'
              onChangeText={props.handleChange('createdBy')}
              value={props.values.createdBy}
              keyboardType='numeric'
            />
<Text style={globalStyles.errorText}>{props.touched.createdBy && props.errors.createdBy}</Text>
<TextInput
              style={globalStyles.input}
              placeholder='Enter Email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
<Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
 <TextInput 
              style={globalStyles.input}
              placeholder='Mobile No'
              onChangeText={props.handleChange('mobileNo')}
              value={props.values.mobileNo}
              keyboardType='numeric'
            />
          <Text style={globalStyles.errorText}>{props.touched.mobileNo && props.errors.mobileNo}</Text>

          <TextInput
              style={globalStyles.input}
              placeholder='Enter location'
              onChangeText={props.handleChange('location')}
              value={props.values.location}
            />
<Text style={globalStyles.errorText}>{props.touched.location && props.errors.location}</Text>
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Address'
              onChangeText={props.handleChange('address')}
              value={props.values.address}
            />
            <Text style={globalStyles.errorText}>{props.touched.address && props.errors.address}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Pincode'
              onChangeText={props.handleChange('pincode')}
              value={props.values.pincode}
              keyboardType='numeric'
            />   
              <Text style={globalStyles.errorText}>{props.touched.pincode && props.errors.pincode}</Text>  
      <TextInput
              style={globalStyles.input}
              placeholder='Enter role'
              onChangeText={props.handleChange('role')}
              value={props.values.role}
            />
            <Text style={globalStyles.errorText}>{props.touched.role && props.errors.role}</Text>
      <TextInput
              style={globalStyles.input}
              placeholder='DOB as yyyy-mm-dd'
              onChangeText={props.handleChange('dob')}
              value={props.values.dob}
            />
            <Text style={globalStyles.errorText}>{props.touched.dob && props.errors.dob}</Text>
  <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Comments'
              onChangeText={props.handleChange('comments')}
              value={props.values.comments}
            />
<Text style={globalStyles.errorText}>{props.touched.comments && props.errors.comments}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Class Teacher for'
              onChangeText={props.handleChange('clsTeaf')}
              value={props.values.clsTeaf}
            />
<Text style={globalStyles.errorText}>{props.touched.clsTeaf && props.errors.clsTeaf}</Text>
<TextInput
              style={globalStyles.input}
              placeholder='Enter department'
              onChangeText={props.handleChange('department')}
              value={props.values.department}
            />   
            <Text style={globalStyles.errorText}>{props.touched.department && props.errors.department}</Text>    
            <Button color='maroon' title="Submit" onPress={()=>{props.handleSubmit;this.getDataUsingPost();}} /> 
          </View>
        )}
      </Formik>
      </TouchableWithoutFeedback>
      </ScrollView>
    </View>
    
  );
}
export default class App extends React.Component {
  getDataUsingPost() {
console.log('hii')
   // var password = this.state.otp
    var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/staff/createStaff/createdByStaff";
//console.log(values);
  //  var user = this.props.navigation.getParam('userName')
    const requestBody = this.values;
    // console.log(requestBody)
 var s='Bearer'+ global.token;

    fetch(url, {
      // method: 'POST',
      method: "POST",//Request Type 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':s
      },
      body: JSON.stringify(requestBody)
      // },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {

        // alert(JSON.stringify(responseJson));
        // console.log(responseJson);
        var res = responseJson
      //  var token = res.data.jwString
        // console.log(typeof (res.data.jwString))
        if (res.status == 200) {
          this.setState = { isLoading: false, }

        
console.log("response for add teacher"+res);
//console.log(res.data.jwString);
        // params: { sport: x },  this.props.navigation.navigate('Principal', res)
        //var item=1;
       // this.props.navigation.navigate('Principal',res );
        }
      })
  }
 render(){return(
 
 
<View style={globalStyles.container}>
      <ScrollView>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Formik scrollable
        initialValues={{ firstName: '',lastName:'',createdBy:'',emailId:'',phoneNumber: '',location:'', address: '' ,
      pincode:'',role:'',dob:'',comments:'',classTeacherFor:'',schoolDetails:{schoolId:'2'},department:''}}
        // validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          // addReview(values);
          console.log(values);
         // this.getDataUsingPost();
         var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/staff/createStaff/createdByStaff";
         //console.log(values);
           //  var user = this.props.navigation.getParam('userName')
             const requestBody = values;
             console.log(requestBody);
             // console.log(requestBody)
          var s='Bearer '+global.token;
         console.log(s);
             fetch(url, {
               // method: 'POST',
               method: "POST",//Request Type 
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization':s,
                 'schoolId':2
               },
               body: JSON.stringify(requestBody)
               // },
             })
               .then((response) => response.json())
               //If response is in json then in success
               .then((responseJson) => {
         
                 // alert(JSON.stringify(responseJson));
                 // console.log(responseJson);
                 var res = responseJson
               //  var token = res.data.jwString
                 // console.log(typeof (res.data.jwString))
                 if (res.status == 200) {
                //    this.setState = { isLoading: false, }
         
                Alert.alert("Succefully Added!");
         console.log(res);
                 }
            // <Button color='maroon' title="View" onPress={  this.props.navigation.navigate('moneyGenertaed',res)} />  
       //  this.props.navigation.navigate('moneyGenertaed',res)
        //  this.props.navigation.navigate('moneyGenertaed',res);
        //  <Card><Text>hello</Text></Card>
// {/* <Card><Text>{res.firstName}</Text></Card> */}
         //console.log(res.data.jwString);
                 // params: { sport: x },  this.props.navigation.navigate('Principal', res)
                 //var item=1;
                // this.props.navigation.navigate('Principal',res );
               //  }
               }).catch((error) => {
                //Error 
                alert(JSON.stringify(error));
                console.error(error);
              });
        }}
      >
        {props => (
          <View>
            <Text>
              {/* {navigation.getParam('j')} */}
              {/* {navigation.getParam('j')} */}
              {/* {navigation.state.params} */}
              {/* {navigation.getParam('data').jwString} */}
              </Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Enter First Name'
              onChangeText={props.handleChange('firstName')}
              value={props.values.firstName}
            />
            <Text style={globalStyles.errorText}>{props.touched.fname && props.errors.fname}</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Enter Last Name'
              onChangeText={props.handleChange('lastName')}
              value={props.values.lastName}
            />
            <Text style={globalStyles.errorText}>{props.touched.lname && props.errors.lname}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Created By Id'
              onChangeText={props.handleChange('createdBy')}
              value={props.values.createdBy}
              keyboardType='numeric'
            />
<Text style={globalStyles.errorText}>{props.touched.createdBy && props.errors.createdBy}</Text>
<TextInput
              style={globalStyles.input}
              placeholder='Enter Email'
              onChangeText={props.handleChange('emailId')}
              value={props.values.emailId}
            />
<Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
 <TextInput 
              style={globalStyles.input}
              placeholder='Mobile No'
              onChangeText={props.handleChange('phoneNumber')}
              value={props.values.phoneNumber}
              keyboardType='numeric'
            />
          <Text style={globalStyles.errorText}>{props.touched.mobileNo && props.errors.mobileNo}</Text>

          <TextInput
              style={globalStyles.input}
              placeholder='Enter location'
              onChangeText={props.handleChange('location')}
              value={props.values.location}
            />
<Text style={globalStyles.errorText}>{props.touched.location && props.errors.location}</Text>
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Address'
              onChangeText={props.handleChange('address')}
              value={props.values.address}
            />
            <Text style={globalStyles.errorText}>{props.touched.address && props.errors.address}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Pincode'
              onChangeText={props.handleChange('pincode')}
              value={props.values.pincode}
              keyboardType='numeric'
            />   
              <Text style={globalStyles.errorText}>{props.touched.pincode && props.errors.pincode}</Text>  
      <TextInput
              style={globalStyles.input}
              placeholder='Enter role'
              onChangeText={props.handleChange('role')}
              value={props.values.role}
            />
            <Text style={globalStyles.errorText}>{props.touched.role && props.errors.role}</Text>
      <TextInput
              style={globalStyles.input}
              placeholder='DOB as yyyy-mm-dd'
              onChangeText={props.handleChange('dob')}
              value={props.values.dob}
            />
            <Text style={globalStyles.errorText}>{props.touched.dob && props.errors.dob}</Text>
  <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Comments'
              onChangeText={props.handleChange('comments')}
              value={props.values.comments}
            />
<Text style={globalStyles.errorText}>{props.touched.comments && props.errors.comments}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Class Teacher for'
              onChangeText={props.handleChange('classTeacherFor')}
              value={props.values.classTeacherFor}
            />
<Text style={globalStyles.errorText}>{props.touched.clsTeaf && props.errors.clsTeaf}</Text>
<TextInput
              style={globalStyles.input}
              placeholder='Enter department'
              onChangeText={props.handleChange('department')}
              value={props.values.department}
            />   
            <Text style={globalStyles.errorText}>{props.touched.department && props.errors.department}</Text>    
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
            {/* <Button color='maroon' title="View" onPress={  this.props.navigation.navigate('moneyGenertaed',res)} />  */}
          </View>
        )} 
      </Formik>
      </TouchableWithoutFeedback>
      </ScrollView>
    </View>
    


 )}
}