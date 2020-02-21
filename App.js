import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Intro from './assets/animations/intro.json'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderGameTitle() {
    return (
      <View>
        <Text style={styles.titleStyle}>BRAIN GAMES</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.animationContainer}>
          <LottieView source={Intro} autoPlay loop resizeMode="cover" />
        </View>
        {this.renderGameTitle()}
      </View>
    );
  }
}

const styles = {
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#2c2861"
  },
  animationContainer: {
    width: 200,
    height: 200,
    alignItems: "center",
    marginBottom: 50,
  },
  titleStyle: {
    color: "yellow",
    fontSize: 25,
    fontFamily: "#F2DA69"
  }
}
