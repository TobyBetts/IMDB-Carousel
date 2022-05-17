import React from "react";
import { SafeAreaView } from "react-native";

import styles from "./ScreenStyles";
import ComingSoonMovieInfo from "../components/Info/ComingSoonMovieInfo";
import StarsCarousel from "../components/Carousels/StarsCarousel";

const ComingSoonScreen = ({ route }) => {
  return (
    <SafeAreaView style={styles.movieScreenRoot}>
      <ComingSoonMovieInfo item={route.params} />
      <StarsCarousel />
    </SafeAreaView>
  );
};

export default ComingSoonScreen;
