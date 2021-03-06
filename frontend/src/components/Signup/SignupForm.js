import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {
    login() {
        Actions.login()
    }

    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            cpassword: "",
        }
        this.gather = this.gather.bind(this)
        // this.initProfile = this.initProfile.bind(this)
        this.submit = this.submit.bind(this)
    }

    gather() {
        global.name = this.state.fname + " " + this.state.lname
        console.log("signupForm:", global.name)
        global.email = this.state.email
        global.password = this.state.password
        this.profileedit1()
    }

    // initProfile() {
    //     console.log("global.token:", global.token)
    //     const url = "https://secure-depths-39233.herokuapp.com/api/user/profile" 
    //     const body = {
    //         major: "CS",
    //         standing: "Freshman",
    //         intro: "Cool",
    //         skills: {
    //             technical: ["Java", "Python"],
    //             soft: ["public speaking", "problem solver"]
    //         },
    //         classTaken: ["CS1332", "CS4400"],
    //         linkedin: "https://www.linkedin.com"
    //         // major: "", 
    //         // standing: "", 
    //         // intro: "", 
    //         // skills: { 
    //         //     technical: ["skill1", "skill2"], 
    //         //     soft: ["skill1", "skill2"] }, 
    //         // classTaken: ["class1", "class2"], 
    //         // linkedin: "", 
    //         // github: ""
    //     }

    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': global.token, 
    //             },
	// 		body: JSON.stringify(body),
    //     }).then((response) => {
    //         // console.log(response.status)
    //         // console.log("profile api")
    //         // if (response.status == 200) {
    //         //     global.name = this.state.fname + " " + this.state.lname
    //         //     console.log("signupForm:", global.name)
    //         //     global.email = this.state.email
    //         //     global.password = this.state.password
    //         //     Actions.login()
    //         // }
    //         // console.log('checkpoint')
    //         console.log("submit_response",response)
    //         return response.json()
    //     }).then((data) => {
    //         console.log(data)
    //     })
    // }

    submit() {
        const url = "https://secure-depths-39233.herokuapp.com/api/user/register"
        const body = {
            name: this.state.fname + " " + this.state.lname,
            email: this.state.email,
            password: this.state.password
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
            // console.log("register api")
            // console.log("response.statue:", response.status)
            // if (response.status == 200) {
            //     // Actions.profileedit1()
            // }
            // console.log('signupform_submit:', response)
            return response.json()
        }).then((json) => {
            console.log(json)
            // console.log("json.token:",json.token)
			global.token = json.token
			global.userID = json.id
        })
        Actions.login()
        // this.initProfile()
        // this.gather()
    }

    profileedit1() {
        // Actions.gather()
        Actions.profileedit1()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TextInput
                        style={styles.smallInput}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText = {(text) => this.state.fname = text}
                        placeholder="First Name"
                        placeholderTextColor="#ffffff"
                        selectionColor="#fff"
                        keyboardType="default"
                        returnKeyType='next' />

                    <TextInput
                        style={styles.smallInput}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText = {(text) => this.state.lname = text}
                        placeholder="Last Name"
                        placeholderTextColor="#ffffff"
                        selectionColor="#fff"
                        keyboardType="default"
                        returnKeyType='next' />
                </View>

                <TextInput
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText = {(text) => this.state.email = text}
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    returnKeyType='next' />

                <TextInput
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText = {(text) => this.state.password = text}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    returnKeyType='next' />

                <TextInput
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText = {(text) => this.state.cpassword = text}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    returnKeyType='go' />

                <TouchableOpacity style={styles.buttonCountainer} onPress={this.submit}>
                    <Text style={styles.buttonText}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.submit}>
                    <Text
                        style={styles.signupText}>
                        Already have a new account? Login
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
        width: "36%",
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
        width: "77%",
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    buttonCountainer: {
        width: "77%",
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
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    }
});
