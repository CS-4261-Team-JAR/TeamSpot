import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView ,TouchableOpacity, ScrollView, Platform, YellowBox, Alert} from 'react-native';
import { Header } from 'react-native-elements';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import { ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: "",
            semester: "",
            course: ""
        }
        this.submit = this.submit.bind(this)
        YellowBox.ignoreWarnings([
         'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
       ]);
    }

    submit() {
        var url = "https://secure-depths-39233.herokuapp.com/api/course/"
        const token = global.token
        console.log(token)
        url = url.concat(this.state.year, "/", this.state.semester, "/", this.state.course.substring(0, 2), 
            "/", this.state.course.substring(2, 6), "/", this.state.course.substring(7))

        fetch(url, { 
            method: 'get', 
            headers: new Headers({
                'Authorization': token, 
            }), 
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data.course)
            var courseId = data.course
            return fetch('https://secure-depths-39233.herokuapp.com/api/course/register', { 
                method: 'POST', 
                headers: new Headers({
                    'Authorization': token, 
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({course: courseId})
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch(function(error) {
            console.log('Request failed', error)
        })
        Actions.viewcourses()
    }

    render() {
        return (
            <View style={styles.container} behavior="padding" enabled>

                <Header
                    leftComponent={{ icon: "arrow-back", color: "#fff" }}
                    centerComponent={{ text: "Add Course", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
                    backgroundColor="#2980b9"
                />
                
                <View style={styles.MenuContainer}>
                    <MenuProvider style={{ flexDirection: "column", padding: 30}}>
                    <Menu style={{backgroundColor: '#ffeb99'}} onSelect={value => alert(`You Clicked : ${value}`)}>
                            <MenuTrigger  >
                                <Text style={styles.headerText}>YEAR</Text>
                            </MenuTrigger  >

                            <MenuOptions>
                                <MenuOption onSelect={() => this.state.year = "2020"} 
                                    value={"2020"}>
                                <Text style={styles.menuContent}>2020</Text>
                                </MenuOption>

                                <MenuOption onSelect={() => this.state.year = "2019"} 
                                    value={"2019"}>
                                <Text style={styles.menuContent}>2019</Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>

                        <Text></Text>

                        <Menu style={{backgroundColor: '#a4c5c6'}} onSelect={value => alert(`You Clicked : ${value}`)}>
                            <MenuTrigger  >
                                <Text style={styles.headerText}>SEMESTER</Text>
                            </MenuTrigger  >

                            <MenuOptions>
                                <MenuOption onSelect={() => this.state.semester = "Spring"}
                                    value={"Spring"}>
                                <Text style={styles.menuContent}>Spring</Text>
                                </MenuOption>

                                <MenuOption onSelect={() => this.state.semester = "Summer"}
                                    value={"Summer"}>
                                <Text style={styles.menuContent}>Summer</Text>
                                </MenuOption>

                                <MenuOption onSelect={() => this.state.semester = "Fall"}
                                    value={"Fall"}>
                                <Text style={styles.menuContent}>Fall</Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>

                        <Text></Text>

                        <Menu style={{backgroundColor: '#d4ebd0'}} onSelect={value => alert(`You Clicked : ${value}`)}>
                            <MenuTrigger  >
                                <Text style={styles.headerText}>COURSE</Text>
                            </MenuTrigger  >

                            <MenuOptions>
                                <MenuOption onSelect={() => this.state.course = "CS4261-A"}
                                    value={"CS4261-A"}>
                                <Text style={styles.menuContent}>CS4261-A</Text>
                                </MenuOption>

                                <MenuOption onSelect={() => this.state.course = "CS4261-B"}
                                    value={"CS4261-B"}>
                                <Text style={styles.menuContent}>CS4261-B</Text>
                                </MenuOption>

                                <MenuOption onSelect={() => this.state.course = "CS3630-A"}
                                    value={"CS3630-A"}>
                                <Text style={styles.menuContent}>CS3630-A</Text>
                                </MenuOption>

                                <MenuOption onSelect={() => this.state.course = "CS4649-A"}
                                    value={"CS4649-A"}>
                                <Text style={styles.menuContent}>CS4649-A</Text>
                                </MenuOption>

                                <MenuOption onSelect={() => this.state.course = "CS4641-A"}
                                    value={"CS4641-A"}>
                                <Text style={styles.menuContent}>CS4641-A</Text>
                                </MenuOption>

                                <MenuOption onSelect={() => this.state.course = "CS4731-A"}
                                    value={"CS4731-A"}>
                                <Text style={styles.menuContent}>CS4731-A</Text>
                                </MenuOption>

                                <MenuOption onSelect={() => this.state.course = "CS8803-MAS"}
                                    value={"CS8803-MAS"}>
                                <Text style={styles.menuContent}>CS8803-MAS</Text>
                                </MenuOption>

                            </MenuOptions>
                        </Menu>
                    </MenuProvider>

                </View>

                <View style={styles.bottomContainer}>
                <TouchableOpacity 
                    onPress={this.submit}
					style={styles.buttonCountainer}>
					<Text style={styles.buttonText}>
						REGISTER
                    </Text>
				</TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonCountainer: {
		width:"85%",
		backgroundColor: '#1c313a',
		borderRadius: 25,
		marginVertical: 20,
		paddingVertical: 13
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center'
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
        fontSize: 20,
        margin: 10,
        fontWeight: "bold",
      },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    TextInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    menuContent: {
        padding: 1,
        fontSize: 20,
    },
    MenuContainer: {
        flex: 1,
        padding: 1,
    },
    bottomContainer: {
        alignItems: 'center'
    },
});
