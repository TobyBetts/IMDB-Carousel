import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import styles from "./ScreenStyles";
import MovieDetails from "../components/Info/MovieDetails";
import CastCarousel from "../components/Carousels/CastCarousel";

const MovieScreen = ({ route }) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.movieScreenRoot}>
        <MovieDetails item={route.params} />
        <CastCarousel item={route.params} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default MovieScreen;
