import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlatListScreen from './screens/FlatListScreen';
import MovieScreen from './screens/MovieScreen';
import ComingSoonScreen from './screens/ComingSoonScreen'


const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlatList">
        <Stack.Screen name="FlatList" component={FlatListScreen} options={{ title: 'Home' }}  />
        <Stack.Screen name="Movie" component={MovieScreen} options={({ route }) => ({ title: route.params.title })}/>
        <Stack.Screen name="ComingScreen" component={ComingSoonScreen} options={({ route }) => ({ title: route.params.title })}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;

