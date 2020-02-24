import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
//---------------------------------------------------------------------------------
import { ButtonS1, LevelComponent } from '../components';
import { introColor, greenColor, redColor } from '../assets/colors';
import { data } from "../services/api"
//---------------------------------------------------------------------------------
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlayed: false,
            tryAgain: false,
            levelCount: 0
        };
        this.Animation = new Animated.Value(0)
    }

    handlePlay = () => {
        this.setState({ isPlayed: true, tryAgain: false })
    }

    renderPlay = () => {
        return (
            <View style={styles.view}>
                <ButtonS1
                    onPress={this.handlePlay}
                    imageSource={require("../assets/images/play-2.png")}
                    text={this.state.tryAgain ? "Play Again" : "Press to Play"}
                    textColor={introColor}
                />
            </View>
        )
    }
    handleOnPress = (answer) => {
        if (answer && (this.state.levelCount + 1) !== data.length) {
            this.setState({ levelCount: this.state.levelCount + 1 })
            return;
        }
        this.setState({ tryAgain: true })
    }
    renderLevel = () => {
        if (data) {
            let { id, title, isSmile, answer } = data[this.state.levelCount]
            return (
                <View style={styles.view}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
                        <View style={{ backgroundColor: greenColor, width: 110, alignItems: "center", borderWidth: 1, borderTopLeftRadius: 10, borderColor: "white" }}>
                            <Text style={{ color: "white", fontFamily: "serif" }}>Round {this.state.levelCount} of {data.length}</Text>
                        </View>
                        <View style={{ backgroundColor: redColor, width: 110, alignItems: "center", borderWidth: 1, borderTopRightRadius: 10, borderColor: "white" }}>
                            <Text style={{ color: "white", fontFamily: "serif" }}>30:00</Text>
                        </View>
                    </View>
                    <LevelComponent title={title} isSmile={isSmile} onPress={this.handleOnPress} answer={answer} />
                </View>
            )
        }
    }

    render() {
        if (this.state.tryAgain) {
            return this.renderPlay()
        } else if (this.state.isPlayed) {
            return this.renderLevel()
        }
        return this.renderPlay()
    }
}

const styles = {
    view: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#001046",
    }
}

export { Home }