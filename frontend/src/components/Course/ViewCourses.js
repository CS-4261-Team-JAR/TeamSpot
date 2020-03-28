import React, { Component } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import {RefreshControl} from 'react-native';
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { ListItem } from 'react-native-elements';

export default class ViewCourses extends Component {
    constructor(props) {
        super(props)
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
        .then(data => {
            list = []
            data.forEach(item => list.push(item) );
            return data
        }).then(json => this.setState({loading: false, data: json}));
    }

    _onRefresh = () => {
        this.refresh()
    }

    render() {
        console.log("ViewCourse:", global.userID)
        return (  
            <View>
                <Header
                    leftComponent={{ icon: "menu", color: "#fff"}}
                    centerComponent={{ text: "COURSES", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                    rightComponent={{ icon: "add", color: "#fff", onPress: Actions.addcourse}}
                    backgroundColor="#2980b9"
                />
                <ScrollView style={styles.container} 
                refreshControl={
                    <RefreshControl
                        onRefresh={this._onRefresh}
                    />
                }>
                </ScrollView>
                {
                list.map((l, i) => (
                    <ListItem
                        onPress={Actions.postlist}
                        key={i}
                        leftIcon={{ name: 'flight-takeoff' }}
                        title={l.subject.concat(' ', l.course, '-', l.section)}
                        subtitle={l.semester.concat(' ', l.year)}
                        bottomDivider
                        chevron
                    />
                ))
                }
            </View>
        )
    }
}

var list = [];

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
