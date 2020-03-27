import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView ,TouchableOpacity, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {RefreshControl} from 'react-native';
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { TextInput } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
// Code source: https://www.youtube.com/watch?v=xb8uTN3qiUI

export default class ViewCourses extends Component {
    constructor(props) {
        super(props)
        this.state = {loading: true, data: null}
    }
    addcourses() {
		Actions.addcourse()
    }
    componentDidMount() {
        this.refresh()
    }
    
    refresh() {
        const url = "https://secure-depths-39233.herokuapp.com/api/course"
        const token = global.userID
        const body = {
            _id: "",
            semester: "",
            year: 0,
            subject: "",
            course: 0,
            section: ""
        }

        fetch(url, { method: 'get', headers: new Headers({
            'Authorization': token, 
            'Content-Type': 'application/x-www-form-urlencoded'
            }), 
        }).then((response) => response.json())
        .then(resp => {
            // list = resp
            data = resp
            // this.data = resp
            console.log("test:",data)
            return data
        }).then(json => this.setState({loading: false, data: json}));
        // let token = global.userID        
        // getCourses()
        // //getAllCourse(token)
        //     .then(json => this.setState({ loading: false, data: json }))
    }


    // submit() {
    //     const url = "https://secure-depths-39233.herokuapp.com/api/course"
    //     const token = global.userID
    //     const body = {
    //         _id: "",
    //         semester: "",
    //         year: 0,
    //         subject: "",
    //         course: 0,
    //         section: ""
    //     }

    //     fetch(url, { method: 'get', headers: new Headers({
    //         'Authorization': token, 
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //         }), 
    //     }).then((response) => response.json())
    //     .then(resp => {
    //     console.log("test",resp)
    //     });
    // }
    _onRefresh = () => {
        this.setState({loading: true, });
        this.refresh()
    }

    renderList = data => {
        console.log("data:",data)
        return (
            <View style = {styles.formContainer}>
                {/* {
                data.map((l, i) => (
                    // console.log()
                    <ListItem
                        onPress={Actions.postlist}
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.course}
                        subtitle={l.semester}
                        bottomDivider
                        chevron
                    />
                ))
                } */}
                {list.map((l, i) => (
                    <ListItem
                    onPress={Actions.postlist}
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                    bottomDivider
                    chevron
                />
                ))}
            </View>
        )
    }

    render() {
        // const{loading, data} = this.state
        console.log("ViewCourse:", global.userID)
        return (  
            // this.submit          
            <View>
                <Header
                    leftComponent={{ icon: "arrow-back", color: "#fff"}}
                    centerComponent={{ text: "COURSES", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                    rightComponent={{ icon: "add", color: "#fff", onPress: Actions.addcourse}}
                    backgroundColor="#2980b9"
                />
                <ScrollView style={styles.container} 
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.loading}
                        onRefresh={this._onRefresh}
                    />
                }>
                {/* {loading ? <Text style={styles.loadingText}>Loading</Text> : this.renderList(data)} */}
                </ScrollView>

                {
                data.map((l, i) => (
                    <ListItem
                        onPress={Actions.postlist}
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.course}
                        subtitle={l.semester}
                        bottomDivider
                        chevron
                    />
                ))
                }
                {/* <TouchableOpacity style={styles.addIcon}>
                 <Icon name="md-add" size={30} color="#fff" />
                </TouchableOpacity> */}
            </View>
        )
    }
}

const url = "https://secure-depths-39233.herokuapp.com/api/course"
const token = global.userID
const body = {
    _id: "",
    semester: "",
    year: 0,
    subject: "",
    course: 0,
    section: ""
}

// const list = [];

const list = [
    {
        name: 'CS4261',
        subtitle: 'Spring 2020',
        title: 'Appointments',
        icon: 'av-timer'
      },
      {
        name: 'CS4731',
        subtitle: 'Spring 2020',
        title: 'Trips',
        icon: 'flight-takeoff'
      },
  ];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#4C99CD',
        // justifyContent: 'center'
    },
    addIcon: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 60,
        backgroundColor: '#ff5050',
        borderRadius: 100,
    },
    header: {
        position: 'relative',
        backgroundColor: '#ff5050',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
        height: 100
    },
    headerText: {
        position: 'relative',
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0
    },
    TextInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    loadingText: {
        marginTop: 50,
        textAlign: 'center',
    }
});
