import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {RefreshControl} from 'react-native';
import PropTypes from 'prop-types';
import {getPosts, getAllPosts} from '../../Backend.js'
import PostBriefView from './PostBriefView';
import Icon from "react-native-vector-icons/Ionicons";
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
// import LoginForm from '../Login/LoginForm.js';
import LoginForm from '../Login/LoginForm';

export default class PostList extends Component {
    /*static propTypes = {
        token: PropTypes.string.isRequired,
        courseid: PropTypes.string.isRequired,
    }*/

    constructor(props) {
        super(props)
        this.state = { loading: true, data: null }
    }

    componentDidMount() {
        this.refresh()
    }

    refresh() {
        /*const url = "https://blooming-harbor-28361.herokuapp.com/posts"
        fetch(url)
        .then((response) => response.json())*/

        // var userID = global.userID
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

        getPosts()
        //getAllPosts(token, courseid)
            .then(json => this.setState({ loading: false, data: json }))
    }

    renderList = data => {
        return (
            <View style={styles.formContainer}>
                {data.map(item => (
                    <PostBriefView data={item} key={item.title + item.description}/>
                ))}
            </View>
        )
    }

    _onRefresh = () => {
        this.setState({loading: true, });
        this.refresh()
    }

    render() {
        const { loading, data } = this.state

        console.log("PostList:", global.userID)
        // console.log("PostList:", LoginForm.state.email)

        return (
            <View>
                <Header
                    leftComponent={{ icon: "menu", color: "#fff" }}
                    centerComponent={{ text: "CS 4261", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                    backgroundColor="#2980b9"
                // centerContainerStyle={{: 'yellow'}}
                // rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <ScrollView style={styles.container} 
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.loading}
                        onRefresh={this._onRefresh}
                    />
                }>
                    {loading ? <Text style={styles.loadingText}>Loading</Text> : this.renderList(data)}
                </ScrollView>
                <TouchableOpacity
                    style={styles.addIcon} 
                    onPress={Actions.postcreate}>
                    <Icon name="md-add" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        //justifyContent: 'flex-start',
        height: '88%'
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
        backgroundColor: '#4C99CD',
        borderRadius: 100,
    },
    loadingText: {
        marginTop: 50,
        textAlign: 'center',
    }
});
