import React, { Component } from 'react';
import { Text, Dimensions, ActivityIndicator, View, FlatList, Image } from 'react-native';
import styles from './Home.style';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        this.searchCategories();
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
                <View style={styles.containerImage}>
                    <Image source={{ uri: 'https://www.thecocktaildb.com/images/ingredients/ice.png' }}
                        style={styles.imageTitle} />
                </View>
                <View style={styles.containerListCategories}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) =>
                            <View style={styles.containerButton}>
                                <Text>{item.strCategory}</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}

