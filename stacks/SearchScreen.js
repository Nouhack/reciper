import * as React from "react";
import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import LottieView from "lottie-react-native";
import { Feather } from "@expo/vector-icons";

// You can import from local files
import AssetExample from "../components/AssetExample";

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";

export default function SearchScreen({ navigation }) {
  const animation = React.useRef(null);
  const [product, settext] = React.useState("");

  React.useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={styles.left}></View>
      <View style={styles.right}></View>
      <View style={styles.main}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../assets/logo.json")}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for a recipe ..."
            keyboardType="default"
            onChangeText={settext}
            autoComplete="name"
          />
          <Feather
            name="search"
            size={30}
            color="black"
            onPress={() =>
              navigation.navigate("result", {
                product: product,
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  left: {
    flex: 1,
    backgroundColor: "#ca8afa",
  },
  right: {
    flex: 1,
    backgroundColor: "#96d0e3",
  },
  main: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    //gap: 20,
  },

  inputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    //    backgroundColor: 'whitesmoke',
  },
  input: {
    textAlign: "center",
    paddingVertical: 20,
    padding: 5,
    fontSize: 20,
  },
});
