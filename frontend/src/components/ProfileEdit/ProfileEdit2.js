import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Text} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import ProfileEditForm2 from './ProfileEditForm2';
import { Actions } from 'react-native-router-flux';
import { Input } from 'react-native-elements';

export default class ProfileEdit2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Tskill: "",
            Sskill: "",
            class: ""            
        }
        this.gather = this.gather.bind(this)
        this.submit = this.submit.bind(this)    
    }

    gather() {
        console.log("profileEdit2:", global.major)
        global.Tskill = this.state.Tskill
        global.Sskill = this.state.Sskill
        global.class = this.state.class
        Actions.login()
    }

    submit() {
        const url = "https://secure-depths-39233.herokuapp.com/api/user/register"
        const body = {
            name: global.name,
            email: global.email,
            major: global.major,
            year: global.year,
            aboutMe: global.aboutMe,
            

        }
        console.log(body.name)  
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
			body: JSON.stringify(body),
        }).then((response) => {
            if (response.status == 200) {
                Actions.profileedit1()
            }
            return response.text()
        }).then(text => {
            console.log(text)
        })

    }

    postlist() {
        Actions.postlist()
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.formContainer}>
                    <Text style={styles.logo}>TeamSpot</Text>
                        <View style={styles.content}>
                            <Input
                                inputContainerStyle={styles.inputContainer}
                                label="Technical Skills"
                                onChangeText = {(text) => this.state.Tskill = text}
                                labelStyle={styles.inputLabel}
                                placeholder='Please enter your technical skills'
                                selectionColor="#fff"
                                returnKeyType='next'
                            />

                            <Input
                                inputContainerStyle={styles.inputContainer}
                                label="Soft Skills"
                                onChangeText = {(text) => this.state.Sskill = text}
                                labelStyle={styles.inputLabel}
                                placeholder='Please enter your soft skills'
                                selectionColor="#fff"
                                returnKeyType='next'
                            />

                            <Input
                                inputContainerStyle={styles.inputContainer}
                                label="Class Taken"
                                onChangeText = {(text) => this.state.class = text}
                                labelStyle={styles.inputLabel}
                                placeholder='Please enter class you have taken'
                                selectionColor="#fff"
                                returnKeyType='none'
                            />
                        </View>
                    </View>
                <TouchableOpacity 
                    style={styles.fowardIcon} 
                    onPress={this.gather}>
                    <Icon name="md-checkmark" size={30} color="#4C99CD" />
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