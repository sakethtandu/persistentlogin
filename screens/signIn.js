import React from 'react';
import { View , Text, Button} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
// import { login} from './screens/signIn';
import { AuthContext } from '../context';

export const signIn = ({navigation}) => {


  return(
<ScreenContainer>

    <Text>SignIn</Text>
    <View>
      <Text>
        This is a Signin Screen!
      </Text>
    </View>
    <Button title = "SignIn Button" onPress={() => navigation.navigate('login1')} />
    {/* <Button title = "SignIn Button" onPress={() => {signIn()}} /> */}
</ScreenContainer>
  
);
  };