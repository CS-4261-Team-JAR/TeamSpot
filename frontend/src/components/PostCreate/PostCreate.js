import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Button, Text, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PostCreate extends Component{
    /*static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        currentNumber: PropTypes.number.isRequired,
        desiredNumber: PropTypes.number.isRequired,
    }*/

    render(){
        //const { title, description, currentNumber, desiredNumber } = this.props;
        const title = "Post Title"
        const description = "This is the project description. It can be multiple lines long. It will probably be much longer than the one in the breif description on the post list page."
        const currentNumber = 2
        const desiredNumber = 5
        const lastEdit = "Jan 31, 2020"
        const leader = 'John Doe'
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
                    <Text style={styles.inputLabel}>Title</Text>
                    <TextInput style={styles.titleInput}></TextInput>

                    <Text style={styles.inputLabel}>Description</Text>
                    <TextInput style={styles.descriptionInput}></TextInput>

                    <View style={styles.sizeInput}>
                        <View style={styles.leftInput}>
                            <Text style={styles.inputLabel}>Current Members:</Text>
                            <TextInput style={styles.titleInput}></TextInput>
                        </View>
                        <View style={styles.rightInput}>
                            <Text style={styles.inputLabel}>Desired Members:</Text>
                            <TextInput style={styles.titleInput}></TextInput>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <Button title="Cancel" color="gray" onPress={Actions.pop()}/>
                        <Button title="Create"/>
                    </View>
                </View>
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
        marginTop: 40,
    },
    inputLabel: {
        marginTop: 10,
        marginBottom: 5,
        color: textColor,
        fontWeight: 'bold',
    },
    titleInput: {
        padding: 5,
        borderColor: "#BCE0FD",
        borderWidth: 1,
    },
    descriptionInput: {
        height: 200,
        padding: 5,
        textAlignVertical: 'top',
        borderColor: "#BCE0FD",
        borderWidth: 1,
    },
    sizeInput: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    leftInput: {

    },
    rightInput: {

    },
    buttonRow: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'stretch',
    },
});
