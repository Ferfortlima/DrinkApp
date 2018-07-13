import React, { Component } from 'react';
import { Text, StatusBar, TouchableNativeFeedback, TouchableOpacity, ImageBackground, Platform, ActivityIndicator, View, FlatList } from 'react-native';
import styles from './Drinks.style';
import DrinkDetails from 'iDrink/src/components/drinkDetails/DrinkDetails';
import ModalLoading from 'iDrink/src/components/modalLoading/ModalLoading';

export default class Drinks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalDrinkDetails: false,
            isLoadingModal: false,
            details: ''
        }
    }

    componentDidMount() {
        this.searchCategories();
    }

    setModalDrinkDetails = (visible) => {

        this.setState({ modalDrinkDetails: visible });


    }

    getDrinkDetail(id) {
        this.setState({
            isLoadingModal: true,
        }, function () {
            setTimeout(() => {

                return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({
                            isLoadingModal: false,
                            details: responseJson
                        }, function () {
                            this.setModalDrinkDetails(true);

                        });

                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }, 3000);
        });

    }




    onPressDrinks = (drink) => {
        this.getDrinkDetail(drink.idDrink);

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

        RenderDrinks = item => {
            return (<ImageBackground source={{ uri: item.drink.strDrinkThumb }} style={styles.backgroundImage}>
                <View style={styles.containerInsideImage}>
                    <View style={styles.containerTextDrinks}>
                        <Text adjustsFontSizeToFit style={styles.drinkNameText}>{item.drink.strDrink}</Text>
                    </View>
                </View>

            </ImageBackground>);
        }

        return (
            <View style={styles.container}>
                <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
                <ModalLoading
                    loading={this.state.isLoadingModal} />
                <DrinkDetails
                    detailsDrink={this.state.details}
                    isModalVisible={this.state.modalDrinkDetails}
                    isModalLoading={this.state.modalLoading}
                    setModalVisible={this.setModalDrinkDetails}
                />
                <FlatList
                    data={this.state.dataSource}
                    numColumns={3}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.onPressDrinks(item)}>
                            <RenderDrinks drink={item} />

                        </TouchableOpacity>

                    }
                />

            </View>
        );
    }
}

