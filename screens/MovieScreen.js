import React from "react";
import { SafeAreaView, Image, Text } from "react-native";
import styles from "../styles";

const MovieScreen = ({ route }) => {
  const { image } = route.params;
  return (
    <SafeAreaView style={styles.root}>
      <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
    </SafeAreaView>
  );
};

export default MovieScreen;
