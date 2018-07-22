import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import {handleButtonClick} from "../actions/article/appActions";
import ButtonsContainer from "./buttonsContainer";

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
    this.props.handleButtonClick(index)
  }


  render() {
    console.log('Root - render')
    return (
      <ScrollView>
        <View style={s.container}>
          <ButtonsContainer />
          <Text style={s.welcome}>Welcome to React Native!</Text>
          <Text style={s.instructions}>To get started, edit App.js</Text>
          <Text style={s.instructions}>{instructions}</Text>
        </View>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
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
  handleButtonClick
})(Root);
