import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
const CATEGORIESMOCK = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Víveres",
    description: '',
    imgUrl: ''
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Ferreteria",
    description: '',
    imgUrl: ''
  },
  {
    id: "58694a0f-3da1-47091f-bd96-145571e29d72",
    name: "Third Item", description: '',
    imgUrl: ''
  },
  {
    id: "bd7acbea-c1b1-0946c2-aed5-3ad53abb28ba",
    name: "First Item", description: '',
    imgUrl: ''
  },
  {
    id: "3ac68afc-c6059-48d3-a4f8-fbd91aa97f63",
    name: "Second Item", description: '',
    imgUrl: ''
  },
  {
    id: "58694a0f-3da81-471f-bd96-145571e29d72",
    name: "Third Item", description: '',
    imgUrl: ''
  },
  {
    id: "bd7acbea-777c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item", description: '',
    imgUrl: ''
  },
  {
    id: "3ac68afc-c605-433338d3-a4f8-fbd91aa97f63",
    name: "Second Item", description: '',
    imgUrl: ''
  },
  {
    id: "58694a0f-4545453da1-471f-bd96-145571e29d72",
    name: "Third Item", description: '',
    imgUrl: ''
  },
  {
    id: "bd7ac4545bea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item", description: '',
    imgUrl: ''
  },
  {
    id: "3ac3568afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second Item", description: '',
    imgUrl: ''
  },
  {
    id: "3458694a0f-3da1-471f-bd96-145571e29d72",
    name: "Third Item", description: '',
    imgUrl: ''
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
    name: "Víveres",
    description: '',
    imgUrl: ''
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f632",
    name: "Ferreteria",
    description: '',
    imgUrl: ''
  },
  {
    id: "58694a0f-3da1-47091f-bd96-145571e29d723",
    name: "Third Item", description: '',
    imgUrl: ''
  },
  {
    id: "bd7acbea-c1b1-0946c2-aed5-3ad53abb28ba4",
    name: "First Item", description: '',
    imgUrl: ''
  },
  {
    id: "3ac68afc-c6059-48d3-a4f8-fbd91aa97f635",
    name: "Second Item", description: '',
    imgUrl: ''
  },
  {
    id: "58694a0f-3da81-471f-bd96-145571e29d726",
    name: "Third Item", description: '',
    imgUrl: ''
  },
  {
    id: "bd7acbea-777c1b1-46c2-aed5-3ad53abb28ba7",
    name: "First Item", description: '',
    imgUrl: ''
  },
  {
    id: "3ac68afc-c605-433338d3-a4f8-fbd91aa97f638",
    name: "Second Item", description: '',
    imgUrl: ''
  },
  {
    id: "58694a0f-4545453da1-471f-bd96-145571e29d729",
    name: "Third Item", description: '',
    imgUrl: ''
  },
  {
    id: "bd7ac4545bea-c1b1-46c2-aed5-3ad53abb28ba0",
    name: "First Item", description: '',
    imgUrl: ''
  },
  {
    id: "3ac3568afc-c605-48d3-a4f8-fbd91aa97f6311",
    name: "Second Item", description: '',
    imgUrl: ''
  },
  {
    id: "3458694a0f-3da1-471f-bd96-145571e29d7212",
    name: "Third Item", description: '',
    imgUrl: ''
  },
];

export default function ExplorarScreen(props: any) {

  function renderItem(category: any) {
    return (
      <View style={styles.button}>


        <TouchableOpacity

          onPress={() => {
            props.navigation.navigate("LocalScreen", { category });
          }}
        >
          <Image
            style={{ width: '100%', height: 200, }}
            source={{ uri: "https://picsum.photos/100" }}
          />
          <View style={{
            right: '50%',
            top: '50%',
            position: 'absolute',
          }}>
            <Text style={{ fontSize: 20, color: 'white', }}>{category.name}</Text>
          </View>

        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: 'flex-start', fontSize: 30, }}>Todas las categorias</Text>
      <FlatList
        numColumns={2}
        data={CATEGORIESMOCK}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: "space-between",
    // backgroundColor: "EAEAEA",
    // padding: 2,
    margin: 10,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
