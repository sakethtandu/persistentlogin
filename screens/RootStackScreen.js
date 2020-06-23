import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import login from './login';
import login1 from './login1';
// import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
     <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
    <RootStack.Screen name="login" component={login}/>
    <RootStack.Screen name="login1" component={login1}/>
        {/* <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/> */}
    </RootStack.Navigator>
);

export default RootStackScreen;