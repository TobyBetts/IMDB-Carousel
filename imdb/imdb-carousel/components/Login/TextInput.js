import React from "react";
import { View, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";

import styles from "./loginStyles";
import { theme } from "../../core/Theme";

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.textInputContainer}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}
