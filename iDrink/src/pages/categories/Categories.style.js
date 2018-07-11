import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'iDrink/src/constants/Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:5
    },
    containerCategories: {
        flex: 0.5
    },
    containerTitle: {
        flex: 0.5,
        justifyContent: "center"
    },
    containerImageTitle: {
        flex: 0.8,
        justifyContent: "center"
    },
    containerTextTitle: {
        flex: 0.2,
        justifyContent: "center"
    },
    imageTitle: {
        width: Dimensions.get('window').width - Dimensions.get('window').width * 0.42,
        height: "100%"
    },
    textTitle: {
        textAlign: "center",
        fontSize: Dimensions.get('window').width * 0.1,
        color: Constants.colors.colorPrimary
    },
    containerTextCategories: {
        flex: 0.2
    },
    containerListCategories: {
        flex: 0.8,
        paddingBottom:20
    },
    categoriesTitle: {
        textAlign: "center",
        fontSize: Dimensions.get('window').width * 0.09,
        color: Constants.colors.colorPrimary
    },
    containerButton: {
        flex: 1,
        margin: 3,
        width: Dimensions.get('window').width - Dimensions.get('window').width * 0.42,
        backgroundColor: Constants.colors.colorPrimary,
        borderRadius: 10
    },

    containerButtonPress: {
        flex: 1,
        margin: 3,
        width: Dimensions.get('window').width - Dimensions.get('window').width * 0.42,
        backgroundColor: "red",
        borderRadius: 10
    },
    textButton: {
        textAlign: "center",
        fontSize:  Dimensions.get('window').width - Dimensions.get('window').width * 0.95,
        marginVertical: 10,
        color: "white"

    }

});