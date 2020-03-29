import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, ScrollView, TouchableOpacity, Text, Image, Alert} from 'react-native';
import {RefreshControl} from 'react-native';
import { Header, Button } from 'react-native-elements';
import {getPost} from '../../Backend.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Discussion from './Discussion';
import JoinRequests from './JoinRequests';
import { Actions } from 'react-native-router-flux';


export default class Post extends Component{
    /*static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        currentNumber: PropTypes.number.isRequired,
        desiredNumber: PropTypes.number.isRequired,
    }*/

    static propTypes = {
        postid: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = { loading: true, data: null }

        this.edit = this.edit.bind(this)
    }

    componentDidMount() {
        this.refresh()
    }

    refresh() {
        getPost(this.props.postid)
            .then(json => {
                this.setState({ loading: false, data: json[0] })
            })
    }

    _onRefresh = () => {
        this.setState({loading: true, });
        this.refresh()
    }

    profileview() {
		Actions.profileview()
    }
    
    requestJoin() {
        
    }

    _scrollToInput (reactNode) {
        // Add a 'scroll' ref to your ScrollView
        this.scroll.props.scrollToFocusedInput(reactNode)
      }

    edit() {
        Actions.postedit({
            data: this.state.data, 
        })
    }

    doNothing() {
        
    }

    render(){
        if (this.state.loading) {
            return(
                <View>
                    <Header
                        leftComponent={{ icon: "arrow-back", color: "#fff", onPress: () => Actions.postlist()}}
                        centerComponent={{ text: "CS 4261", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                        backgroundColor="#2980b9"
                    // centerContainerStyle={{: 'yellow'}}
                    // rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                    <Text style={styles.loadingText}>Loading</Text>
                </View>
            );
        } else {

            const data = this.state.data
            const myPost = global.userID == data.author._id

            //const { title, description, currentNumber, desiredNumber } = this.props;
            const title = data.title//"Post Title"
            const description = data.description//"This is the project description. It can be multiple lines long. It will probably be much longer than the one in the breif description on the post list page."
            const currentNumber = data.status ? data.status.remaining : data.members.length//2
            const desiredNumber = data.status ? data.status.total : data.total//5
            const lastEdit = new Date(data.lastModified ? data.lastModified : data.date)//"Jan 31, 2020"
            const leader = data.author.name//'John Doe'
            const tags = data.tags//2
            const leaderProfileLocation = '../../images/defaultProfile.png'
            var leaderProfile
            if (leaderProfileLocation.startsWith('http')) {
                leaderProfile = <Image source={{uri: leaderProfileLocation}} style={styles.profileImage}/>
            } else {
                leaderProfile = <Image source={require('../../images/defaultProfile.png')} style={styles.profileImage}/>
            }
            //alert(JSON.stringify(data))
            return(
                <View>
                    <Header
                        leftComponent={{ icon: "arrow-back", color: "#fff", onPress: () => Actions.postlist()}}
                        centerComponent={{ text: "Post", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                        rightComponent={myPost ? { icon: "edit", color: "#fff", onPress: this.edit} : {}}
                        backgroundColor="#2980b9"
                    // centerContainerStyle={{: 'yellow'}}
                    // rightComponent={{ icon: 'home', color: '#fff' }}
                    />

                <ScrollView style={styles.scrollview}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.loading}
                        onRefresh={this._onRefresh}
                    />
                }>
                    <KeyboardAwareScrollView
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        enableAutomaticScroll = {true}
                        enableOnAndroid = {true}
                        extraScrollHeight = {400}
                        innerRef={ref => {
                            this.scroll = ref
                        }}
                    >
                    <View style={styles.container}>
                        <Text style={styles.titleText}>{title}</Text>
                        <Text style={styles.numberText}>Members: {currentNumber}/{desiredNumber}</Text>
                        <Text style={styles.tags}>Tags: {tags.join(', ')}</Text>
                        <Text style={styles.descriptionText}>{description}</Text>

                        <View style={styles.bottomLine}>
                            <Text style={styles.lastEdit}>Last Edit: {lastEdit.getMonth()}/{lastEdit.getDate()}/{lastEdit.getFullYear()} {lastEdit.getHours()}:{lastEdit.getMinutes()}</Text>
                            <View style={styles.leaderPart}>
                                {/* <Text style={styles.leaderText}>{leader}</Text>  */}
                                <TouchableOpacity onPress={() => this.profileview({
                                    id: data.author._id
                                })}>
                                    <Text style={styles.leaderText}>{leader}</Text> 
                                </TouchableOpacity>
                                
                                {leaderProfile}
                            </View>
                        </View>
                        {myPost ? 
                            <JoinRequests data={requests}/>
                            : 
                            <Button buttonStyle={styles.button} title="Request to Join" onPress={this.requestJoin}/>}
                    </View>

                    <Discussion data={data}/>
                    </KeyboardAwareScrollView>
                    </ScrollView>
                </View>
            );
        }
    }

    /*getImage(imageLocation) {
        if (imageLocation.startsWith('http')) {
            return (<Image source={{uri: imageLocation}} style={styles.profileImage}/>)
        } else {
            return (<Image source={require('../../images/defaultProfile.png')} style={styles.profileImage}/>)
        }
    }*/
}

const requests = [
    {
        _id: 'asdfasdfasdgasdf',
        name: 'Jayden',
    },
    {
        _id: 'asdfasdfasdfasasdgasdf',
        name: 'George P. Burdell',
    },
]

const textColor = '#2699FB'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomColor: "#BCE0FD",
        borderBottomWidth: 1,
    },
    scrollview: {
        height: '88%'
    },
    loadingText: {
        marginTop: 50,
        textAlign: 'center',
    },
    titleText: {
        color: textColor,
        // fontFamily: 'serif',
        //fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 28,
    },
    numberText: {
        color: textColor,
        fontStyle: 'italic'
        // fontWeight: 'bold',
    },
    descriptionText: {
        marginTop: 10,
        color: textColor,
        lineHeight: 24,
    },
    bottomLine: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 20,
    },
    leaderPart: {
        flexDirection: 'row',
    },
    leaderText: {
        color: textColor,
        fontSize: 16,
        marginRight: 10,
    },
    profileImage: {
        height: 30,
        width: 30,
    },
    tags: {
        color: textColor,
        marginTop: 5
    },
    lastEdit: {
        marginTop: 0,
        color: textColor,
        lineHeight: 24,
    },
    button: {
        marginTop: 20,
        borderRadius: 10,
        marginVertical: 10,
        width: '100%'
    }
});
