import * as React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Button,
  Text,
  StatusBar,
  ImageBackground,
  Pressable,
} from "react-native";
import axios from "axios";

const Result = ({ route, navigation }) => {
  const { product } = route.params;

  const [data, setdata] = React.useState(null);
  React.useEffect(() => {
    console.log("rach");
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${product}&app_id=5f980fef&app_key=cc04480bbd046c2369ceb92ee350185a`
      )
      .then((res) => {
        setdata(res.data.hits);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() =>
        navigation.navigate("detail", {
          product_id: item.recipe.uri.split("_")[1],
        })
      }
    >
      <ImageBackground
        resizeMode="cover"
        style={styles.tinyLogo}
        source={{
          uri: item.recipe.image,
        }}
      >
        <Text style={styles.title}>{item.recipe.label}</Text>
      </ImageBackground>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.recipe.label}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "#f9c2ff",
    marginVertical: 8,
    marginHorizontal: 16,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
  },
  tinyLogo: { flex: 1, alignItems: "center", justifyContent: "flex-end" },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 10,
  },
});

export default Result;
