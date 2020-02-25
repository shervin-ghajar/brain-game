import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';
//---------------------------------------------------------------------------------
import { ButtonS1, LevelComponent } from '../components';
import { introColor, greenColor, redColor } from '../assets/colors';
import { data } from "../services/api"
import finishAnimation from '../assets/animations/ontime-finished.json'
//---------------------------------------------------------------------------------
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlayed: false,
            tryAgain: false,
            isFinished: false,
            levelCount: 0,
            timer: 0
        };
        this.Animation = new Animated.Value(0)
    }

    timerColor = () => {
        let time = this.state.timer
        if (time > 30 && time < 51) {
            return "#ff5531"
        } else if (time > 50) {
            return redColor
        }
        return greenColor
    }

    timeCounter = () => {
        this.setState({ timer: this.state.timer + 1 }, () => {
            if (this.state.timer > 59) {
                if (this.state.levelCount !== data.length) {
                    clearInterval(this.interval)
                    this.setState({ tryAgain: true, levelCount: 0 })
                }
            }
        })

    }

    handlePlay = () => {
        this.setState({ isPlayed: true, tryAgain: false, timer: 0 }, () => {
            this.interval = setInterval(this.timeCounter, 1000);
        })
    }

    renderPlay = () => {
        return (
            <View style={[styles.view, { alignItems: "center" }]}>
                <ButtonS1
                    onPress={this.handlePlay}
                    imageSource={require("../assets/images/play-2.png")}
                    text={this.state.tryAgain ? "Try Again" : null}
                    textColor={introColor}
                />
            </View>
        )
    }

    handleOnPress = (answer) => {
        if (answer) {
            if ((this.state.levelCount + 1) == data.length) {
                clearInterval(this.interval)
                this.setState({ isFinished: true })
                return;
            }
            this.setState({ levelCount: this.state.levelCount + 1 })
            return;
        }
        clearInterval(this.interval)
        this.setState({ tryAgain: true, levelCount: 0 })
    }

    renderLevel = () => {
        if (data) {
            let { title, isSmile, answer } = data[this.state.levelCount]
            return (
                <View style={styles.view}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: 20 }}>
                        <View style={{ backgroundColor: greenColor, width: 110, alignItems: "center", borderWidth: 1, borderTopLeftRadius: 10, borderColor: "white" }}>
                            <Text style={{ color: "white", fontFamily: "serif" }}>Round {this.state.levelCount + 1} of {data.length}</Text>
                        </View>
                        <View style={{ backgroundColor: this.timerColor(), width: 110, alignItems: "center", borderWidth: 1, borderTopRightRadius: 10, borderColor: "white" }}>
                            <Text style={{ color: "white", fontFamily: "serif" }}>30:{this.state.timer < 10 ? "0" + this.state.timer : this.state.timer}</Text>
                        </View>
                    </View>
                    <LevelComponent title={title} isSmile={isSmile} onPress={this.handleOnPress} answer={answer} />
                </View>
            )
        }
    }

    renderFinish() {
        let content = []
        if (this.state.timer < 31) {
            content.push(
                <View key={this.state.timer + "great_job"} style={styles.animationContainer}>
                    <LottieView
                        source={finishAnimation}
                        autoPlay
                        loop
                        resizeMode="cover" />
                    <Text style={{ color: "white" }}>Great Job</Text>
                </View>
            )
        } else if (this.state.timer < 51) {
            content.push(
                <View key={this.state.timer + "good_job"}>
                    <Text style={{ color: "white" }}>Good Job</Text>
                </View>
            )
        } else {
            content.push(
                <View key={this.state.timer + "not_bad"} >
                    <Text style={{ color: "white" }}>Not Bad</Text>
                </View>
            )
        }
        return (
            <View style={styles.view}>
                {content}
            </View>
        )
    }

    render() {
        if (this.state.isFinished) {
            return this.renderFinish()
        }
        else if (this.state.tryAgain) {
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
        alignItems: "center",
        backgroundColor: "#001046",
    },
    animationContainer: {
        width: "100%",
        height: 400,
        alignItems: "center",
        marginBottom: 50,
        alignSelf: "center"
    },
}

export { Home }