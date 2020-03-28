import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {addToDiscussion} from '../../Backend.js'
import Icon from "react-native-vector-icons/Ionicons";

export default class Discussion extends Component{
    static propTypes = {
        data: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            discussion: props.data.discussion,
            message: "",
        }

        this.sendMessage = this.sendMessage.bind(this)
    }

    renderDiscussion = discussion => {
        return (
            <View>
                {discussion.map(item => {
                    if (item.user == global.userID) {
                        return (
                            <OutgoingMessage source='default' message={item.message} key={item.user + item.message}/>
                        )
                    } else {
                        return (
                            <IncomingMessage source='default' message={item.message} key={item.user + item.message}/>
                        )
                    }
                })}
            </View>
        )
    }

    sendMessage() {
        //alert(this.state.message)
        if (this.state.message.length > 0) {
            addToDiscussion(this.props.data._id, this.state.message)
                .then(json => this.setState(
                    {
                        discussion: json.discussion, 
                        message: "",
                    }))
        }
    }

    render(){
        return(
            // <View style = {styles.container}>
            <View style={styles.container}>
                <Text style={styles.titleText}>Discussion</Text>
                {this.renderDiscussion(this.state.discussion)}
                {/*<IncomingMessage source='default' message='This looks interesting!'/>
                <OutgoingMessage source='default' message='You wanna join my team?'/>*/}
                <View style={styles.inputLine}>
                    <TextInput style={styles.discussionInput} 
                        placeholder="Say Something"
                        placeholderTextColor="#BCE0FD"
                        onChangeText={(text) => this.state.message = text}>
                        {this.state.message}
                    </TextInput>
                    <TouchableOpacity
                        style={styles.addIcon} 
                        onPress={this.sendMessage}>
                        <Icon name="md-arrow-forward" size={30} color={textColor} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class IncomingMessage extends Component {
    static propTypes = {
        source: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    }

    render(){
        const { source, message } = this.props;
        //const leaderProfileLocation = '../../images/defaultProfile.png'
        var profile
        if (source.startsWith('http')) {
            profile = <Image source={{uri: source}} style={styles.profileImage}/>
        } else {
            profile = <Image source={require('../../images/defaultProfile.png')} style={styles.profileImage}/>
        }
        return(
            <View style={styles.incomingMessage}>
                {profile}
                <Text style={styles.incomingMessageText}>{message}</Text>
            </View>
        )
    }
}

class OutgoingMessage extends Component {
    static propTypes = {
        source: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    }

    render(){
        const { source, message } = this.props;
        var profile
        if (source.startsWith('http')) {
            profile = <Image source={{uri: source}} style={styles.profileImage}/>
        } else {
            profile = <Image source={require('../../images/defaultProfile.png')} style={styles.profileImage}/>
        }
        return(
            <View style={styles.outgoingMessage}>
                <Text style={styles.outgoingMessageText}>{message}</Text>
                {profile}
            </View>
        )
    }
}

const textColor = '#2699FB'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 20,
    },
    titleText: {
        color: textColor,
        // fontFamily: 'serif',
        //fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 22,
    },
    discussionInput: {
        padding: 5,
        borderColor: "#BCE0FD",
        borderWidth: 1,
        flex: 5,
    },
    inputLine: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        //marginTop: 20,
    },
    addIcon: {
        flex: 1,
        alignItems: 'center',
        /*borderWidth: 1,
        borderColor: 'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 60,
        backgroundColor: '#4C99CD',
        borderRadius: 100,*/
    },
    profileImage: {
        height: 30,
        width: 30,
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    incomingMessage: {
        marginTop: 20,
        flexDirection: 'row',
    },
    incomingMessageText: {
        color: textColor,
        borderColor: textColor,
        borderWidth: 1,
        padding: 10,
        marginLeft: 10,
    },
    outgoingMessage: {
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'flex-end',
    },
    outgoingMessageText: {
        color: 'white',
        backgroundColor: textColor,
        padding: 10,
        marginRight: 10,
        marginLeft: 150
    },
});
