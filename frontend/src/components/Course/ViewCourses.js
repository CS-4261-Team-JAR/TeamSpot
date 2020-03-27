import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView ,TouchableOpacity, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { TextInput } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
// Code source: https://www.youtube.com/watch?v=xb8uTN3qiUI

export default class ViewCourses extends Component {
    addcourses() {
		Actions.addcourse()
    }

    render() {
        return (
            
            <View>
                <View style={styles.header}>
                    <Text></Text>
                    <Text></Text>
                    <TouchableOpacity style={styles.addIcon} onPress={this.addcourses}>
                     <Icon name="md-add" size={30} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>- COURSE -</Text>
                </View>
                {
                list.map((l, i) => (
                <ListItem
                    onPress={Actions.postlist}
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
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
        // return (
        //     <View style={styles.container} behavior="padding" enabled>

                // <View style={styles.header}>
                //     <Text></Text>
                //     <Text></Text>
                //     <Text></Text>
                
                //     <Text style={styles.headerText}>- COURSE -</Text>
                // </View>

        //         <ScrollView style={styles.scrollContainer}>


        //         </ScrollView>

        //         <View style={styles.footer}>
        //             <TextInput style={styles.TextInput} placeholder = '<User Name>' placeholderTextColor = 'white'>

        //             </TextInput>
        //         </View>

        //         <TouchableOpacity style={styles.addIcon} onPress={this.addcourses}>
        //             <Icon name="md-add" size={30} color="#fff" />
        //         </TouchableOpacity>
        //     </View>
        //     // <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        //     //     <Text style={styles.logoText}>View Courses</Text>

        //     //     <TouchableOpacity style={styles.addIcon}>
        //     //         <Icon name="md-add" size={30} color="#fff" />
        //     //     </TouchableOpacity>
               
        //     // </KeyboardAvoidingView>
        // );
    }
}

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
    }
});
