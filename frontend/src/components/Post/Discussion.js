import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

export default class Discussion extends Component{
    render(){
        return(
            // <View style = {styles.container}>
            <View style={styles.container}>
                <Text style={styles.titleText}>Discussion</Text>
                <IncomingMessage source='default' message='This looks interesting!'/>
                <OutgoingMessage source='default' message='You wanna join my team?'/>
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
        fontFamily: 'serif',
        //fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 22,
    },
    searchBar: {
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: "#BCE0FD",
        borderWidth: 1,
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
        color: 'white',
        backgroundColor: textColor,
        padding: 10,
        marginLeft: 10,
    },
    outgoingMessage: {
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'flex-end',
    },
    outgoingMessageText: {
        color: textColor,
        borderColor: textColor,
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
    },
});
