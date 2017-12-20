/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Linking
} from 'react-native';

import codePush from 'react-native-code-push';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component<{}> {
  openExternalMap() {
    const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:'
    const url = scheme + '1.3113786,103.856568?q=1.3113786,103.856568&z=17'
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  }

  openInternalMap() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! This is wrapped by CodePushv3
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button onPress={this.openExternalMap} title="Open External Map" />
        <Button onPress={this.openInternalMap} title="Open Internal Map" />
      </View>
    );
  }
}

App = codePush(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App
