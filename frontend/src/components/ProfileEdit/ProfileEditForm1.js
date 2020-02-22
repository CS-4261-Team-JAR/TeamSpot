import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from 'react-native-elements';

export default class ProfileEditForm1 extends Component {
    render() {
        return (
            <View style={styles.container} enabled>
                <View>
                    <Text style={styles.logo}>TeamSpot</Text>

                    <View style={styles.content}>
                        <Input
                            inputContainerStyle={styles.inputContainer}
                            label="MAJOR"
                            labelStyle={styles.inputLabel}
                            placeholder='Please enter your major'
                            selectionColor="#fff"
                            returnKeyType='next'
                        />

                        <Input
                            inputContainerStyle={styles.inputContainer}
                            label="Year"
                            labelStyle={styles.inputLabel}
                            placeholder='Please enter your year'
                            selectionColor="#fff"
                            returnKeyType='next'
                        />

                        <Input
                            inputContainerStyle={styles.inputContainer}
                            label="About Me"
                            labelStyle={styles.inputLabel}
                            placeholder='Please introduce yourself'
                            selectionColor="#fff"
                            returnKeyType='none'
                        />
                    </View>
                </View>
            </View>
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
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
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
