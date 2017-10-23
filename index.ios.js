/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';


// import Splash from './splash';
import Login from './src/components/login/Login';
import RegisterStep1 from './src/components/register/RegisterStep1';
import RegisterStep2 from './src/components/register/RegisterStep2';
import RegisterStep3 from './src/components/register/RegisterStep3';

//import RegisterStep1 from './src/components/register/register_step1'

// export default class AwesomeProject extends Component {
//   render() {
//     return (
//       <Login />
//     );
//   }
// }

export default AwesomeProject = StackNavigator({
  Login: { screen: Login },
  RegisterStep1: { screen: RegisterStep1 },
  RegisterStep2: { screen: RegisterStep2 },
  RegisterStep3: { screen: RegisterStep3 },
});

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
