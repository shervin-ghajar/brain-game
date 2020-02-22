import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
//---------------------------------------------------------------------------------
import { ButtonS1 } from '../components';
import { introColor } from '../assets/colors';
//---------------------------------------------------------------------------------
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlayed: false
        };
        this.Animation = new Animated.Value(0)
    }

    handlePlay = () => {
        this.setState({ isPlayed: true })
    }

    renderPlay() {
        return (
            <View style={styles.view}>
                <ButtonS1
                    onPress={this.handlePlay}
                    imageSource={require("../assets/images/play-2.png")}
                    text={"Press to Play"}
                    textColor={introColor}
                />
            </View>
        )
    }

    renderDefault() {
        return (
            <View style={styles.view}>
                <Text style={{ color: "white", fontSize: 18 }}>Play</Text>
            </View>
        )
    }

    render() {
        if (this.state.isPlayed) {
            return this.renderDefault()
        }
        return this.renderPlay()
    }
}

const styles = {
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#001046"
    }
}

export { Home }