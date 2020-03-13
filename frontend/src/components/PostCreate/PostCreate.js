import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image} from 'react-native';
import {KeyboardAvoidingView, Alert} from 'react-native'
import {createPost} from '../../Backend.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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

    checkSubmission(body) {
        if (!body.title) {
            return "Title required"
        }
        if (!body.description) {
            return "Description required"
        }
        if (body.status.remaining == null || body.status.remaining == '') {
            return "Current number of members required"
        }
        if (body.status.total == null || body.status.total == '') {
            return "Desired group size required"
        }
        if (body.status.total < body.status.remaining) {
            return "More members than desired group size"
        }
        if (body.status.remaining < 1 || body.status.total < 1) {
            return "At least one member required"
        }

        return successText
    }

    submit() {
        const url = "https://blooming-harbor-28361.herokuapp.com/posts"
        var tags = this.state.tags.split(',')
        tags.forEach(function(part, index, theArray) {
            theArray[index] = part.trim();
          });
        var members = []
        for (let step = 0; step < this.state.currentNumber; step++) {
            members.push("member" + step)
        }
        const body = {
            title: this.state.title,
            description: this.state.description,
            author: this.state.author,
            tags: tags,
            members: members,
            total: this.state.desiredNumber,
            /*status: {
                remaining: this.state.currentNumber,
                total: this.state.desiredNumber,
            }*/
        }

        var token
        if (!this.props.token) {
            token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU5YTEzYjlmZTBjZTRmODgwNjZmYTEiLCJpYXQiOjE1ODI5MzIyOTl9.-gMZBOmiD6l9orb2QoeoPqS6zhU8Cs-yvc2xTh-f3fI"
        } else {
            token = this.props.token
        }
        var courseid
        if (!this.props.courseid) {
            courseid = "5e59a15a9fe0ce4f88066fa2"
        } else {
            courseid = this.props.courseid
        }

        const result = successText//this.checkSubmission(body)
        //alert(result)
        if (result != successText) {
            Alert.alert(
                //title
                'Submission Issue',
                //body
                result,
                [
                  {text: 'Ok', onPress: () => console.log('Ok Pressed')},
                ],
                { cancelable: true }
                //clicking out side of alert will not cancel
              );
            return
        }

        /*fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(body),
        })*/
        createPost(token, courseid, body)
        .then((response) => Actions.postlist())
    }

    _scrollToInput (reactNode) {
        // Add a 'scroll' ref to your ScrollView
        this.scroll.props.scrollToFocusedInput(reactNode)
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
            <View style={styles.container} behavior="padding" enabled>
                <Header
                    leftComponent={{ icon: "arrow-back", color: "#fff", onPress: Actions.pop }}
                    centerComponent={{ text: "Create Post", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                    backgroundColor="#2980b9"
                />
                <KeyboardAwareScrollView
                    style={styles.forms}
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    enableAutomaticScroll = {true}
                    enableOnAndroid = {true}
                    extraScrollHeight = {30}
                    innerRef={ref => {
                        this.scroll = ref
                    }}
                >
                    <Text style={styles.inputLabel}>Title</Text>
                    <TextInput style={styles.titleInput} 
                        onChangeText={(text) => this.state.title = text}/>

                    <Text style={styles.inputLabel}>Description</Text>
                    <TextInput style={styles.descriptionInput}  multiline={true}
                        onChangeText={(text) => this.state.description = text}/>

                    <Text style={styles.inputLabel}>Tags (comma-separated)</Text>
                    <TextInput style={styles.titleInput} 
                    onChangeText={(text) => this.state.tags = text}/>

                    <View style={styles.sizeInput}>
                        <View style={styles.leftInput}>
                            <Text style={styles.inputLabel}>Current Members</Text>
                            <TextInput style={styles.titleInput}
                                onChangeText={(text) => this.state.currentNumber = text}/>
                        </View>
                        <View style={styles.rightInput}>
                            <Text style={styles.inputLabel}>Desired Group Size</Text>
                            <TextInput style={styles.titleInput}
                                onChangeText={(text) => this.state.desiredNumber = text}/>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <Button buttonStyle={styles.button} title="Cancel" type="outline" onPress={Actions.pop}/>
                        <Button buttonStyle={styles.button} title="Create" onPress={this.submit}/>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const successText = "Submission successful"

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
        width: '85%'
    }
});
