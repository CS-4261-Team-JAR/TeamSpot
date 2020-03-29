import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image} from 'react-native';
import {KeyboardAvoidingView, Alert} from 'react-native'
import PropTypes from 'prop-types';
import {editPost, deletePost} from '../../Backend.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux';
import { Header, Button } from 'react-native-elements';

export default class PostEdit extends Component{
    static propTypes = {
        data: PropTypes.object.isRequired,
        courseid: PropTypes.string.isRequired,
        coursetitle: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)
        let data = this.props.data
        var tags = data.tags[0] ? data.tags[0] : ""
        for (var i = 1; i < data.tags.length; i++) {
            tags += ", " + data.tags
        }
        
        this.state = { 
            title: data.title, 
            description: data.description, 
            author: "Amiel",
            tags: tags,
            currentNumber: data.members.length,
            desiredNumber: data.total,
        }

        this.submit = this.submit.bind(this)
        this.consider_delete = this.consider_delete.bind(this)
        this.delete = this.delete.bind(this)
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
        if (body.members == null || body.members.length == 0) {
            return "Current number of members required"
        }
        if (body.total == null || body.total == '') {
            return "Desired group size required"
        }
        if (body.total < body.members.length) {
            return "More members than desired group size"
        }
        if (body.members.length < 1 || body.total < 1) {
            return "At least one member required"
        }

        return successText
    }

    consider_delete() {
        Alert.alert(
            //title
            'Are you sure?',
            //body
            'This will permanently delete this post.',
            [
              {text: 'No', onPress: () => console.log('No Pressed')},
              {text: 'Yes', onPress: () => this.delete()},
            ],
            { cancelable: true }
            //clicking out side of alert will not cancel
          );
    }

    delete() {
        deletePost(this.props.data._id)
            .then((response) => {
                if (response == 'Post deleted') {
                    Actions.postlist({
                        courseid: this.props.courseid, 
                        coursetitle: this.props.coursetitle,
                    })
                } else {
                    alert(response)
                }
            })
    }

    submit() {
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
            /*author: this.state.author,*/
            tags: tags,
            members: members,
            total: this.state.desiredNumber,
            /*status: {
                remaining: this.state.currentNumber,
                total: this.state.desiredNumber,
            }*/
        }

        const result = this.checkSubmission(body)
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

        editPost(this.props.data._id, body)
        .then((response) => {
            if (response.startsWith('{')) {
                Actions.pop()
                //Actions.postview({postid: this.props.data._id})
            } else {
                alert(response)
            }
        })
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
                    centerComponent={{ text: "Edit Post", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                    rightComponent={{ icon: "delete", color: "#fff", onPress: this.consider_delete }}
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
                        value={this.state.title}
                        onChangeText={(text) => this.setState({title: text})}/>

                    <Text style={styles.inputLabel}>Description</Text>
                    <TextInput style={styles.descriptionInput}  multiline={true}
                        value={this.state.description}
                        onChangeText={(text) => this.setState({description: text})}/>

                    <Text style={styles.inputLabel}>Tags (comma-separated)</Text>
                    <TextInput style={styles.titleInput} 
                        value={this.state.tags}
                        onChangeText={(text) => this.setState({tags: text})}/>

                    <View style={styles.sizeInput}>
                        <View style={styles.leftInput}>
                            <Text style={styles.inputLabel}>Current Members</Text>
                            <TextInput style={styles.titleInput}
                                value={"" + this.state.currentNumber}
                                onChangeText={(text) => this.setState({currentNumber: text})}/>
                        </View>
                        <View style={styles.rightInput}>
                            <Text style={styles.inputLabel}>Desired Group Size</Text>
                            <TextInput style={styles.titleInput}
                                value={"" + this.state.desiredNumber}
                                onChangeText={(text) => this.setState({desiredNumber: text})}/>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <Button buttonStyle={styles.button} title="Cancel" type="outline" onPress={Actions.pop}/>
                        <Button buttonStyle={styles.button} title="Save" onPress={this.submit}/>
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
