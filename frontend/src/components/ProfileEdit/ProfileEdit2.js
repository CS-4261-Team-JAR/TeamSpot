import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import ProfileEditForm2 from './ProfileEditForm2';

export default class ProfileEdit2 extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.formContainer}>
                    <ProfileEditForm2 />
                </View>
                <TouchableOpacity style={styles.fowardIcon} >
                    <Icon name="md-checkmark" size={30} color="#4C99CD" />
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