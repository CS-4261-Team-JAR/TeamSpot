import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import PostBriefView from './PostBriefView';

export default class PostList extends Component{
    render(){
        return(
            // <View style = {styles.container}>
            <View style={styles.container}>
                <TextInput style={styles.searchBar} placeholder = "Search"></TextInput>
                <View style = {styles.formContainer}>
                    <PostBriefView/>
                    <PostBriefView/>
                    <PostBriefView/>
                </View>

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
