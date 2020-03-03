import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ButtonS2 } from './buttonS2';
import { greenColor, redColor } from '../assets/colors';
//--------------------------------------------------------------------------
class LevelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleOnPress = (userAnswer) => {
        if (userAnswer == this.props.answer) {
            return this.props.onPress(true)
        }
        return this.props.onPress(false)
    }

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    {
                        this.props.isSmile ?
                            <Image source={require("../assets/images/smily-face-white2.png")} style={styles.imageStyle} />
                            :
                            <Image source={require("../assets/images/sad-face-white2.png")} style={styles.imageStyle} />
                    }
                </View>
                <View style={styles.answerContainer}>
                    <View style={{ width: 170, flexDirection: "row", justifyContent: "space-between" }}>
                        <ButtonS2 onPress={() => this.handleOnPress(false)} imageSource={require("../assets/images/false-icon.png")} borderColor={redColor} />
                        <ButtonS2 onPress={() => this.handleOnPress(true)} imageSource={require("../assets/images/true-icon.png")} borderColor={greenColor} />
                    </View>
                </View>
            </View >
        );
    }
}


const styles = {
    view: {
        flex: 1,
        width: "95%",
        alignSelf: "center",
    },
    titleContainer: {
        flex: 0.15,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: "white",
        borderRadius: 50,
        borderWidth: 1
    },
    titleStyle: {
        fontSize: 25,
        fontFamily: "serif",
        color: "white"
    },
    imageContainer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    imageStyle: {
        width: 170,
        height: 170,
        resizeMode: "cover"
    },
    answerContainer: {
        flex: 0.25,
        justifyContent: "flex-end",
        alignItems: "center"
    }
}

export { LevelComponent }