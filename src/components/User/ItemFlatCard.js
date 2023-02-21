import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-elements';
import { Divider } from 'react-native-elements';

const ItemFlatCard = ({ item, onPress, style }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.inner_container}>
          <View style={styles.header_container}>
            <Text style={styles.nametext_container}>{item.name??"???"}</Text>
            <Text style={styles.cattext_container}>{item.category??"???"}:{item.type??"???"}</Text>
          </View>
          <View style={styles.content_container}>
            <Divider />
            <Text style={styles.quantitytext_container}>Cantidad: {item.quantity??"???"}</Text>
            <Text style={styles.pricetext_container}>Precio unitario: {item.unit_price??"???"}</Text>
            <Text style={styles.propertiestext_container}>propiedades: {"TODO: properties display"??"???"}</Text>
            <Divider />
          </View>
          <View style={styles.footer_container}>
            <Text style={styles.owner}>{"TODO: Holder name"}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
};

export default ItemFlatCard;

ItemFlatCard.defaultProps = {
    item: {
        name: 'Nombre Item',
        category: 'categoría',
        type: 'tipo',
        quantity: 'Cantidad',
        unit_price: 'Precio unitario',
        properties: 'propiedades',
        holder: 'Owner name',
    },
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 130,
        minWidth: '90%',
        margin: 5,
        elevation: 5,
        borderColor: 'lightgray',
        borderWidth:1,
    },
    inner_container: {
        flex: 1,
        margin: 10,
        flexDirection: 'column',
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 10
    },
    nametext_container: {
        fontWeight: 'bold',
        fontColor: 'black',
        fontSize: 17,
        // customize text props
    },
    cattext_container: {
        fontWeight: '300',
        // fontColor: 'gray',
        // customize text props
    },
    content_container: {
        flex: 3,
        flexDirection: 'column',
        // flexWrap:'wrap',
        // marginBottom: 10
    },
    quantitytext_container: {
        // customize text props
    },
    pricetext_container: {
        // customize text props
    },
    propertiestext_container: {
        // customize text props
    },
    footer_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // marginTop: 15,
    },
    tagchip: {
        fontSize: 1,
        flex: 1,
        // marginTop: 10,
        // customize text props
    },
});