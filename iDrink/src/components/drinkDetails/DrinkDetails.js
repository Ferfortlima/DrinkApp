import React, { Component } from 'react';
import { StatusBar, Modal, Image, FlatList, ScrollView, View } from 'react-native';
import styles from './DrinkDetails.style';
import { Button, Text } from 'react-native-elements'


export default class DrinkDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    onPressClose = () => {
    }

    render() {

        RenderIngredients = (drink) => {
            var index = 1;
            var ingredients = [];
            while (eval('drink.drink.strIngredient' + index + ".length") !== 0) {
                ingredients.push({ ingredient: eval('drink.drink.strIngredient' + index), measure: eval('drink.drink.strMeasure' + index) });
                index++;
            }
            return (<View style={styles.containerIngredients}>
                <FlatList
                    data={ingredients}
                    renderItem={({ item }) =>
                        <View>
                            <Text>{item.ingredient}</Text>
                            <Text>{item.measure}</Text>
                        </View>
                    }
                />
            </View>)
        }

        RenderThumb = (drink) => {
            return (<View style={styles.containerThumb}>
                <Image source={{ uri: drink.drink.strDrinkThumb }} style={styles.imageThumb} />
            </View>)
        }

        return (
            <Modal
                animationType="none"
                transparent={true}
                visible={this.props.isModalVisible}
                onRequestClose={() => {
                    this.props.setModalVisible(false);
                }}
            >
                <View style={styles.container}>
                    <StatusBar barStyle={"light-content"} />
                    <View style={styles.containerContent}>
                        {this.props.detailsDrink.length !== 0 ? (<RenderThumb drink={this.props.detailsDrink.drinks["0"]} />) : (null)}
                        <View style={styles.containerTextViews}>
                            <ScrollView>
                                <View style={styles.containerTitle}>
                                    {this.props.detailsDrink.length !== 0 ? (<Text>{this.props.detailsDrink.drinks["0"].strDrink}</Text>) : (<Text>diferente</Text>)}
                                </View>
                                <View style={styles.containerAlcoholic}>
                                    {this.props.detailsDrink.length !== 0 ? (<Text>{this.props.detailsDrink.drinks["0"].strAlcoholic}</Text>) : (<Text>diferente</Text>)}
                                </View>
                                <View style={styles.containerCategorie}>
                                    {this.props.detailsDrink.length !== 0 ? (<Text>{this.props.detailsDrink.drinks["0"].strCategory}</Text>) : (<Text>diferente</Text>)}
                                </View>

                                <View style={styles.containerGlass}>
                                    {this.props.detailsDrink.length !== 0 ? (<Text>{this.props.detailsDrink.drinks["0"].strGlass}</Text>) : (<Text>diferente</Text>)}
                                </View>
                                {this.props.detailsDrink.length !== 0 ? (<RenderIngredients drink={this.props.detailsDrink.drinks["0"]} />) : (null)}



                                <View style={styles.containerButtonModal}>

                                    <Button
                                        buttonStyle={styles.containerButton}
                                        onPress={() => this.props.setModalVisible(false)}
                                        titleStyle={styles.textButton}
                                        title={"Close"}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                </View>

            </Modal>
        );
    }
}

