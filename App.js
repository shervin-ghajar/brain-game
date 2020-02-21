import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Intro from './assets/animations/intro.json'
//--------------------------------------------------------------------------------------------
export default class App extends Component {
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
        <View style={styles.animationContainer}>
          <LottieView
            source={Intro}
            // onAnimationFinish={() => this.handleTitle()}
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
    backgroundColor: "#FFF6AF"
  },
  animationContainer: {
    width: 250,
    height: 250,
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
