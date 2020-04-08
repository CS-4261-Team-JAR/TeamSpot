import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {RefreshControl} from 'react-native';
import PropTypes from 'prop-types';
import {getPosts, getAllPosts} from '../../Backend.js'
import PostBriefView from './PostBriefView';
import Icon from "react-native-vector-icons/Ionicons";
import { Header, SearchBar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
// import LoginForm from '../Login/LoginForm.js';
import LoginForm from '../Login/LoginForm';

export default class PostList extends Component {

    constructor(props) {
        super(props)
        this.state = { loading: true, data: null, sortedData: null, searchText: "" }

        this.updateSearch = this.updateSearch.bind(this)
        this.sortData = this.sortData.bind(this)
    }

    componentDidMount() {
        this.refresh()
    }

    refresh() {
        let token = global.userID
        var courseid = global.courseid
        if (!courseid) {
            courseid = "5e59a15a9fe0ce4f88066fa2"
        }

        //getPosts()
        getAllPosts(courseid)
            .then(json => this.setState({ loading: false, data: json, sortedData: this.sortData(this.state.searchText, json) }))
    }

    sortData(searchText, data) {
        if (searchText == "") {
            return data
        }

        var sortedData = []

        for (const datum of data) {
            const title = datum.title
            //const description = datum.description
            const tags = datum.tags

            var match = title.includes(searchText)
            for (const tag of tags) {
                if (tag.includes(searchText)) {
                    match = true
                }
            }

            if (match) {
                sortedData.push(datum)
            }
        }

        return sortedData
    }

    renderList = data => {
        return (
            <View style={styles.formContainer}>
                {data.map((item, i) => (
                    <PostBriefView data={item} key={i}/>
                ))}
            </View>
        )
    }

    _onRefresh = () => {
        this.setState({loading: true, });
        this.refresh()
    }

    updateSearch(search) {
        this.setState({searchText: search, sortedData: this.sortData(search, this.state.data)})
    }

    render() {
        const { loading, sortedData } = this.state

        // console.log("PostList:", global.userID)
        // console.log("PostList:", LoginForm.state.email)

        return (
            <View>
                <Header
                    leftComponent={{ icon: "arrow-back", color: "#fff", onPress: Actions.viewcourses}}
                    centerComponent={{ text: global.coursetitle, style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
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
                    {/*<TextInput style={styles.searchBar}/>*/}
                    <SearchBar value={this.state.searchText} onChangeText={this.updateSearch}
                        placeholder="Search" lightTheme={true} containerStyle={styles.searchContainer}
                        inputContainerStyle={styles.searchInputContainer} inputStyle={styles.searchInput}/>
                    {loading ? <Text style={styles.loadingText}>Loading</Text> : this.renderList(sortedData)}
                </ScrollView>
                <TouchableOpacity
                    style={styles.addIcon} 
                    onPress={() => Actions.postcreate()}>
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
    searchContainer: {
        backgroundColor: 'white',
        borderColor: 'white',
    },
    searchInputContainer: {
        backgroundColor: 'white',
        //borderColor: 'white',
    },
    searchInput: {

    },
    searchBar: {
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
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
