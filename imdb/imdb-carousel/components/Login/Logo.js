import React from "react";
import { Image, StyleSheet } from "react-native";

import styles from "./loginStyles";

export default function Logo() {
  return (
    <Image source={require("../../assets/logo.png")} style={styles.logoImage} />
  );
}
