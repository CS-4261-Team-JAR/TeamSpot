import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
	signup() {
		Actions.signup()
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder="Email"
					placeholderTextColor="#ffffff"
					selectionColor="#fff"
					keyboardType="email-address"
					returnKeyType='next' />

				<TextInput
					style={styles.input}
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder="Password"
					secureTextEntry={true}
					placeholderTextColor="#ffffff"
					returnKeyType='go' />

				<TouchableOpacity style={styles.buttonCountainer}>
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
		backgroundColor: 'rgba(255, 255,255,0.2)',
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
