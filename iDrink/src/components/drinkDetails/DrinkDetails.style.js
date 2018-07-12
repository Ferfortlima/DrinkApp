import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'iDrink/src/constants/Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    containerContent:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        marginVertical:"15%",
        width:"80%",
        backgroundColor:"#e2e2e2",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
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
    containerTitle:{flex:1},
    containerButtonModal:{flex:1,justifyContent:"center"}


});