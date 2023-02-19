import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Icon, Text } from "react-native-elements";
import { map, size } from "lodash";

export const ContainerCard = ({ container, style }) => {
  return (
    <View style={[styles.outerBox, style]}>
      <View style={styles.innerBox}>
        <View style={styles.innerBoxShadow} />
      </View>
      <View style={styles.databox}>
        <Text style={styles.box_code}>{container.short_code}</Text>
        <Text style={styles.box_name}>
          {container.name ? container.name : "Cont. sin nombre"}
        </Text>
        <Text style={styles.box_filled}>
          {container.filled && container.capacity
            ? (container.filled / container.capacity) * 100
            : "x"}
          % lleno
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerBox: {
    position: "relative",
    backgroundColor: "#DDAC81",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 180,
    height: 170,
    zIndex: 1,
    elevation: 10,
    alignItems: "center",
  },
  innerBox: {
    position: "relative",
    backgroundColor: "rgba(157,108,67,1)",
    borderRadius: 10,
    width: "80%",
    height: "20%",
    zIndex: 10,
    alignItems: "center",
  },
  innerBoxShadow: {
    position: "relative",
    backgroundColor: "rgba(157,108,67,0)",
    borderRadius: 10,
    width: "90%",
    height: "20%",
    alignItems: "center",
    zIndex: 20,
    elevation: 17,
  },
  databox: {
    // fontWeight: "bold",
    // fontFamily: "KoHo",
    marginTop: 10,
    width: "80%",
    zIndex: 30,
    alignItems: "flex-start",
  },
  box_code: {
    position: "relative",
    top: 0,
    left: 0,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    zIndex: 30,
    elevation: 20,
  },
  box_name: {
    position: "relative",
    top: 0,
    left: 0,
    color: "black",
    fontSize: 20,
    fontWeight: "medium",
    zIndex: 30,
    elevation: 20,
  },
  box_filled: {
    position: "relative",
    top: 0,
    left: 0,
    color: "black",
    fontSize: 20,
    fontWeight: "regular",
    zIndex: 30,
    elevation: 20,
  },
});
