import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";

import styles from "./loginStyles";
import Theme from "../../core/Theme";

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined" && { backgroundColor: Theme.colors.surface },
        style,
      ]}
      labelStyle={styles.buttonText}
      mode={mode}
      {...props}
    />
  );
}
