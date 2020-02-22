import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
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
      <RootSwitch />
    );
  }
  // ----------------------------------------------------------------
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
})