import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from "./src/screens";

import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartScreen">
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            screenOptions={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            screenOptions={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            screenOptions={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
            screenOptions={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="MovieScreen"
            component={MovieScreen}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
