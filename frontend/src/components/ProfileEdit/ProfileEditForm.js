import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
// import ImagePicker from 'react-native-image-picker';

// const options = {
//     title: 'my pic',
//     takePhotoButtonTitle: 'Take photo with your camera', 
//     chooseFromLibraryButtonTitle: 'Choose photo from library'

// }

export default class ProfileEditForm extends Component{
    profileView() {
        Actions.profileView()
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         avatarSource: null
    //     }
    // }

    // addImage() {
    //     ImagePicker.showImagePicker(options, (response) => {
    //         console.log('Response = ', response);
          
    //         if (response.didCancel) {
    //           console.log('User cancelled image picker');
    //         } else if (response.error) {
    //           console.log('ImagePicker Error: ', response.error);
    //         }  else {
    //           const source = { uri: response.uri };
          
    //           // You can also display the image using data:
    //           // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
    //           this.setState({
    //             avatarSource: source,
    //           });
    //         }
    //       });
    // }
    
    render(){
        return(
            // <View style = {styles.container}>
            <View style={styles.container}>
                <TouchableOpacity style = {styles.ImageCountainer}>
                    <Text style = {styles.buttonText}>
                        Select Image
                    </Text>
                </TouchableOpacity>

                <Text style = {styles.text}> Name </Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = ""
                    returnKeyType = 'next'/>

                <Text style = {styles.text}> Major </Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = ""
                    returnKeyType = 'next'/>

                <Text style = {styles.text}> Year </Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = ""
                    returnKeyType = 'next'/>

                <Text style = {styles.text}> Personal Statement </Text>
                <TextInput 
                    style = {styles.PS_input}
                    placeholder = ""
                    returnKeyType = 'next'/>

                <Text style = {styles.text}> Skill </Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = "C++, Java, Python..."
                    returnKeyType = 'next'/>

                <TouchableOpacity style = {styles.buttonCountainer} onPress = {this.profileView}>
                    <Text style = {styles.buttonText}>
                        Save Changes
                    </Text>
                </TouchableOpacity>
                

                {/* <TextInput 
                    style = {styles.input}
                    placeholder = "Confirm Password"
                    returnKeyType = 'go'/> */}

                {/* <TouchableOpacity onPress = {this.signup}>
                    <Text 
                        style = {styles.textInput}> 
                        Create a new account? Signup 
                    </Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 35,
        backgroundColor: 'rgba(255,255,255,1)',
        color: '#000000',
        margin: 10,
        marginBottom: 1,
        paddingHorizontal: 10
    },
    buttonCountainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        margin: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    textInput: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
        // justifyContent: 'center'
        // alignItems: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontWeight: '700'
    },
    PS_input: {
        height: 35,
        backgroundColor: 'rgba(255,255,255,1)',
        color: '#000000',
        margin: 10,
        marginBottom: 1,
        paddingHorizontal: 10,
        height: 100
    },
    // ImageCountainer: {
    //     margin: 10,
    //     backgroundColor: '2980b9',
    //     padding: 10
    // }
});
