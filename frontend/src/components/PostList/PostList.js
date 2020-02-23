import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import PostBriefView from './PostBriefView';
import { Actions } from 'react-native-router-flux';

export default class PostList extends Component{
    constructor(props) {
        super(props)
        this.state = {loading: true, data: null}
    }

    componentDidMount() {
        const url = "https://blooming-harbor-28361.herokuapp.com/posts"
        fetch(url)
            .then((response) => response.json())
            .then(json => this.setState({loading: false, data: json}))
    }

    renderList = data => {
        return (
            <View style = {styles.formContainer}>
                {data.map(item => (
                    <PostBriefView data={item}/>
                ))}
            </View>
        )
    }

    render(){
        const {loading, data} = this.state
        
        return(
            <View style={styles.container}>
                <TextInput style={styles.searchBar} placeholder = "Search"></TextInput>
                {loading ? <Text>"Loading"</Text> : this.renderList(data)}
                <View style={styles.plusContainer}>
                    <PlusButton/>
                </View>

            </View>
        );

        
    }
}

class PlusButton extends Component{
    render() {
        const size = 50
        return (
            <TouchableOpacity onPress={Actions.postcreate}>
            <View style={{
                width: size,
                height: size,
                borderRadius: size/2,
                backgroundColor: "#2699FB",
            }} >
                <Text style={{
                    color: "white",
                    textAlign: 'center',
                    marginBottom: 'auto',
                    marginTop: 'auto',
                    fontSize: 30,
                }}>+</Text>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 50,
    },
    searchBar: {
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: "#BCE0FD",
        borderWidth: 1,
    },
    plusContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});
