import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'iDrink/src/constants/Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.2)"
    },
    containerCategories: {
        flex: 0.85,
        justifyContent: "center"
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
        flex: 0.15,
        justifyContent: "center",
        
    },
    imageTitle: {
        width: "100%",
        height: "100%"
    },
    textTitle: {
        fontSize: Dimensions.get('window').width * 0.1,
        color: Constants.colors.colorPrimary
    },
    containerListCategories: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 10,
        justifyContent: "center"
    },
    categoriesTitle: {
        textAlign: "center",
        fontSize: Dimensions.get('window').width * 0.09,
        color: Constants.colors.colorPrimary
    },
    containerButton: {
        flex: 1,
        margin: 3,
        width: Dimensions.get('window').width - Dimensions.get('window').width * 0.7,
        backgroundColor: "rgba(62, 39, 35, 0.8)",
        borderRadius: 10,
        height: Dimensions.get('window').height - Dimensions.get('window').height * 0.83,

    },
    textButton: {
        textAlign: "center",
        fontSize: Dimensions.get('window').width - Dimensions.get('window').width * 0.95,
        marginVertical: 10,
        color: "white"

    }

});