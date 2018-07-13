import { AppRegistry, Platform } from 'react-native';
import { StackNavigator } from "react-navigation";
import Categories from 'iDrink/src/pages/categories/Categories';
import Constants from 'iDrink/src/constants/Constants';
import Drinks from 'iDrink/src/pages/drinks/Drinks';


const PagesStack = StackNavigator({

  Categories: {
    screen: Categories,
    navigationOptions: ({ navigation }) => ({
      title: "iDrink",
      headerBackTitle: 'Back',
      headerTintColor: (Platform.OS === 'ios' ? Constants.colors.colorPrimary : "white"),
      headerStyle: { backgroundColor: Platform.OS === 'ios' ? undefined : Constants.colors.colorPrimary },
    })
  },

  Drinks: {
    screen: Drinks,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.strCategory}`,
      headerTintColor: (Platform.OS === 'ios' ? Constants.colors.colorPrimary : "white"),
      headerStyle: { backgroundColor: Platform.OS === 'ios' ? undefined : Constants.colors.colorPrimary },
    })
  },

});
const Root = PagesStack;

export default Root;
AppRegistry.registerComponent('Categories', () => Categories);