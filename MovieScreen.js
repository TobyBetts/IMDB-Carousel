import React from "react";
import { SafeAreaView } from "react-native";

const MovieScreen = ({ navigation, route }) => {
    const { title } = route.params
    return (
        <SafeAreaView>
            <h1>{title}</h1>
        </SafeAreaView>
    )
}

export default MovieScreen