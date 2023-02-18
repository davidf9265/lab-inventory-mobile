import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


const ItemImageRegister = () => {
    return(
        <ScrollView
            horizontal
            style={styles.viewImages}
        >
            <Icon
                type="material-community"
                name="camera"
                color="#7a7a7a"
                containerStyle={styles.containerIcon}
            />
        </ScrollView>
    )
}

export default ItemImageRegister;

const styles = StyleSheet.create({
    viewImages: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30
    },
    containerIcon: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        height: 70,
        width: 70,
        backgroundColor: "#e3e3e3"
    }
})