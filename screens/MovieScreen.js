import React from "react";
import { SafeAreaView, Image, Text } from "react-native";
import styles from "../styles";

const MovieScreen = ({ route }) => {
  const { image, fullTitle, imdbRating } = route.params;
  return (
    <SafeAreaView style={styles.root}>
      <Image source={{ uri: image }} style={styles.movieScreenImage} />
      <Text style={styles.fullTitle}>{fullTitle}</Text>
      <Text style={styles.imdbRating}>IMDB Rating: {imdbRating}</Text>
    </SafeAreaView>
  );
};

export default MovieScreen;
