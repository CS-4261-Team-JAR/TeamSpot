import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Signup extends Component{
    login() {
        Actions.login()
    }


    render(){
        return(
            // <View style = {styles.container}>
            <View style={styles.container}>
                <TextInput 
                    style = {styles.input}
                    placeholder = "Username"
                    returnKeyType = 'next'/>

                <TextInput 
                    style = {styles.input}
                    placeholder = "Password"
                    returnKeyType = 'next'/>

                <TextInput 
                    style = {styles.input}
                    placeholder = "Confirm Password"
                    returnKeyType = 'go'/>
                
                <TouchableOpacity style = {styles.buttonCountainer} onPress = {this.login}>
                    <Text style = {styles.buttonText}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 35,
        backgroundColor: 'rgba(255,255,255,1)',
        color: '#000000',
        margin: 10,
        marginBottom: 1,
        paddingHorizontal: 10
    },
    buttonCountainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        margin: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    } 
});
