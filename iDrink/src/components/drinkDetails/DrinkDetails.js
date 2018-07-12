import React, { Component } from 'react';
import { StatusBar, Modal, Platform, ActivityIndicator, View } from 'react-native';
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
                        <View style={styles.containerTitle}>
                            <Text>ok</Text>

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

