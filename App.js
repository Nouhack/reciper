// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './stacks/SearchScreen';
import ResultScreen from './stacks/ResultScreen';
import DetailScreen from './stacks/DetailsScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="result"
          component={ResultScreen}
          options={({ route }) => ({ title: route.params.product })}
        />
        <Stack.Screen name="detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
