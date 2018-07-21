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

  constructor() {
    super();
    this._onPress = this._onPress.bind(this)
  }

  _onPress(index) {
    this.props.handleUnitClick(index)
  }


  render() {
    let p = this.props
    let r = p.appReducer
    return (
      <View style={s.container}>
        <Text style={[s.buttonText, r.indexOfMarkedUnit === 0 && s.marked]}
              onPress={() => this._onPress(0)}>
          button1
        </Text>
        <Text style={[s.buttonText, r.indexOfMarkedUnit === 1 && s.marked]}
              onPress={() => this._onPress(1)}>
          button1
        </Text>
        <Text style={[s.buttonText, r.indexOfMarkedUnit === 2 && s.marked]}
              onPress={() => this._onPress(2)}>
          button1
        </Text>
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
