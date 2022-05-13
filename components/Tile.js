import React from "react";
import { View, Image, Text } from "react-native";

import styles from "../styles";

const Tile = ({ item }) => {
  return (
    <View style={styles.tile}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const RatingTile = ({ item }) => {
  const { image, fullTitle, imdbRating, imDbRatingCount } = item;
  return (
    <View style={styles.movieScreenInfo}>
      <View style={styles.movieScreenImageView}>
        <Image source={{ uri: image }} style={styles.movieScreenImage} />
      </View>
      <Text style={styles.fullTitle}>{fullTitle}</Text>
      <Text style={styles.imdbRating}>
        IMDB Rating: {imdbRating} ({imDbRatingCount} reviews)
      </Text>
    </View>
  );
};

export default Tile;
export { RatingTile };
