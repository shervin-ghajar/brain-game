import React, { Component } from 'react';
import { View, Text, Animated, Easing, BackHandler, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
//---------------------------------------------------------------------------------
import { ButtonS1, LevelComponent, ButtonS2 } from '../components';
import { introColor, greenColor, redColor, orangeColor } from '../assets/colors';
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
            return orangeColor
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
        this.setState({ isFinished: false, isPlayed: true, tryAgain: false, levelCount: 0, timer: 0 }, () => {
            this.interval = setInterval(this.timeCounter, 1000);
        })
    }

    renderPlay = () => {
        return (
            <View style={[styles.view, { alignItems: "center" }]}>
                <ButtonS1
                    onPress={this.handlePlay}
                    imageSource={require("../assets/images/play-icon.png")}
                    imageStyle={{ width: 140, height: 140 }}
                    text={this.state.tryAgain ? "Try Again" : null}
                    textColor={introColor}
                />
                <View style={{ position: "absolute", bottom: 20, justifyContent: "center" }}>
                    <ButtonS2 text={"Exit Game"} textColor={introColor} onPress={() => BackHandler.exitApp()} imageSource={require("../assets/images/exit-icon.png")} imageStyle={{ marginRight: 15 }} />
                </View>
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
                    <View style={{ flexDirection: "row", justifyContent: 'flex-end', marginTop: 20, bottom: -1 }}>
                        <View style={{ backgroundColor: greenColor, width: 110, alignItems: "center", borderWidth: 1, borderTopLeftRadius: 10, borderColor: "white", left: 0.5 }}>
                            <Text style={{ ...styles.text, color: "white" }}>Round {this.state.levelCount + 1} of {data.length}</Text>
                        </View>
                        <View style={{ backgroundColor: this.timerColor(), width: 110, alignItems: "center", borderWidth: 1, borderTopRightRadius: 10, borderColor: "white", right: 0.5 }}>
                            <Text style={{ ...styles.text, color: "white" }}>30:{this.state.timer < 10 ? "0" + this.state.timer : this.state.timer}</Text>
                        </View>
                    </View>
                    <LevelComponent title={title} isSmile={isSmile} onPress={this.handleOnPress} answer={answer} />
                </View >
            )
        }
    }

    renderFinish() {
        let content = []
        if (this.state.timer < 31) {
            content.push(
                <View style={styles.contentContainer} key={this.state.timer + "_perfect"}>
                    <Text style={{ ...styles.text, color: greenColor, fontSize: 40, fontWeight: "bold", }}>Perfect</Text>
                    <Text style={{ ...styles.text, color: greenColor, fontSize: 20, }}>0s - 30s</Text>
                </View>
            )
        } else if (this.state.timer < 51) {
            content.push(
                <View style={styles.contentContainer} key={this.state.timer + "_great"}>
                    <Text style={{ ...styles.text, color: orangeColor, fontSize: 40, fontWeight: "bold", }}>Great</Text>
                    <Text style={{ ...styles.text, color: orangeColor, fontSize: 20, }}>30s - 50s</Text>
                </View>
            )
        } else {
            content.push(
                <View style={styles.contentContainer} key={this.state.timer + "_good"} >
                    <Text style={{ ...styles.text, color: redColor, fontSize: 40, fontWeight: "bold", }}>Good</Text>
                    <Text style={{ ...styles.text, color: redColor, fontSize: 20, }}>50s - 60s</Text>
                </View>
            )
        }
        return (
            <View style={styles.view}>
                <View style={styles.animationContainer}>
                    <LottieView
                        source={finishAnimation}
                        autoPlay
                        loop
                        resizeMode="cover" />
                    <View style={{ flexDirection: "column", position: "absolute", bottom: 100 }}>
                        {content}
                    </View>
                    <View style={{ position: "absolute", bottom: 20, alignItems: "center" }}>
                        <Text style={{ ...styles.text, color: introColor, fontSize: 20, fontWeight: "bold", }}>Your Score: {this.state.timer}s</Text>
                        <Text style={{ ...styles.text, color: "white", fontSize: 17, marginVertical: 5 }}>Best Score: 27s</Text>
                    </View>
                </View>
                <View style={{ width: deviceWidth, flexDirection: "row", position: "absolute", bottom: 20, alignItems: "center", justifyContent: "space-around" }}>
                    <ButtonS2 onPress={{}} imageSource={require("../assets/images/exit-icon.png")} imageStyle={{ marginRight: 15 }} />
                    <ButtonS2 onPress={() => this.handlePlay()} imageSource={require("../assets/images/retry-icon.png")} />
                </View>
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


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

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
    contentContainer: {
        alignItems: "center"
    },
    text: {
        fontFamily: "serif"
    }
}

export { Home }