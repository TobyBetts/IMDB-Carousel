import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';
import ComingSoonScreen from './screens/ComingSoonScreen'



const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} options={({ route }) => ({ title: route.params.title })}/>
        <Stack.Screen name="ComingSoonScreen" component={ComingSoonScreen} options={({ route }) => ({ title: route.params.title })}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;

