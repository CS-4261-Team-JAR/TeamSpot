import React, { Component } from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import {RefreshControl} from 'react-native';

export default class ProfileView extends Component {
    constructor(props) {
        super(props)
        this.state = {loading: true, data: null}
    }
    componentDidMount() {
        this.refresh()
    }

    refresh() {
        
        const url = "https://secure-depths-39233.herokuapp.com/api/user/profile/" + global.userID
        console.log(url)
        const token = global.token
        const body = {
            major: "",
            year: 0,
            about_me: "",
            tech_skill: "",
            soft_skill: "",
            class_taken: ""
        }

        fetch(url, { method: 'get', headers: new Headers({
            'Authorization': token, 
            'Content-Type': 'application/x-www-form-urlencoded'
            }), 
        }).then((response) => response.json())
        .then(data => {
            info = data
            return data
            // console.log(data.classTaken)
        }).then(json => this.setState({loading: false, data: json}));
    }

    _onRefresh = () => {
        this.setState({loading: true, });
        this.refresh()
    }

    renderInfo = data => {
        return(
            // console.log("test",data)
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                
                <View style={styles.topic}>
                    <View style={styles.topicContent}>
                        <Text style={styles.name}>{data.user.name}</Text>
        <Text style={styles.info}>{data.major +"   "+ data.standing}</Text>
                        <Text style={styles.email}>{data.user.email}</Text>
                    </View>
                    <Divider style={styles.divider} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyTitle}>About Me </Text>
                    <Text style={styles.description}>{data.intro}</Text>
                    {/* <Text style={styles.bodyTitle}>Goals</Text>
                    <Text style={styles.description}>I don't have much experience in Android development, but I am a fast learner and want to build an Android app in this class.</Text> */}

                    <Text style={styles.bodyTitle}>Technical Skills </Text>
                    <Text style={styles.description}>{data.skills.technical}</Text>
                    <Text style={styles.bodyTitle}>Soft Skills </Text>
                    <Text style={styles.description}>{data.skills.soft}</Text>
                    <Text style={styles.bodyTitle}>Classes Taken </Text>
                    <Text style={styles.description}>{data.classTaken}</Text>
                    <Text style={styles.bodyTitle}>Tags </Text>
                    <Text style={styles.description}>{data.tags}</Text>
                    <Text style={styles.bodyTitle}>Linkedln</Text>
                    <Text style={styles.hyperlink}>{data.linkedin}</Text>
                    <Text style={styles.bodyTitle}>Last Modified</Text>
                    <Text style={styles.hyperlink}>{data.lastModified}</Text>
                </View>
            </View>
        )
    }

    render() {
        const {loading, data} = this.state
        return (
            
            <SafeAreaView style={styles.container}>
                {/* <View
                refreshControl={
                    <RefreshControl
                        onRefresh={this._onRefresh}
                    />
                }>
                {
                    loading ? <Text>loading</Text> : this.renderInfo(data)
                }
                </View> */}
                <ScrollView 
                refreshControl={
                    <RefreshControl
                        onRefresh={this._onRefresh}
                    />
                }>
                {
                    loading ? <Text>loading</Text> : this.renderInfo(data)
                }    
                </ScrollView>
            </SafeAreaView>
        );
    }

    // render() {
    //     return (
    //         <SafeAreaView style={styles.container}>
    //             <ScrollView>
    //                 <View style={styles.container}>
    //                     <View style={styles.header}></View>
    //                     <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />

    //                     <View style={styles.topic}>
    //                         <View style={styles.topicContent}>
    //                             <Text style={styles.name}>John Doe</Text>
    //                             <Text style={styles.info}>Computer Science, Junior</Text>
    //                             <Text style={styles.email}>jdoe@gatech.edu</Text>
    //                         </View>
    //                         <Divider style={styles.divider} />
    //                     </View>
    //                     <View style={styles.body}>
    //                         <Text style={styles.bodyTitle}>About Me </Text>
    //                         <Text style={styles.description}>Passionate software enginner who loves to create awesome interfaces that work geat, and believe visual design should be able to help user more easily to find out about features of product, services, or band.{"\n"}
    //                             I also love what I do.</Text>
    //                         <Text style={styles.bodyTitle}>Goals</Text>
    //                         <Text style={styles.description}>I don't have much experience in Android development, but I am a fast learner and want to build an Android app in this class.</Text>

    //                         <Text style={styles.bodyTitle}>Technical Skills </Text>
    //                         <Text style={styles.description}>Android Development, Backend, Frontend, React, Angular, NodeJs, MongoDB, MySQL</Text>
    //                         <Text style={styles.bodyTitle}>Soft Skills </Text>
    //                         <Text style={styles.description}>Public Speaking, Presentation, Communication, Teamwork</Text>
    //                         <Text style={styles.bodyTitle}>Classes Taken </Text>
    //                         <Text style={styles.description}>CS 1332, CS 2340, CS 4400, CS 4641</Text>
    //                         <Text style={styles.bodyTitle}>Linkedln</Text>
    //                         <Text style={styles.hyperlink}>https://www.linkedin.com/in/john.doe</Text>
    //                     </View>
    //                 </View>
    //             </ScrollView>
    //         </SafeAreaView>
    //     );
    // }
}
// var list = [];
var info = {
    "classTaken": Array [""],
    "intro":"",
    "lastModified":"",
    "linkedin": "https://www.linkedin.com/abc",
    "major": "",
    "skills": "",
    "standing": "Freshman",
    "tags": Array [""],
    "user": "",
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    header: {
        backgroundColor: "#4C99CD",
        height: 140,
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 70
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    topic: {
        marginTop: 40,
    },
    topicContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
        paddingBottom: 20,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    email: {
        color: "#696969",
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    body: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 15
    },
    bodyTitle: {
        paddingTop: 15,
        fontSize: 16
    },
    description: {
        fontSize: 14,
        color: "#939393",
        marginTop: 10,
        textAlign: 'left',
        lineHeight: 18,
    },
    divider: {
        backgroundColor: 'grey',
        marginTop: 0,
    },
    hyperlink: {
        fontSize: 14,
        color: "blue",
        marginTop: 10,
        textAlign: 'left',
        lineHeight: 18,
    }
});