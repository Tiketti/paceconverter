import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class paceconverter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Pace Converter
        </Text>
        <Text style={styles.instructions}>
          Convert pace from minutes per mile to {'\n'}
          minutes per kilometer and vice versa.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('paceconverter', () => paceconverter);
