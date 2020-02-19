import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
// import ImagePicker from 'react-native-image-picker';

// const options = {
//     title: 'my pic',
//     takePhotoButtonTitle: 'Take photo with your camera', 
//     chooseFromLibraryButtonTitle: 'Choose photo from library'

// }

export default class ProfileViewForm extends Component{

    
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
                                source = {require('../../images/Image1.png')} ></Image>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,1)',
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
    }
});
// const styles = StyleSheet.create({
//     container: {
//         padding: 20
//     },
//     input: {
//         height: 35,
//         backgroundColor: 'rgba(255,255,255,1)',
//         color: '#000000',
//         margin: 10,
//         marginBottom: 1,
//         paddingHorizontal: 10
//     },
//     buttonCountainer: {
//         backgroundColor: '#2980b9',
//         paddingVertical: 10,
//         margin: 10
//     },
//     buttonText: {
//         textAlign: 'center',
//         color: '#FFFFFF',
//         fontWeight: '700'
//     },
//     textInput: {
//         textAlign: 'center',
//         color: '#FFFFFF',
//         fontWeight: '700'
//         // justifyContent: 'center'
//         // alignItems: 'center'
//     },
//     text: {
//         color: '#FFFFFF',
//         fontWeight: '700'
//     },
//     PS_input: {
//         height: 35,
//         backgroundColor: 'rgba(255,255,255,1)',
//         color: '#000000',
//         margin: 10,
//         marginBottom: 1,
//         paddingHorizontal: 10,
//         height: 100
//     },
//     // ImageCountainer: {
//     //     margin: 10,
//     //     backgroundColor: '2980b9',
//     //     padding: 10
//     // }
// });
