import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Route from 'iDrink/src/components/route/Route';


export default class App extends Component {

  componentDidMount() {
   
  }

  render() {
    return (
      <Route/>
    );
  }
}