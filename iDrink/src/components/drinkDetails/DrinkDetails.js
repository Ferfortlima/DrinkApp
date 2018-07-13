import React, { Component } from 'react';
import { StatusBar, Modal, Image, ScrollView, View } from 'react-native';
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


        RenderThumb = (drink) => {
            return (<View style={styles.containerThumb}>
                <Image source={{ uri: drink.drink.strDrinkThumb }} style={styles.imageThumb} />
            </View>)
        }

        RenderTitle = (drink) => {
            return (<View style={styles.containerTitle}>
                <Text style={styles.titleText}>{this.props.detailsDrink.drinks["0"].strDrink}</Text>
            </View>)
        }

        RenderInfos = (drink) => {
            let phrase = [];
            if (drink.drink.strAlcoholic !== null) {
                phrase.push(drink.drink.strDrink + " is " + drink.drink.strAlcoholic.toLowerCase() + " drink");
            }
            if (drink.drink.strGlass !== null) {
                phrase.push("can be appreciate in " + drink.drink.strGlass.toLowerCase());
            }
            if (drink.drink.strCategory !== null) {
                phrase.push("in this app it is categorized as " + drink.drink.strCategory.toLowerCase());
            }
            if (drink.drink.strIBA !== null) {
                phrase.push("but the IBA classifies it as " + drink.drink.strIBA.toLowerCase());
            }

            return (<View style={styles.containerInstructions}>
                <Text style={styles.textInstructions}>{phrase.join(", ")}.</Text>
            </View>)
        }

        RenderIngredients = (drink) => {
            let index = 1;
            let ingredients = [];
            while (eval('drink.drink.strIngredient' + index + ".length") !== 0) {
                console.log();
                if (eval('drink.drink.strMeasure' + index) !== "" && !!eval('drink.drink.strMeasure' + index + ".trim()")) {
                    ingredients.push(eval('drink.drink.strIngredient' + index) + " (" + eval('drink.drink.strMeasure' + index) + ")");
                } else {
                    ingredients.push(eval('drink.drink.strIngredient' + index));
                }
                index++;
            }
            return (<View style={styles.containerInstructions}>
                <Text style={styles.textInstructions}>Ingredients: {ingredients.join(", ")}.</Text>
            </View>)
        }

        RenderInstructions = (drink) => {
            return (<View style={styles.containerInstructions}>
                <Text style={styles.textInstructions}>Instructions: {this.props.detailsDrink.drinks["0"].strInstructions}</Text>
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
                                {this.props.detailsDrink.length !== 0 ? (<RenderTitle drink={this.props.detailsDrink.drinks["0"]} />) : (null)}
                                {this.props.detailsDrink.length !== 0 ? (<RenderInfos drink={this.props.detailsDrink.drinks["0"]} />) : (null)}
                                {this.props.detailsDrink.length !== 0 ? (<RenderIngredients drink={this.props.detailsDrink.drinks["0"]} />) : (null)}
                                {this.props.detailsDrink.length !== 0 ? (<RenderInstructions drink={this.props.detailsDrink.drinks["0"]} />) : (null)}
                            </ScrollView>
                        </View>
                        <View style={styles.containerButtonModal}>

                            <Button
                                buttonStyle={styles.containerButton}
                                onPress={() => this.props.setModalVisible(false)}
                                titleStyle={styles.textButton}
                                title={"Close"}
                            />
                        </View>
                    </View>

                </View>

            </Modal>
        );
    }
}

