// library imports
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";

// contexts
import { userContext } from "../../../App";

export default function LoginScreen({ navigation }) {
  const { auth, setAuth } = useContext( userContext );


  const handleAuthenticate =  () => {
    setAuth(true);
  }
  // const [biometricAuthError, setBiometricAuthError] = useState(null);
  // const [biometricAuthResult, setBiometricAuthResult] = useState(null);

  // const handleBiometricAuthSuccess = () => {
  // setBiometricAuthError(null);
  // setBiometricAuthResult('Autenticación exitosa');
  // };

  // const handleBiometricAuthError = (error) => {
  // setBiometricAuthError(error);
  // setBiometricAuthResult('Error en la autenticación');
  // };

  // const handleBiometricLogin = async () => {
  //     try {
  //       const result = await Expo.LocalAuthentication.authenticateAsync({
  //         promptMessage: 'Ingrese su huella dactilar para iniciar sesión',
  //         cancelLabel: 'Cancelar'
  //       });
  //       if (result.success) {
  //         handleBiometricAuthSuccess();
  //       } else {
  //         handleBiometricAuthError('Error en la autenticación biométrica');
  //       }
  //     } catch (error) {
  //       handleBiometricAuthError(error.message);
  //     }
  // };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>Mi Logo</Text>
      {/* Campos de texto para usuario y contraseña */}
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      {/* Botones de Login y Registro */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.button}
            onPress={handleAuthenticate}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registro</Text>
        </TouchableOpacity>
      </View>
      {/* Botón para login por fingerprint */}
      <TouchableOpacity style={styles.fingerprintButton}>
        <Text style={styles.fingerprintButtonText}>Login con Fingerprint</Text>
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
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
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
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
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
  fingerprintButton: {
    marginVertical: 20,
  },
  fingerprintButtonText: {
    color: "#3f51b5",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
