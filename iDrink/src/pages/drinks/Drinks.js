import React, { Component } from 'react';
import {  StatusBar, TouchableNativeFeedback, TouchableOpacity, Platform, ActivityIndicator, View, FlatList } from 'react-native';
import styles from './Drinks.style';
import { Card } from 'react-native-elements'
import DrinkDetails from 'iDrink/src/components/drinkDetails/DrinkDetails';


export default class Drinks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalDrinkDetails: false,
        }
    }

    componentDidMount() {
        this.searchCategories();
    }

    setModalDrinkDetails = (visible) => {
       
            this.setState({ modalDrinkDetails:visible });
        
        
    }

    onPressDrinks = (drink) => {
        this.setModalDrinkDetails(true);
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
                <DrinkDetails
                    isModalVisible={this.state.modalDrinkDetails}
                    isModalLoading={this.state.modalLoading}
                    setModalVisible={this.setModalDrinkDetails}
                />
                {Platform.OS === 'ios' ? (<FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.onPressDrinks(item)}>
                            <Card
                                image={{ uri: item.strDrinkThumb }}
                                title={item.strDrink}
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

