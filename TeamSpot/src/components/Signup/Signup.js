import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import SignupForm from './SignupForm';

export default class Signup extends Component{
    render(){
        return(
            // <View style = {styles.container}>
            <View style={styles.container}>
                <View style = {styles.logoContainer}>
                    <Image 
                    styles = {styles.logo}
                    source = {require('../../images/Image1.png')}></Image>
                </View>
                <View style = {styles.formContainer}>
                    <SignupForm/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3399FF'
        
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }
});
