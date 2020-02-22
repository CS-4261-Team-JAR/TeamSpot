import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {
    login() {
        Actions.login()
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TextInput
                        style={styles.smallInput}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="First Name"
                        placeholderTextColor="#ffffff"
                        selectionColor="#fff"
                        keyboardType="default"
                        returnKeyType='next' />

                    <TextInput
                        style={styles.smallInput}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Last Name"
                        placeholderTextColor="#ffffff"
                        selectionColor="#fff"
                        keyboardType="default"
                        returnKeyType='next' />
                </View>

                <TextInput
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    returnKeyType='next' />

                <TextInput
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    returnKeyType='next' />

                <TextInput
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    returnKeyType='go' />

                <TouchableOpacity style={styles.buttonCountainer} onPress={this.login}>
                    <Text style={styles.buttonText}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    smallInput: {
        height: 45,
        width:"36%",
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    input: {
        height: 45,
        width:"77%",
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    buttonCountainer: {
        width:"77%",
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    row: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 65,
        justifyContent: "space-between",
    },
});
