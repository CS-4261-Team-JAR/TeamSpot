import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import Discussion from './Discussion';

export default class Post extends Component{
    /*static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        currentNumber: PropTypes.number.isRequired,
        desiredNumber: PropTypes.number.isRequired,
    }*/

    render(){
        const {data} = this.props
        //const { title, description, currentNumber, desiredNumber } = this.props;
        const title = data.title//"Post Title"
        const description = data.description//"This is the project description. It can be multiple lines long. It will probably be much longer than the one in the breif description on the post list page."
        const currentNumber = data.remaining//2
        const desiredNumber = data.total//5
        const lastEdit = data.date.slice(0, 10)//"Jan 31, 2020"
        const leader = data.author//'John Doe'
        const leaderProfileLocation = '../../images/defaultProfile.png'
        var leaderProfile
        if (leaderProfileLocation.startsWith('http')) {
            leaderProfile = <Image source={{uri: leaderProfileLocation}} style={styles.profileImage}/>
        } else {
            leaderProfile = <Image source={require('../../images/defaultProfile.png')} style={styles.profileImage}/>
        }
        return(
            <View>
                <View style={styles.container}>
                    <Text style={styles.numberText}>Members: {currentNumber}/{desiredNumber}</Text>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.descriptionText}>{description}\n</Text>

                    <View style={styles.bottomLine}>
                        <Text style={styles.descriptionText}>Last Edit: {lastEdit}</Text>
                        <View style={styles.leaderPart}>
                            <Text style={styles.leaderText}>{leader}</Text>
                            {leaderProfile}
                        </View>
                    </View>
                </View>

                <Discussion/>
            </View>
        );
    }

    /*getImage(imageLocation) {
        if (imageLocation.startsWith('http')) {
            return (<Image source={{uri: imageLocation}} style={styles.profileImage}/>)
        } else {
            return (<Image source={require('../../images/defaultProfile.png')} style={styles.profileImage}/>)
        }
    }*/
}

const textColor = '#2699FB'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50,
        borderBottomColor: "#BCE0FD",
        borderBottomWidth: 1,
    },
    titleText: {
        color: textColor,
        fontFamily: 'serif',
        //fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 28,
    },
    numberText: {
        color: textColor,
        fontWeight: 'bold',
    },
    descriptionText: {
        color: textColor,
        lineHeight: 24,
    },
    bottomLine: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 20,
    },
    leaderPart: {
        flexDirection: 'row',
    },
    leaderText: {
        color: textColor,
        fontSize: 16,
        marginRight: 10,
    },
    profileImage: {
        height: 30,
        width: 30,
    }
});
