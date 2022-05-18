import React from "react";
import { SafeAreaView } from "react-native";

import styles from "./ScreenStyles";
import Top250MovieInfo from '../components/Info/Top250MovieInfo'
import StarsCarousel from "../components/Carousels/StarsCarousel";

const MovieScreen = ({ route }) => {
  return (
    <SafeAreaView style={styles.movieScreenRoot}>
      <Top250MovieInfo item={route.params} />
      <StarsCarousel /> 
    </SafeAreaView>
  );
};

export default MovieScreen;
