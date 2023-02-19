// library imports
import { Button, StyleSheet } from "react-native";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { map, size } from "lodash";
import axios from "axios";

// custom components
import ItemImageRegister from "../../components/User/ItemImageRegister";

export default function UserRegisterItems() {
  const [data, setData] = useState({});
  const [files, setFiles] = useState({});
  const [rformData, setRformdata] = useState(new FormData());
  const [previewImage, setPreviewImage] = useState("");
  const inputFileRef = useRef(null);
  const [imagesSelected, setImagesSelected] = useState([]);

  const nameRef = useRef(null);
  const capacityUnitsRef = useRef(null);
  const maxCapacityRef = useRef(null);
  const filledRef = useRef(null);
  const shortCodeRef = useRef(null);
  const locationRef = useRef(null);

  const handleButtonClick = () => {
      if (inputFileRef.current !== null) {
      inputFileRef.current.click();
    }
  };

  const clearFields = () => {
    nameRef.current.clear();
    capacityUnitsRef.current.clear();
    maxCapacityRef.current.clear();
    filledRef.current.clear();
    shortCodeRef.current.clear();
    locationRef.current.clear();
    };

  const createConfirmAlert = () =>
    Alert.alert('Created container', 'A new container was succesfuly registered.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  // para reiniciar los estados.
  // useEffect(() => {
  //   setData({})
  //   setFiles({})
  //   setRformdata(new FormData())
  // }, []);

  const handleChangeField = (fieldName, text) => {
    // console.log(event.nativeEvent.eventCount)
    setData({
      ...data,
      [fieldName]: text,
    });
    console.log(data);
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
    if (event.target.id == "main_image") {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      rformData.append("main_image", event.target.files[0]);
      setRformdata(rformData);
    } else {
      rformData.append("other_media", event.target.files[0]);
      setRformdata(rformData);
    }
    console.log(previewImage);
  };

  const handleCreateItem = (event) => {
    event.preventDefault();

    axios
      .post("http://192.168.0.102:5000/Container/createNew", data)
      .then(function (response) {
        console.log(response.data);
        if(response.data.success){
            createConfirmAlert();
            setData({})
            clearFields();
        }else{
            // TODO: create error alert
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        ref={nameRef}
        style={styles.input}
        onChangeText={(text) => handleChangeField("name", text)}
        placeholder="Nombre"
      />
      <TextInput
        ref={capacityUnitsRef}
        style={styles.input}
        onChangeText={(text) => handleChangeField("capacity_units", text)}
        placeholder="Unidades"
      />
      <TextInput
        ref={maxCapacityRef}
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={(text) => handleChangeField("capacity", text)}
        placeholder="Capacidad máxima (de acuerdo a las unidades)"
      />
      <TextInput
        ref={filledRef}
        style={styles.input}
        onChangeText={(text) => handleChangeField("filled", text)}
        placeholder="Llenado (de acuerdo a las unidades)"
      />
      <TextInput
        ref={shortCodeRef}
        style={styles.input}
        onChangeText={(text) => handleChangeField("short_code", text)}
        placeholder="short_code"
      />
      <TextInput
        ref={locationRef}
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={(text) => handleChangeField("location", text)}
        placeholder="location"
      />
      <ItemImageRegister
        onChange={handleChangeFile}
        imagesSelected={imagesSelected}
        setImagesSelected={setImagesSelected}
      />
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
