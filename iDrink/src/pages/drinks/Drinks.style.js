import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'iDrink/src/constants/Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5
    },
    containerCards: {
        flex: 1,
        width: Dimensions.get('window').width / 2,
        height: "100%"
    },
    backgroundImage: {
        width: Dimensions.get('window').width / 3.3,
        height: Dimensions.get('window').height / 4.8,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    drinkNameText: {
        color: "white",
        fontSize: Dimensions.get('window').width * 0.03,
        fontWeight: "bold"
    },
    containerInsideImage: {
        flex: 1,
        justifyContent: "flex-end"
    },
    containerTextDrinks: {
        justifyContent: "flex-end",
        padding: 2,
        backgroundColor: "rgba(0,0,0,0.6)"
    }


});