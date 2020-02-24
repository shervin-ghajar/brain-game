import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// ----------------------------------------------------------------
import RootSwitch from './routes/switch';
// ----------------------------------------------------------------
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  // ----------------------------------------------------------------
  render() {
    return (
      <View style={styles.view}>
        <StatusBar hidden />
        <RootSwitch />
      </View>
    );
  }
  // ----------------------------------------------------------------
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff'
  }
})