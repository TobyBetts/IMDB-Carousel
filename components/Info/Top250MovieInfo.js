import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./infoStyles";

const Top250MovieInfo = ({ item }) => {
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

  export default Top250MovieInfo