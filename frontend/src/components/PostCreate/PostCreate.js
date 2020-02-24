import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, KeyboardAvoidingView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Button } from 'react-native-elements';

export default class PostCreate extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            title: "", 
            description: "", 
            author: "Amiel",
            tags: "",
            currentNumber: "",
            desiredNumber: "",
        }

        this.submit = this.submit.bind(this)
    }
    /*static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        currentNumber: PropTypes.number.isRequired,
        desiredNumber: PropTypes.number.isRequired,
    }*/

    submit() {
        const url = "https://blooming-harbor-28361.herokuapp.com/posts"
        var tags = this.state.tags.split(',')
        tags.forEach(function(part, index, theArray) {
            theArray[index] = part.trim();
          });
        const body = {
            title: this.state.title,
            description: this.state.description,
            author: this.state.author,
            tags: tags,
            status: {
                remaining: this.state.currentNumber,
                total: this.state.desiredNumber,
            }
        }
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(body),
        }).then((response) => Actions.postlist())
    }

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
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Header
                    leftComponent={{ icon: "arrow-back", color: "#fff", onPress: Actions.pop }}
                    centerComponent={{ text: "Create Post", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                    backgroundColor="#2980b9"
                />
                <View style={styles.forms}>
                    <Text style={styles.inputLabel}>Title</Text>
                    <TextInput style={styles.titleInput} 
                        onChangeText={(text) => this.state.title = text}/>

                    <Text style={styles.inputLabel}>Description</Text>
                    <TextInput style={styles.descriptionInput}
                        onChangeText={(text) => this.state.description = text}/>

                    <Text style={styles.inputLabel}>Tags</Text>
                    <TextInput style={styles.titleInput} 
                    onChangeText={(text) => this.state.tags = text}/>

                    <View style={styles.sizeInput}>
                        <View style={styles.leftInput}>
                            <Text style={styles.inputLabel}>Current Members:</Text>
                            <TextInput style={styles.titleInput}
                                onChangeText={(text) => this.state.currentNumber = text}/>
                        </View>
                        <View style={styles.rightInput}>
                            <Text style={styles.inputLabel}>Desired Members:</Text>
                            <TextInput style={styles.titleInput}
                                onChangeText={(text) => this.state.desiredNumber = text}/>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <Button buttonStyle={styles.button} title="Cancel" type="outline" onPress={Actions.pop}/>
                        <Button buttonStyle={styles.button} title="Create" onPress={this.submit}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const textColor = '#2699FB'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    forms: {
        padding: 20,
        paddingTop: 10,
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
        marginTop: 65,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        borderRadius: 10,
        marginVertical: 10,
        width: '90%'
    }
});
