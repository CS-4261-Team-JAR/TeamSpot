import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAvoidingView, Alert} from 'react-native'
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/Ionicons";

export default class MemberList extends Component{
    static propTypes = {
        requests: PropTypes.object.isRequired,
        onUpdate: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)
        
        this.state = {
            members: [
                /*{
                    email: "bob@gatech.edu",
                    name: "Bobry Bobenger",
                    id: "asdfalsjdhfiuashdfiuas",
                }*/
            ],
            newMember: "",
        }

        this.deleteMember = this.deleteMember.bind(this)
        this.addMember = this.addMember.bind(this)
        this.getMemberList = this.getMemberList.bind(this)
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

    getMemberList() {
        var members = []
        members.push(global.userID)
        for (let mem of this.state.members) {
            if (mem.id) {
                members.push(mem.id)
            } else {
                members.push(mem.email)
            }
        }
        return members
    }

    deleteMember(i) {
        this.state.members.splice(i, 1)
        this.setState({members: this.state.members})
        this.props.onUpdate(this.getMemberList())
    }

    addMember() {
        let newMember = this.getMember(this.state.newMember)
        if (newMember) {
            // Found member

        } else {
            // Could not find member
            Alert.alert(
                //title
                'Did not find member by email',
                //body
                'Do you want to add anyway?',
                [
                  {text: 'No', onPress: () => console.log('No Pressed')},
                  {text: 'Yes', onPress: () => {
                      this.state.members.push({
                          email: this.state.newMember,
                          name: "",
                          id: "",
                      })
                      this.setState({newMember: ""})
                      this.props.onUpdate(this.getMemberList())
                  }},
                ],
                { cancelable: true }
                //clicking out side of alert will not cancel
              );
        }
    }

    getMember(email) {
        return false
    }

    renderRequests = requests => {
        return (
            <View>
                {requests.map((item, i) => {
                    return (
                        <Member email={item.email} name={item.name} id={item._id} 
                            onDelete={this.deleteMember} key={i} index={i}/>
                    )
                })}
            </View>
        )
    }

    render(){
        return(
            // <View style = {styles.container}>
            <View style={styles.container}>
                <Text style={styles.memberName}>Me</Text>
                {this.renderRequests(this.state.members)}
                <View style={styles.inputRow}>
                    <TextInput style={styles.memberInput}
                        value={this.state.newMember}
                        placeholder="Enter Email"
                        onChangeText={(text) => this.setState({newMember: text})}/>
                    <TouchableOpacity
                        style={styles.addicon} 
                        onPress={this.addMember}>
                        <Icon name="md-add" size={30} color={textColor} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var nameMap = {}

class Member extends Component {
    static propTypes = {
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this)

    }

    delete() {
        this.props.onDelete(this.props.index)
    }

    render(){
        const { email, name, id } = this.props;

        return(
            <View style={styles.memberRow}>
                <View style={styles.memberColumn}>
                    <Text style={styles.memberName}>{name}</Text>
                    <Text style={styles.memberName}>{email}</Text>
                </View>
                {/*<TouchableOpacity
                    style={styles.icon} 
                    onPress={this.edit}>
                    <Icon name="md-create" size={30} color={textColor} />
                </TouchableOpacity>*/}
                <TouchableOpacity
                    style={styles.icon} 
                    onPress={this.delete}>
                    <Icon name="md-close" size={30} color="red" />
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
    memberRow: {
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center'
    },
    memberName: {
        color: textColor,
        //padding: 10,
        marginLeft: 10,
    },
    icon: {
        marginLeft: 20,
    },
    inputRow: {
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center'
    },
    memberInput: {
        flex: 5,
        marginLeft: 10,
        padding: 5,
        borderColor: "#BCE0FD",
        borderWidth: 1,
    },
    addicon: {
        marginLeft: 20,
        flex: 1,
    }
});
