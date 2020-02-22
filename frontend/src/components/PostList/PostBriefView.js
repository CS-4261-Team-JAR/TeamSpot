import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PostBreifView extends Component{
    /*static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        currentNumber: PropTypes.number.isRequired,
        desiredNumber: PropTypes.number.isRequired,
    }*/

    render(){
        //const { title, description, currentNumber, desiredNumber } = this.props;
        const title = "Post Title"
        const description = "This is the project description. It can be multiple lines long."
        const currentNumber = 2
        const desiredNumber = 5
        var circleColor = this.getCircleColor(currentNumber, desiredNumber)
        return(
            // <View style = {styles.container}>
            <View style={styles.container}>
                <View style={styles.topLine}>
                    <Text style={styles.titleText}>{title}</Text>
                    <View style={styles.numberPart}>
                        <Circle color={circleColor} size={10}></Circle>
                        <Text style={styles.numberText}>{currentNumber}/{desiredNumber}</Text>
                    </View>
                </View>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
        );
    }

    getCircleColor(currentNumber, desiredNumber) {
        if (currentNumber < desiredNumber) {
            return "#00FF4E"
        } else {
            return "red"
        }
    }
}

class Circle extends Component{
    static propTypes = {
        color: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
    }
    render() {
        const { color, size } = this.props;
        return (
            <View style={{
                marginBottom: 'auto',
                marginTop: 'auto',
                width: size,
                height: size,
                borderRadius: size/2,
                backgroundColor: color
            }} />
        )
    }
}

const textColor = '#2699FB'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
        borderBottomColor: "#BCE0FD",
        borderBottomWidth: 1,
        marginTop: 20
    },
    topLine: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10,
    },
    titleText: {
        color: textColor,
        fontWeight: 'bold',
        fontSize: 16,
    },
    numberPart: {
        flexDirection: 'row',
    },
    numberText: {
        color: textColor,
        paddingLeft: 5,
    },
    descriptionText: {
        color: textColor
    },
});
