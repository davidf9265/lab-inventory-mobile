import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { map, size } from 'lodash';


const ItemImageRegister = ({ onPress, imagesSelected, setImagesSelected }) => {
    return(
        <ScrollView
            horizontal
            style={styles.viewImages}
        >
            {
                size(imagesSelected) < 5 && (       
                    <Icon
                        type="material-community"
                        name="camera"
                        color="#7a7a7a"
                        containerStyle={styles.containerIcon}
                    />
                )
            }
            {
                map(imagesSelected, (imageRestaurant, index) => (
                    <Avatar
                        key={index}
                        style={styles.miniatureStyle}
                        source={{imageRestaurant}} 
                        />
                ))
            }
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
    },
    miniatureStyle: {
        width: 70,
        height: 70,
        marginRight: 10
    }
})