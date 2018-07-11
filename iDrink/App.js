/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {  AppRegistry, Platform } from 'react-native';
import {  StackNavigator } from "react-navigation";
import Categories from './src/pages/categories/Categories';
import Constants from './src/constants/Constants';
import Drinks from './src/pages/drinks/Drinks';


const PagesStack = StackNavigator({

  Categories: {
    screen: Categories,
    navigationOptions: ({ navigation }) => ({
      title: "",
      headerTintColor: "black",
      headerStyle: { backgroundColor: Platform.OS === 'ios' ? undefined : Constants.colors.colorPrimary  },
    })
  },

  Drinks: {
    screen: Drinks,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.strCategory}`,
      headerTintColor: "black",
      headerStyle: { backgroundColor: Platform.OS === 'ios' ? undefined : Constants.colors.colorPrimary  },
    })
  },

});
const Root = PagesStack;

export default Root;
AppRegistry.registerComponent('Categories', () => Categories);