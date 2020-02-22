import React, { Component } from 'react';
import { StyleSheet, View, Text,KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Input } from 'react-native-elements';

export default class ProfileEditForm2 extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.logo}>TeamSpot</Text>

                <View style={styles.content}>
                    <Input
                        inputContainerStyle={styles.inputContainer}
                        label="Technical Skills"
                        labelStyle={styles.inputLabel}
                        placeholder='Please enter your technical skills'
                        selectionColor="#fff"
                        returnKeyType='next'
                    />

                    <Input
                        inputContainerStyle={styles.inputContainer}
                        label="Soft Skills"
                        labelStyle={styles.inputLabel}
                        placeholder='Please enter your soft skills'
                        selectionColor="#fff"
                        returnKeyType='next'
                    />

                    <Input
                        inputContainerStyle={styles.inputContainer}
                        label="Class Taken"
                        labelStyle={styles.inputLabel}
                        placeholder='Please enter class you have taken'
                        selectionColor="#fff"
                        returnKeyType='none'
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
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
    },
    textInput: {
        // width:"100%",
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
        // justifyContent: 'center'
        // alignItems: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontWeight: '700'
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        textAlign: 'center',
        marginVertical: 15,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    inputContainer: {
        borderBottomColor: '#ffffff',
    },
    inputLabel: {
        marginTop: 15,
        color: '#ffffff'
    }
});
