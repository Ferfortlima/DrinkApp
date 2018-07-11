/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {  AppRegistry } from 'react-native';
import {  StackNavigator } from "react-navigation";
import Home from './src/pages/home/Home';


const HomeStack = StackNavigator({

  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "iDrink",
      headerTintColor: "red",
      headerStyle: { backgroundColor: "blue" },
    })
  },


});
const Root = HomeStack;

export default Root;
AppRegistry.registerComponent('Home', () => Home);