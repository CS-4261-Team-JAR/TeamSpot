import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import PostBriefView from './PostBriefView';
import Icon from "react-native-vector-icons/Ionicons";
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = { loading: true, data: null }
    }

    componentDidMount() {
        const url = "https://blooming-harbor-28361.herokuapp.com/posts"
        fetch(url)
            .then((response) => response.json())
            .then(json => this.setState({ loading: false, data: json }))
    }

    renderList = data => {
        return (
            <View style={styles.formContainer}>
                {data.map(item => (
                    <PostBriefView data={item} />
                ))}
            </View>
        )
    }

    render() {
        const { loading, data } = this.state

        return (
            <View>
                <Header
                    leftComponent={{ icon: "menu", color: "#fff" }}
                    centerComponent={{ text: "CS 4261", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                    backgroundColor="#2980b9"
                // centerContainerStyle={{: 'yellow'}}
                // rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View style={styles.container}>
                    {loading ? <Text>"Loading"</Text> : this.renderList(data)}
                </View>
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
        justifyContent: 'flex-start',
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
    }
});
