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
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './Components/HomeScreen'
import ProfileScreen from './Components/ProfileScreen'

const RNNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
})

AppRegistry.registerComponent('RNNavigation', () => RNNavigation);
