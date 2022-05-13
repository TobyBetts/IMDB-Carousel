import React from "react";
import { View, Image, Text, PixelRatio } from "react-native";

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

const ComingSoonTile = ({ item }) => {
  const { image, fullTitle, plot, releaseState, genres } = item;
  return (
    <View style={styles.movieScreenInfo}>
      <View style={styles.movieScreenImageView}>
        <Image source={{ uri: image }} style={styles.movieScreenImage} />
      </View>
      <Text style={styles.fullTitle}>{fullTitle}</Text>
      <Text>{releaseState}</Text>
      <Text style={styles.imdbRating}>Genre: {genres}</Text>
      <Text>{plot}</Text>
    </View>
  );
};

export default Tile;
export { RatingTile, ComingSoonTile };
