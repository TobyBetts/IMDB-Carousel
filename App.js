import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlatListScreen from './screens/FlatListScreen';
import MovieScreen from './screens/MovieScreen';


const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlatList">
        <Stack.Screen name="FlatList" component={FlatListScreen} options={{ title: 'Top Movies' }}  />
        <Stack.Screen name="Movie" component={MovieScreen} options={({ route }) => ({ title: route.params.title })}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;

