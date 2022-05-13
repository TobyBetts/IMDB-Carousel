import React from "react";
import { SafeAreaView } from "react-native";

import styles from "../styles";
import MovieTile from "../components/MovieTile";

const MovieScreen = ({ route }) => {
  return (
    <SafeAreaView style={styles.movieScreenRoot}>
      <MovieTile item={route.params} />
    </SafeAreaView>
  );
};

export default MovieScreen;
