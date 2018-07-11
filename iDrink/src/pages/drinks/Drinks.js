import React, { Component} from 'react';
import { Text, StatusBar,Platform, ActivityIndicator, View, FlatList, Image } from 'react-native';
import styles from './Drinks.style';
import { Button } from 'react-native-elements';


export default class Drinks extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: false }
    }

    componentDidMount() {
    }


    searchCategories = () => {
        return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    dataSource: responseJson.drinks,
                    isLoading: false,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }


    onPressCategories = (categorie) => {
        console.log(categorie);
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }


        return (
            <View style={styles.container}>
                <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
               {console.log(this.props.navigation.state.params)}
                        
                                <Text> oi</Text>
                           
            </View>
        );
    }
}

