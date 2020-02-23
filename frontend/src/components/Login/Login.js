import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/logo.png')}
                    />
                </View>
                <Text style={styles.logoText}>Welcome to TeamSpot.</Text>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C99CD',
        justifyContent: 'center'

    },
    formContainer: {
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoText: {
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    logo: {
        width: 120,
        height: 120,
    }
});
