import React from "react";
import { ImageBackground, KeyboardAvoidingView } from "react-native";

import styles from "./loginStyles";

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require("../../assets/background_dot.png")}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.backgroundContainer}
        behavior="padding"
      >
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
