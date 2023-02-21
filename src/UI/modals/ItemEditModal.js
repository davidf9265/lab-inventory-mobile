// library imports
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { Divider, Overlay } from 'react-native-elements'
import React, { useEffect, useState } from 'react'

const ItemEditModal = ({ item, openState, closeHandler }) => {
    const [itemData, setItemData] = useState(item)

    const handleChangeField = (fieldName, text) => {
        console.log("triggered")
        setItemData({
            ...itemData,
            [fieldName]: text,
        });
    }

    const handleUpdateItem = () => {
        console.log('Update Item');
    }
  return (
    <Overlay overlayStyle={styles.modal}
        isVisible={openState}
        // fullScreen={true}
        // windowBackgroundColor="rgba(255, 255, 255, .5)"
        // overlayBackgroundColor="red"
        // width={5000}
        // height="auto"
        onBackdropPress={closeHandler}
    >
        <Text style={styles.modal_header_text}>Update Item</Text>
        <Divider style={styles.modal_dividers}/>
      <TextInput 
        style={styles.input} 
        onChangeText={(text) => handleChangeField('name',text)} 
        value={itemData.name?.toString() ??""}
        placeholder="Nombre" />
      <TextInput 
        style={styles.input} 
        value={itemData.quantity?.toString()??""}
        keyboardType="number-pad"   
        onChangeText={(text) => handleChangeField('quantity',text)}
        placeholder='Cantidad'  />
      <TextInput 
        style={styles.input} 
        value={itemData.unit_price?.toString()??""}
        keyboardType="number-pad"
        onChangeText={(text) => handleChangeField('unit_price',text)} 
        placeholder="Precio" />
      <TextInput 
        style={styles.input} 
        onChangeText={(text) => handleChangeField('category',text)} 
        value={itemData.category??""}
        placeholder="Categoría" />
      <TextInput 
        style={styles.input} 
        onChangeText={(text) => handleChangeField('type',text)} 
        value={itemData.type??""}
        placeholder="Tipo" />
      <TextInput 
        style={styles.input} 
        keyboardType="number-pad"
        onChangeText={(text) => handleChangeField('container_id',text)} 
        value={itemData.container_id?.toString()??""}
        placeholder="Contenedor" />
      <TextInput 
        style={styles.input} 
        onChangeText={(text) => handleChangeField('props',text)} 
        defaultValue={item.props??""}
        placeholder="Propiedades" />
        <Divider style={styles.modal_dividers}/>
      <TouchableOpacity style={styles.button} onPress={handleUpdateItem}>
        <Text style={styles.buttonText}>Update Item</Text>
      </TouchableOpacity>
        {/* <Text>ItemEditModal</Text> */}
    </Overlay>
  )
}

export default ItemEditModal

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        borderRadius: 15,
        width: '80%',
        padding: 25
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
      },
      button: {
        backgroundColor: "#3f51b5",
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 10,
        width: 200,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        height: 30
      },
      buttonText: {
        color: "#fff",
        fontSize: 15,
      },
      modal_header_text: {
        fontWeight: 'bold',
        fontSize: 20
      },
      modal_dividers: {
        marginVertical: 5
      }
})