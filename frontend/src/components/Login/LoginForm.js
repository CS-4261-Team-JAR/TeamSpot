import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Button } from 'react-native-elements';

export default class Login extends Component {
	// signup() {
	// 	Actions.signup()
	// }

	// postlist() {
	// 	Actions.postlist()
	// }

	constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.submit = this.submit.bind(this)
    }

    checkSubmission(body) {
        if (!body.email) {
            return "email required"
        }
        if (!body.password) {
            return "password required"
        }
        return successText
    }

    submit() {
        const url = "https://secure-depths-39233.herokuapp.com/api/user/login"
        const body = {
            email: this.state.email,
            password: this.state.password
        }

        const result = this.checkSubmission(body)
		Alert.alert(
			'Submission Issue',
			result,
			[
				{text: 'OK', onPress: () => console.log('Ok Pressed')},
			],
			{cancelable: true}
		);
		if (result != successText) {
			return
		}

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         },
		// 	body: JSON.stringify(body),
		// }).then((response) => Actions.postlist())
		fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
			body: JSON.stringify(body),
		}).then((response) => {
			return response.json()
		}).then(body => {
			console.log(body)
			if (response.status == 200) {
				return body
			} else {
				throw body
			}
		})
    }

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					onChangeText = {(text) => this.state.email = text}
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder="Email"
					placeholderTextColor="#ffffff"
					selectionColor="#fff"
					keyboardType="email-address"
					returnKeyType='next' />

				<TextInput
					style={styles.input}
					onChangeText = {(text) => this.state.password = text}
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder="Password"
					secureTextEntry={true}
					placeholderTextColor="#ffffff"
					returnKeyType='go' />

				<TouchableOpacity 
					onPress = {this.submit}
					style={styles.buttonCountainer}>
					<Text style={styles.buttonText}>
						LOGIN
                    </Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.signup}>
					<Text
						style={styles.signupText}>
						Create a new account? Signup
                    </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const successText = "Submission successful"

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 15,
	},
	input: {
		height: 45,
		width:"77%",
		backgroundColor: 'rgba(255, 255,255,0.4)',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: 16,
		color: '#ffffff',
		marginVertical: 10
	},
	buttonCountainer: {
		width:"77%",
		backgroundColor: '#1c313a',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 13
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center'
	},
	textInput: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700'
	},
	signupText: {
		color: 'rgba(255,255,255,0.6)',
		fontSize: 16
	}
});
