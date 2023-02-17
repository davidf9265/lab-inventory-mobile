import { Button, StyleSheet } from "react-native";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function UserRegisterItems() {
  return (
    <View style={styles.container}>
      <Text>Register Item</Text>
      <TextInput style={styles.input} placeholder="Nombre" />
      <TextInput style={styles.input} placeholder="Cantidad" />
      <TextInput style={styles.input} placeholder="Precio" />
      <TextInput style={styles.input} placeholder="Categoría" />
      <TextInput style={styles.input} placeholder="Tipo" />
      <TextInput style={styles.input} placeholder="Propiedades" />
      <TouchableOpacity style={styles.button}>
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
