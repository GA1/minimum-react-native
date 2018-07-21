import React, {Component} from 'react';
import Root from "./src/components/Root";
import {Provider} from "react-redux";
import reducers from './src/reducers/index';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'

const logger = createLogger({
});

var store
// store = createStore(reducers, applyMiddleware(logger));
store = createStore(reducers);


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}