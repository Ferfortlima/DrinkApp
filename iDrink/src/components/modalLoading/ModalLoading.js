import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';
import styles from './ModalLoading.style';


const Loader = props => {
    const {
        loading,
        ...attributes
    } = props;
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            onRequestClose={() => {
                this.setState({ loading: true });
            }}
            visible={loading}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={loading} />
                </View>
            </View>

        </Modal>
    )
}
export default Loader;