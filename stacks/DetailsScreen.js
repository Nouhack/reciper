import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Button,
  Dimensions,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import { Feather } from '@expo/vector-icons';

// You can import from local files
import AssetExample from '../components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function DetailScreen({ route, navigation }) {
  const { product_id } = route.params;

  const [data, setdata] = React.useState(null);
  React.useEffect(() => {
    console.log('rach');
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/${product_id}?type=public&app_id=5f980fef&app_key=cc04480bbd046c2369ceb92ee350185a
`
      )
      .then((res) => {
        setdata(res.data.recipe);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.badge}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {data && (
        <>
          <Image
            resizeMode="cover"
            style={styles.tinyLogo}
            source={{
              uri: data.image,
            }}
          />
          <Text style={styles.title}>{data.label}</Text>
          {data.ingredientLines.map((item, index) => {
            return (
              <View style={styles.ingredientListContainer} key={index}>
                <Text style={styles.ingridients}>{item}</Text>
              </View>
            );
          })}
          <Text style={styles.subtitle}>Health</Text>
          <FlatList
            horizontal={true}
            data={data.healthLabels}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
          />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tinyLogo: {
    width: '100%',
    height: 250,
  },
  title: {
    marginVertical: 10,
    fontSize: 25,
    paddingHorizontal: 10,
  },
  ingredientListContainer: {
    paddingHorizontal: 20,
  },
  ingridients: {
    marginVertical: 5,
    lineHeight: 25,
    letterSpacing: 1,
    color: 'grey',
  },
  subtitle: {
    paddingHorizontal: 20,
    fontSize: 18,
    marginTop: 10,
  },
  badge: {
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#75FF4D',
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
});
