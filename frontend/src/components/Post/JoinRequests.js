import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAvoidingView, Alert} from 'react-native'
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/Ionicons";

export default class JoinRequests extends Component{
    static propTypes = {
        requests: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props)
    }

    getName(user) {
        if (user.name) {
            nameMap[user._id] = user.name
            return user.name
        } else if (nameMap[user]) {
            return nameMap[user]
        } else {
            return user
        }
    }

    renderRequests = requests => {
        return (
            <View>
                {requests.map((item, i) => {
                    return (
                        <Request source='default' name={item.name} id={item._id}/>
                    )
                })}
            </View>
        )
    }

    render(){
        return(
            // <View style = {styles.container}>
            <View style={styles.container}>
                <Text style={styles.titleText}>Join Requests:</Text>
                {this.renderRequests(this.props.data)}
            </View>
        );
    }
}

var nameMap = {}

class Request extends Component {
    static propTypes = {
        source: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)

        this.consider_decline = this.consider_decline.bind(this)
        this.decline = this.decline.bind(this)
        this.consider_accept = this.consider_accept.bind(this)
        this.accept = this.accept.bind(this)
    }

    consider_decline() {
        Alert.alert(
            //title
            'Are you sure?',
            //body
            'Do you really want to decline ' + this.props.name + "'s request to join?",
            [
              {text: 'No', onPress: () => console.log('No Pressed')},
              {text: 'Yes', onPress: () => this.decline()},
            ],
            { cancelable: true }
            //clicking out side of alert will not cancel
          );
    }

    decline() {

    }

    consider_accept() {
        Alert.alert(
            //title
            'Are you sure?',
            //body
            'Do you really want to accept ' + this.props.name + "'s request to join?",
            [
              {text: 'No', onPress: () => console.log('No Pressed')},
              {text: 'Yes', onPress: () => this.accept()},
            ],
            { cancelable: true }
            //clicking out side of alert will not cancel
          );
    }

    accept() {

    }

    render(){
        const { source, name, id } = this.props;
        //const leaderProfileLocation = '../../images/defaultProfile.png'
        var profile
        if (source.startsWith('http')) {
            profile = <Image source={{uri: source}} style={styles.profileImage}/>
        } else {
            profile = <Image source={require('../../images/defaultProfile.png')} style={styles.profileImage}/>
        }

        return(
            <View style={styles.requestRow}>

                {profile}
                <Text style={styles.requestName}>{name}</Text>
                <TouchableOpacity
                    style={styles.icon} 
                    onPress={this.consider_decline}>
                    <Icon name="md-close" size={30} color="red" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon} 
                    onPress={this.consider_accept}>
                    <Icon name="md-checkmark" size={30} color="green" />
                </TouchableOpacity>
            </View>
        )
    }
}

const textColor = '#2699FB'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        //padding: 20,
    },
    titleText: {
        color: textColor,
        // fontFamily: 'serif',
        //fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 22,
    },
    profileImage: {
        height: 30,
        width: 30,
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    requestRow: {
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center'
    },
    requestName: {
        color: textColor,
        padding: 10,
        marginLeft: 10,
    },
    icon: {
        marginLeft: 20,
    }
});
