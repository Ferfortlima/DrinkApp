import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    containerListCategories: {
        flex: 0.6
    },
    containerImage: {
        flex: 0.4,
    }, 
    imageTitle: {
        width: Dimensions.get('window').width - Dimensions.get('window').width * 0.25,
        height: "100%"
    },
    containerButton:{
        flex:1
    }

});