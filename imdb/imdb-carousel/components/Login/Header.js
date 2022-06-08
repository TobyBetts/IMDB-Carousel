import React from "react";
import { Text } from "react-native-paper";

import styles from "./loginStyles";

export default function Header(props) {
  return <Text style={styles.header} {...props} />;
}
