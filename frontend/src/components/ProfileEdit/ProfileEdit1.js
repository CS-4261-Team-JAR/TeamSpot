import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import ProfileEditForm from './ProfileEditForm1';
import { Actions } from 'react-native-router-flux';
import { Input } from 'react-native-elements';

export default class ProfileEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            major: "",
            year: "",
            aboutMe: ""
        }
        this.gather = this.gather.bind(this)
    }

    gather() {
        console.log("profileEdit1:",global.token)
        // console.log("profileEdit1:",global.year)
        // console.log("profileEdit1:",global.aboutMe)
        global.major = this.state.major
        global.year = this.state.year
        global.aboutMe = this.state.aboutMe
        console.log("profileEdit1:",global.year)
        console.log("profileEdit1:",global.aboutMe)
        this.profileedit2()
    }

    

    profileedit2() {
        // console.log(global.name)
        // global.major = this.state.major
        // global.year = this.state.year
        // global.aboutMe = this.state.aboutMe
        Actions.profileedit2()
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                {/* <View style={styles.formContainer}> */}
                <View style={styles.container} enabled>
                    <View>
                        <Text style={styles.logo}>TeamSpot</Text>

                        <View style={styles.content}>
                            <Input
                                inputContainerStyle={styles.inputContainer}
                                label="MAJOR"
                                onChangeText = {(text) => this.state.major = text}

                                labelStyle={styles.inputLabel}
                                placeholder='Please enter your major'
                                selectionColor="#fff"
                                returnKeyType='next'
                            />

                            <Input
                                inputContainerStyle={styles.inputContainer}
                                label="Year"
                                onChangeText = {(text) => this.state.year = text}
                                labelStyle={styles.inputLabel}
                                placeholder='Please enter your year'
                                selectionColor="#fff"
                                returnKeyType='next'
                            />

                            <Input
                                inputContainerStyle={styles.inputContainer}
                                label="About Me"
                                onChangeText = {(text) => this.state.aboutMe = text}
                                labelStyle={styles.inputLabel}
                                placeholder='Please introduce yourself'
                                selectionColor="#fff"
                                returnKeyType='none'
                            />
                        </View>
                    </View>
            {/* </View> */}
                </View>
                <TouchableOpacity 
                    style={styles.fowardIcon} 
                    onPress={this.gather}>
                    <Icon name="md-arrow-forward" size={30} color="#4C99CD" />
                </TouchableOpacity>
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
    },
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