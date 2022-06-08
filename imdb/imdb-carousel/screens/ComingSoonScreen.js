import React from "react";
import { SafeAreaView } from "react-native";

import styles from "./ScreenStyles";
import ComingSoonMovieInfo from "../components/Info/ComingSoonMovieInfo";
import StarsCarousel from "../components/Carousels/CastCarousel";

const ComingSoonScreen = ({ route }) => {
  return (
    <SafeAreaView style={styles.movieScreenRoot}>
      <ComingSoonMovieInfo item={route.params} />
      <StarsCarousel item={route.params} />
    </SafeAreaView>
  );
};

export default ComingSoonScreen;
