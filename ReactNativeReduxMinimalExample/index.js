/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native';

// Todo remove once react-native guys fix it
function ignoreStrangeWarnings() {
  YellowBox.ignoreWarnings(['Remote debugger', 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
}

ignoreStrangeWarnings()
AppRegistry.registerComponent(appName, () => App);
