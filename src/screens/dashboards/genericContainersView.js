// library imports
import { Button, StyleSheet } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
// import { map, size } from "lodash";
import axios from "axios";

// custom components
import ItemImageRegister from "../../components/User/ItemImageRegister";
import { ContainerCard } from "../../components/Containers/ContainerCard";

export default function UserViewContainers() {
  const [containers, setContainers] = useState([{}]);

  const getAllContainers = async () => {
    await axios
      .get("http://192.168.0.102:5000/Container/getAll")
      .then(function (response) {
        if (response.data.success) {
          console.log(response.data.data);
          setContainers(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   const createConfirmAlert = () =>
  //     Alert.alert('Created container', 'A new container was succesfuly registered.', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ]);

  // obtener los contenedores
  useEffect(() => {
    getAllContainers();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.boxes_container}>
        {containers.length > 0
          ? containers.map((container) => {
              console.log(container);
              return <ContainerCard container={container}/>;
            })
          : console.log("no hay contenedores")}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  boxes_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "auto",
    height: "auto",
    justifyContent: "space-between",
  },
});
