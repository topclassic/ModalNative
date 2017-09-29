import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableOpacity, View, AppRegistry } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';

class showlist extends Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={[this.state.modalVisible && [{flex: 1},{backgroundColor: 'rgba(0, 0, 0, 0.5)'}], { marginTop: 22 }]}>
                <Modal
                    animationType="slide"
                    transparent
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                >
                    <View style={styles.modalStyle}>
                        <View style={styles.containerStyle}>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>

                <TouchableOpacity onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>Show Modal</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const marginPerc = 0.05;
const styles = {
    modalStyle: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    buttonContainerStyle: {
        paddingBottom: 10
    },
    containerStyle: {
        borderColor: 'transparent',
        borderWidth: 2,
        borderRadius: 5,
        flex: 1,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white'
    }
};

AppRegistry.registerComponent('ModalNative', () => showlist);
