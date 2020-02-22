import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { introColor } from '../assets/colors';
import introAnimation from '../assets/animations/intro.json'
//--------------------------------------------------------------------------------------------
class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTitle: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.handleTitle()
        }, 1300);
    }
    handleTitle = () => {
        this.setState({ showTitle: true })
    }
    handleOnFinish = () => {
        this.props.navigation.navigate("App")
    }
    renderIntroTitle() {
        if (this.state.showTitle) {
            return (
                <View>
                    <Text style={styles.titleStyle}>BRAIN GAMES</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.view}>
                <StatusBar hidden />
                <View style={styles.animationContainer}>
                    <LottieView
                        source={introAnimation}
                        onAnimationFinish={this.handleOnFinish}
                        autoPlay
                        loop={false}
                        resizeMode="cover" />
                </View>
                {this.renderIntroTitle()}
            </View>
        );
    }
}
//--------------------------------------------------------------------------------------------
const styles = {
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: introColor
    },
    animationContainer: {
        width: 280,
        height: 280,
        alignItems: "center",
        marginBottom: 50,
    },
    titleStyle: {
        color: "#444A54",
        fontSize: 25,
        fontFamily: "serif",
        fontWeight: "bold",
        position: "absolute",
        alignSelf: "center",
    }
}

export { Intro }