import React from "react";
import { SafeAreaView } from "react-native";

import styles from "../styles";
import { ComingSoonTile } from "../components/Tile";

const ComingSoonScreen = ({ route }) => {
  return (
    <SafeAreaView style={styles.movieScreenRoot}>
      <ComingSoonTile item={route.params} />
    </SafeAreaView>
  );
};

export default ComingSoonScreen;
