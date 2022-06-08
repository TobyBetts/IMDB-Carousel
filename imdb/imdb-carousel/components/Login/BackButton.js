import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import styles from "./loginStyles";

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.backButtonContainer}>
      <Image
        style={styles.backButtonImage}
        source={require("../../assets/arrow_back.png")}
      />
    </TouchableOpacity>
  );
}
