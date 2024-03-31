import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { persistor, store } from './services/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.view}>
            <StatusBar hidden />
            <RootSwitch />
          </View>
        </PersistGate>
      </Provider>
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