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

  _onPress() {
    this.props.handleButtonClick(this.props.number)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.isMarked !== nextProps.isMarked
  }
  
  render() {
    console.log('Button - render')
    let p = this.props
    return (
      <Text style={[s.buttonText, p.isMarked && s.marked]}
            onPress={this._onPress}>
        button + {p.number}
      </Text>
    );
  }
}

const s = StyleSheet.create({
  buttonText: {
    color: 'red',
    width: 100,
    height: 40,
    margin: 2,
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
