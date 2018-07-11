import React, { Component} from 'react';
import { Text, StatusBar,Platform, ActivityIndicator, View, FlatList, Image } from 'react-native';
import styles from './Categories.style';
import { Button } from 'react-native-elements';


export default class Categories extends Component {

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


    onPressCategories = (categorie) => {
        console.log(categorie);

        this.props.navigation.navigate("Drinks", {...categorie})
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
                <View style={styles.containerTitle}>
                    <View style={styles.containerTextTitle}>
                        <Text style={styles.textTitle}>iDrink</Text>
                    </View>
                    <View style={styles.containerImageTitle}>
                        <Image source={{ uri: 'https://www.thecocktaildb.com/images/ingredients/ice.png' }}
                            style={styles.imageTitle} />
                    </View>

                </View>


                <View style={styles.containerCategories}>
                    <View style={styles.containerTextCategories}>
                        <Text style={styles.categoriesTitle}>Categories</Text>
                    </View>
                    <View style={styles.containerListCategories}>
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({ item }) =>
                                <Button
                                    buttonStyle={styles.containerButton}
                                    onPress={() => this.onPressCategories(item)}
                                    titleStyle={styles.textButton}
                                    title={item.strCategory}
                                />
                            }
                        />
                    </View>
                </View>
            </View>
        );
    }
}

