import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'iDrink/src/constants/Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    containerContent: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: Dimensions.get('window').height - Dimensions.get('window').height * 0.95,
        width: Dimensions.get('window').width - Dimensions.get('window').width * 0.15,
        backgroundColor: "#e2e2e2",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    containerButtonModal: {
        justifyContent: "center",
        marginBottom: "0.5%"
    },
    containerButton: {
        margin: 3,
        width: Dimensions.get('window').width - Dimensions.get('window').width * 0.42,
        backgroundColor: Constants.colors.colorPrimary,
        borderRadius: 10
    },
    textButton: {
        textAlign: "center",
        fontSize: Dimensions.get('window').width - Dimensions.get('window').width * 0.95,
        marginVertical: 10,
        color: "white"

    },
    containerTextViews: {
        backgroundColor: "#F5F5F7",
        height: Dimensions.get('window').height - Dimensions.get('window').height * 0.71,
        width: "80%",
        padding: 5,
    },
    containerTitle: {

    },
    titleText: {
        fontSize: Dimensions.get('window').height - Dimensions.get('window').height * 0.97,
        fontWeight: "bold"
    },
    containerInstructions: {
        margin: 2
    },
    textInstructions: {
        fontSize: Dimensions.get('window').height - Dimensions.get('window').height * 0.98,
    },
    imageThumb: {
        width: Dimensions.get('window').width - Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').height - Dimensions.get('window').height * 0.5,
    }


});