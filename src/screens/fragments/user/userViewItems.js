import React, { useState, useEffect } from "react";
import ItemFlatCard from "../../../components/User/ItemFlatCard";

import axios from "axios";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { SearchBar } from "react-native-elements";
import ItemEditModal from "../../../UI/modals/ItemEditModal";

export default function UserViewItems() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([{}]);
  const [openEditItemModal, setOpenEditItemModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const getAllItems = async () => {
    await axios
      .get("http://192.168.0.102:5000/Item/getAll")
      .then(function (response) {
        if (response.data.success) {
          console.log(response.data.data);
          setItems(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleItemCardPress = (item) => {
    console.log("item card pressed");
    console.log(item);
    setSelectedItem(item);
    setOpenEditItemModal(true);
  };

  const handleCloseModal = () => {
    setOpenEditItemModal(false);
  };

  const updateSearch = (search) => {
    setSearch(search);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    // <View style={styles.container}>
    //     <Text>Items</Text>
    //     <ItemFlatCard/>
    // </View>

    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar..."
        onChangeText={(text) => updateSearch(text)}
        value={search}
        lightTheme
        containerStyle={styles.search_bar}
        inputStyle={styles.search_bar_inputstyle}
        inputContainerStyle={styles.search_bar_inputContainerStyle}
      />
      <ScrollView contentContainerStyle={styles.items_container}>
        {items.length > 0
          ? items.map((item) => {
              return (
                <ItemFlatCard
                    key={item.id}
                  item={item}
                  onPress={() => handleItemCardPress(item)}
                />
              );
            })
          : console.log("no hay contenedores")}
      </ScrollView>
      {
        openEditItemModal ?
        <ItemEditModal 
            item={selectedItem} 
            openState={openEditItemModal} 
            closeHandler={handleCloseModal}/>
        : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  items_container: {
    minHeight: "100%",
    alignItems: "center",
  },
  search_bar: {
    backgroundColor: "#fff",
    elevation: 10,
  },
  search_bar_inputContainerStyle: {
    backgroundColor: "lightgray",
  },
  search_bar_inputstyle: {
    color: "#000",
  },
});
