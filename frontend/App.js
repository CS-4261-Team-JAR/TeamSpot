import React from 'react';
import {Button} from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './src/components/Signup/Signup';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>TeamSpot</Text>
    //   <Button title = "LOGIN"/>
    //   <Button title = "SIGN UP"/>
    // </View>
    <Signup />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
