import React, {Component} from 'react';
import {StyleSheet, View, Image, SafeAreaView, ScrollView, Text} from 'react-native';
import ProfileViewForm from './ProfileViewForm';

import {Ionicons, MaterialIcons} from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { ScrollView } from 'react-native-gesture-handler';
export default class ProfileView extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator = {false}>
                    <View style = {styles.titleBar}>
                        <Ionicons name = "ios-arrow-back" size = {24} color = "#525750"></Ionicons>
                        <Ionicons name = "md-more" size = {24} color = "#525750"></Ionicons>
                    </View>

                    <View style = {{alignSelf: "center"}}>
                        <View style = {styles.profileImage}>
                            <Image 
                                style = {styles.image}
                                source = {require('../../images/android.jpg')} ></Image>
                        </View>

                        <View style = {styles.dm}>
                            <MaterialIcons name = "chat" size = {18} color = "#DFD8C8">

                            </MaterialIcons>
                        </View>
                    </View>

                    <View style = {styles.infoContainer}>
                        <Text style = {[styles.text, {fontSize: 50, fontWeight: "200"}]} >Ryan</Text>
                        <Text></Text>
                        <Text style = {styles.text}>Computer Science</Text>
                        <Text></Text>
                        <Text style = {styles.text}>Senior</Text>
                        <Text></Text>
                        <Text style = {styles.text}>I don't want to write any personal statements because I just don't :)</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#93c8e7',
    },
    Text: {
        // fontFamily: "HelveticaNeue",
        color: "#525750"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    logo: {
        width: 100,
        height: 100
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16,
        margin: 20
    },
    text: {
        textAlign: 'center',
        color: '#3b2f44',
        fontWeight: '700',
    }
    // dm: {
    //     // backgroundColor = "#93c8e7",
    //     position = "absolute",
    //     top: 20,
    //     width: 40,
    //     height: 40,
    //     borderRadius: 20,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }
});
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#3399FF',
//         justifyContent: 'center'
        
//     },
//     formContainer: {
//         justifyContent: 'center'
//     },
//     logoContainer: {
//         alignItems: 'center'
//         // flexGrow: 1,
//         // justifyContent: 'center'
//     },
//     logo: {
//         width: 100,
//         height: 100
//     }
// });