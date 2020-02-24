import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import { Header } from 'react-native-elements';
import Discussion from './Discussion';
import { Actions } from 'react-native-router-flux';

export default class Post extends Component{
    /*static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        currentNumber: PropTypes.number.isRequired,
        desiredNumber: PropTypes.number.isRequired,
    }*/

    profileview() {
		Actions.profileview()
	}

    render(){
        const {data} = this.props
        //const { title, description, currentNumber, desiredNumber } = this.props;
        const title = data.title//"Post Title"
        const description = data.description//"This is the project description. It can be multiple lines long. It will probably be much longer than the one in the breif description on the post list page."
        const currentNumber = data.status.remaining//2
        const desiredNumber = data.status.total//5
        const lastEdit = new Date(data.date)//"Jan 31, 2020"
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
                <Header
                    leftComponent={{ icon: "arrow-back", color: "#fff", onPress: Actions.pop}}
                    centerComponent={{ text: "CS 4261", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                    backgroundColor="#2980b9"
                // centerContainerStyle={{: 'yellow'}}
                // rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View style={styles.container}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.numberText}>Members: {currentNumber}/{desiredNumber}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>

                    <View style={styles.bottomLine}>
                        <Text style={styles.descriptionText}>Last Edit: {lastEdit.getMonth()}/{lastEdit.getDate()}/{lastEdit.getFullYear()} {lastEdit.getHours()}:{lastEdit.getMinutes()}</Text>
                        <View style={styles.leaderPart}>
                            {/* <Text style={styles.leaderText}>{leader}</Text>  */}
                            <TouchableOpacity onPress={this.profileview}>
                            <Text style={styles.leaderText}>{leader}</Text> 
                            </TouchableOpacity>
                            
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
        borderBottomColor: "#BCE0FD",
        borderBottomWidth: 1,
    },
    titleText: {
        color: textColor,
        // fontFamily: 'serif',
        //fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 28,
    },
    numberText: {
        color: textColor,
        fontStyle: 'italic'
        // fontWeight: 'bold',
    },
    descriptionText: {
        marginTop: 10,
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
