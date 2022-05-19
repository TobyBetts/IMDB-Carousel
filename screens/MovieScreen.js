import React from "react";
import { SafeAreaView } from "react-native";

import styles from "./ScreenStyles";
import Top250MovieInfo from '../components/Info/Top250MovieInfo'
import CastCarousel from "../components/Carousels/CastCarousel";

const MovieScreen = ({ route }) => {
  return (
    <SafeAreaView style={styles.movieScreenRoot}>
      <Top250MovieInfo item={route.params} />
      <CastCarousel item={route.params}/> 
    </SafeAreaView>
  );
};

export default MovieScreen;
