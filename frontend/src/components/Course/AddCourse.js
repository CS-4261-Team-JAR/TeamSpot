import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView ,TouchableOpacity, ScrollView, Platform, YellowBox, Alert} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { TextInput } from 'react-native-gesture-handler';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class AddCourse extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
         'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
       ]);
      }

    render() {
        return (
            <View style={styles.container} behavior="padding" enabled>

                <View style={styles.header}>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text style={styles.headerText}>- ADD -</Text>
                </View>
                
                <View style={styles.MenuContainer}>
                    <MenuProvider style={{ flexDirection: "column", padding: 30}}>
                        <Menu style={{backgroundColor: '#a0522d'}} onSelect={value => alert(`You Clicked : ${value}`)}>
                            <MenuTrigger  >
                                <Text style={styles.headerText}>SEMESTER</Text>
                            </MenuTrigger  >

                            <MenuOptions>
                                <MenuOption value={"Spring2020"}>
                                <Text style={styles.menuContent}>Spring2020</Text>
                                </MenuOption>

                                <MenuOption value={"Summer2020"}>
                                <Text style={styles.menuContent}>Summer2020</Text>
                                </MenuOption>

                                <MenuOption value={"Fall2020"}>
                                <Text style={styles.menuContent}>Fall2020</Text>
                                </MenuOption>

                                <MenuOption value={"Spring2021"}>
                                <Text style={styles.menuContent}>Spring2021</Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>

                        <Text></Text>

                        <Menu style={{backgroundColor: '#6d8dc0'}} onSelect={value => alert(`You Clicked : ${value}`)}>
                            <MenuTrigger  >
                                <Text style={styles.headerText}>COURSE</Text>
                            </MenuTrigger  >

                            <MenuOptions>
                                <MenuOption value={"Spring2020"}>
                                <Text style={styles.menuContent}>CS4261</Text>
                                </MenuOption>

                                <MenuOption value={"Summer2020"}>
                                <Text style={styles.menuContent}>CS3630</Text>
                                </MenuOption>

                                <MenuOption value={"Fall2020"}>
                                <Text style={styles.menuContent}>CS4649</Text>
                                </MenuOption>

                                <MenuOption value={"Spring2021"}>
                                <Text style={styles.menuContent}>CS4641</Text>
                                </MenuOption>

                                <MenuOption value={"Spring2020"}>
                                <Text style={styles.menuContent}>CS4731</Text>
                                </MenuOption>

                                <MenuOption value={"Summer2020"}>
                                <Text style={styles.menuContent}>CS8803</Text>
                                </MenuOption>

                            </MenuOptions>
                        </Menu>
                    </MenuProvider>

                </View>

                <View style={styles.footer}>
                    <TextInput style={styles.TextInput} placeholder = '<User Name>' placeholderTextColor = 'white'>

                    </TextInput>
                </View>

                {/* <TouchableOpacity style={styles.addIcon}>
                    <Icon name="md-add" size={30} color="#fff" />
                </TouchableOpacity> */}
            </View>
        );
    }
}

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
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
      },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
        // justifyContent: 'center'
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
    },
    menuContent: {
        backgroundColor: '#ddd',
        color: "#ff5050",
        fontWeight: "bold",
        padding: 1,
        fontSize: 20
    },
    MenuContainer: {
        flex: 1,
        padding: 1
    }
});
