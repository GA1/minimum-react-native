import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import {handleUnitClick} from "../actions/article/appActions";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Root extends Component<Props> {
  render() {
    return (
      <View style={s.container}>
        <View style={s.button}>
          <Text style={s.buttonText}>button1</Text>
        </View>
        <View style={s.button}>
          <Text style={s.buttonText}>button2</Text>
        </View>
        <View style={s.button}>
          <Text style={s.buttonText}>button3</Text>
        </View>
        <Text style={s.welcome}>Welcome to React Native!</Text>
        <Text style={s.instructions}>To get started, edit App.js</Text>
        <Text style={s.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  buttonText: {
    color: 'red',
  },
  button: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'green',
  },
  marked: {
    backgroundColor: 'blue',
  },
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




function mapStateToProps(state) {
  return {
    appReducer: state.appReducer
  };
}

export default connect(mapStateToProps, {
  handleUnitClick
})(Root);
