import React from 'react';
import {Button} from 'react-native-elements';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import Signup from './src/components/Signup/Signup';
import Login from './src/components/Login/Login';
import ProfileEdit1 from './src/components/ProfileEdit/ProfileEdit1';
import ProfileEdit2 from './src/components/ProfileEdit/ProfileEdit2';
import PostList from './src/components/PostList/PostList';

import Routes from './src/Routes';
import ProfileView from './src/components/ProfileView/ProfileView';

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Login/>
      </View>
    // <View style={styles.container}>
    //   <Text>TeamSpot</Text>
    //   <Button title = "LOGIN"/>
    //   <Button title = "SIGN UP"/>
    // </View>
    // <Signup />
    // <Login />
    // <Routes />
    // <ProfileEdit/>
    // <ProfileEdit/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
