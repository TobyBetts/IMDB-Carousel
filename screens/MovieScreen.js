import React from "react";
import { SafeAreaView} from "react-native";

import styles from "../styles";
import { RatingTile } from "../components/Tile";

const MovieScreen = ({ route }) => {
  
  return (
    <SafeAreaView style={styles.movieScreenRoot}>
      <RatingTile item={route.params} />
    </SafeAreaView>
  );
};

export default MovieScreen;
