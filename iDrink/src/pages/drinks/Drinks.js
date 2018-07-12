import React, { Component } from 'react';
import { Text, StatusBar, TouchableNativeFeedback, TouchableOpacity, Platform, ActivityIndicator, View, FlatList, Image } from 'react-native';
import styles from './Drinks.style';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class Drinks extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        this.searchCategories();
    }


    searchCategories = () => {
        return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + this.props.navigation.state.params.strCategory.replace(" ", "_"))
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


    onPressDrinks = (drink) => {
        console.log(drink);
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
                {console.log('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + this.props.navigation.state.params.strCategory.replace(" ", "_"))}
                {Platform.OS === 'ios' ? (<FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.onPressDrinks(item)}>
                            <Card
                                image={{ uri: item.strDrinkThumb }}
                                title={item.strDrink}
                                featuredTitle={item.strDrink}
                                featuredTitleStyle={{ color: "white", backgroundColor: "rgba(0,0,0,0.6)" }}
                            >
                            </Card>
                        </TouchableOpacity>
                    }
                />
                ) :
                    (
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({ item }) =>
                                <TouchableNativeFeedback
                                    onPress={() => this.onPressDrinks(item)}
                                    background={TouchableNativeFeedback.SelectableBackground()}>
                                    <Card
                                        image={{ uri: item.strDrinkThumb }}
                                        title={item.strDrink}
                                        featuredTitle={item.strDrink}
                                        featuredTitleStyle={{ color: "white", backgroundColor: "rgba(0,0,0,0.6)" }}
                                    >
                                    </Card>
                                </TouchableNativeFeedback>
                            }
                        />
                    )}




            </View>
        );
    }
}

