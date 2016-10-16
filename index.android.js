'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class paceconverter extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '0:00' };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>
            Pace Converter
          </Text>
          <Text style={styles.instructions}>
            Convert pace from minutes per mile to {'\n'}
            minutes per kilometer and vice versa.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text} />
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text} />
        </View>
      </View>
    );
  }
}

const lightColor = '#ffffff';
const darkColor = '#b00000';
const inputBg = 'skyblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: darkColor, 
    padding: 10 
  },
  inputContainer: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: inputBg,
  },
  input: {
    width: 200,
    fontSize: 20,
    textAlign: 'center',
    margin: 25
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: lightColor,
  },
  instructions: {
    textAlign: 'center',
    color: lightColor,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('paceconverter', () => paceconverter);
