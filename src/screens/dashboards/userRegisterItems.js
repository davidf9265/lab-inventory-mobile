// library imports
import { Button, StyleSheet } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { map, size } from 'lodash';
import axios from "axios";

// custom components
import ItemImageRegister from "../../components/User/ItemImageRegister";


export default function UserRegisterItems() {
  const [data, setData] = useState({});
  const [files, setFiles] = useState({});
  const [rformData, setRformdata] = useState(new FormData());
  const [previewImage, setPreviewImage] = useState('')
  const inputFileRef = useRef(null);
  const [imagesSelected, setImagesSelected] = useState([])

  const handleButtonClick = () => {
    if (inputFileRef.current !== null) {
      inputFileRef.current.click();
    }
  }

  // para reiniciar los estados.
  // useEffect(() => {
  //   setData({})
  //   setFiles({})
  //   setRformdata(new FormData())
  // }, []);

  const handleChangeField = (fieldName, text ) => {
    // console.log(event.nativeEvent.eventCount)
    setData({
      ...data,
      [fieldName]: text,
    });
    console.log(data)
  };

  const handleChangeFile = (event) => {
    console.log(event.target.files[0]);
    setFiles({
      ...files,
      [event.target.name]: event.target.files[0],
    });
    // setData({
    //   ...data,
    //   ["files"]: event.target.files[0],
    // });
    if(event.target.id == "main_image"){
      const file = event.target.files[0]
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      }
      reader.readAsDataURL(file);
      rformData.append("main_image", event.target.files[0]);
      setRformdata(rformData);
    }
    else{
      rformData.append("other_media", event.target.files[0]);
      setRformdata(rformData);
    }
    console.log(previewImage)
  };

  const handleCreateItem = (event) => {
    event.preventDefault();

    axios
      .post("http://192.168.0.102:5000/Item/createNewWithoutMedia", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text>Register Item</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={(text) => handleChangeField('name',text)} 
        placeholder="Nombre" />
      <TextInput 
        style={styles.input} 
        keyboardType="number-pad"
        onChangeText={(text) => handleChangeField('quantity',text)} 
        placeholder="Cantidad" />
      <TextInput 
        style={styles.input} 
        keyboardType="number-pad"
        onChangeText={(text) => handleChangeField('unit_price',text)} 
        placeholder="Precio" />
      <TextInput 
        style={styles.input} 
        onChangeText={(text) => handleChangeField('category',text)} 
        placeholder="Categoría" />
      <TextInput 
        style={styles.input} 
        onChangeText={(text) => handleChangeField('type',text)} 
        placeholder="Tipo" />
      <TextInput 
        style={styles.input} 
        keyboardType="number-pad"
        onChangeText={(text) => handleChangeField('container_id',text)} 
        placeholder="Contenedor" />
      <TextInput 
        style={styles.input} 
        onChangeText={(text) => handleChangeField('props',text)} 
        placeholder="Propiedades" />
      <ItemImageRegister 
        onChange={handleChangeFile}
        imagesSelected={imagesSelected}
        setImagesSelected={setImagesSelected}/>
      <TouchableOpacity style={styles.button} onPress={handleCreateItem}>
        <Text style={styles.buttonText}>Create Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3f51b5",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});
