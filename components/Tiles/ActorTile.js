import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./TileStyles";

const ActorTile = ({ item }) => {
  return (
    <View style={styles.actorTile}>
      <Image style={styles.actorImage} source={{ uri: item.image }} />
      <Text style={styles.actorName}>{item.name}</Text>
      <Text style={styles.characterName}>{item.asCharacter}</Text>
    </View>
  );
};

export default ActorTile;
