import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PostBriefView extends Component{
    static propTypes = {
        data: PropTypes.object.isRequired,
    }
    

    render(){
        const {data} = this.props
        const myPost = global.userID == data.author._id
        const title = myPost ? "✎ " + data.title : data.title
        const description = data.description.slice(0, 142) + ' ...'
        const desiredNumber = data.status ? data.status.total : data.total//5
        const currentNumber = data.status ? data.status.remaining : data.members.length//2
        const tags = data.tags//2
        var circleColor = this.getCircleColor(currentNumber, desiredNumber)
        return(
            // <View style = {styles.container}>
            <TouchableOpacity key={data.key} onPress={function(){
                Actions.postview({
                    postid: data._id,
                })
            }}>
                <View style={myPost ? styles.myContainer : styles.container}>
                    <View style={styles.topLine}>
                        <Text style={styles.titleText}>{title}</Text>
                        <View style={styles.numberPart}>
                            <Circle color={circleColor} size={10}></Circle>
                            <Text style={styles.numberText}>{currentNumber}/{desiredNumber}</Text>
                        </View>
                    </View>
                    <Text style={styles.descriptionText}>{description}</Text>
                    <Text style={styles.tags}>Tags: {tags.join(', ')}</Text>
                </View>
            </TouchableOpacity>
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
        marginTop: 5,
    },
    myContainer: {
        justifyContent: 'center',
        padding: 20,
        borderBottomColor: "#BCE0FD",
        borderBottomWidth: 1,
        marginTop: 5,
        //backgroundColor: '#e6fff2',
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
        // color: textColor,
        marginBottom: 5
    },
    tags: {
        color: textColor,
        marginTop: 5
    },
});
