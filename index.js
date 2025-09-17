/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import DemoScreen from './src/screens/DemoScreen';

AppRegistry.registerComponent(appName, () => DemoScreen);
