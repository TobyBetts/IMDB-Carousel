import React from "react";
import { View, Image, Text } from "react-native";

import styles from './infoStyles'

const ComingSoonMovieInfo = ({ item }) => {
    const { image, fullTitle, plot, releaseState, genres } = item;
    return (
      <View style={styles.movieScreenInfo}>
        <View style={styles.movieScreenImageView}>
          <Image source={{ uri: image }} style={styles.movieScreenImage} />
        </View>
        <Text style={styles.fullTitle}>{fullTitle}</Text>
        <Text style={styles.releaseState}>{releaseState}</Text>
        <Text style={styles.imdbRating}>Genre: {genres}</Text>
        <Text>{plot}</Text>
      </View>
    );
  };

  export default ComingSoonMovieInfo