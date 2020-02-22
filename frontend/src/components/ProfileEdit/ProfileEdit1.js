import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import ProfileEditForm from './ProfileEditForm1';

export default class ProfileEdit extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.formContainer}>
                    <ProfileEditForm />
                </View>
                <TouchableOpacity style={styles.fowardIcon} >
                    <Icon name="md-arrow-forward" size={30} color="#4C99CD" />
                </TouchableOpacity>
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
    fowardIcon: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 100,
    }
});