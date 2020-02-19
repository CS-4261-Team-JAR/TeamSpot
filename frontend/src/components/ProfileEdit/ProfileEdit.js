import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import ProfileEditForm from './ProfileEditForm';

export default class ProfileEdit extends Component{
    render(){
        return(
            // <View style = {styles.container}>
            <View style={styles.container}>
                {/* <View style = {styles.logoContainer}>
                    <Image 
                    styles = {styles.logo}
                    source = {require('../../images/Image1.png')}></Image>
                </View> */}
                <View style = {styles.formContainer}>
                    <ProfileEditForm/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#93c8e7',
        justifyContent: 'center'
        
    },
    formContainer: {
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center'
        // flexGrow: 1,
        // justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }
});