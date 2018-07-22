import React, {Component} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Button extends Component<Props> {

  constructor() {
    super();
    this._onPress = this._onPress.bind(this)
  }

  _onPress(index) {
    this.props.handleUnitClick(index)
  }


  render() {
    let p = this.props
    return (
      <Text key={p.number} style={[s.buttonText, p.isMarked && s.marked]}
            onPress={() => this._onPress(p.number)}>
        button + {p.number}
      </Text>
    );
  }
}

const s = StyleSheet.create({
  buttonText: {
    color: 'red',
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'grey',
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
});
