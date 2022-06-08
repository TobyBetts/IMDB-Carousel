import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";

import getMovieDetails from "../../APIs/getMovieDetails";
import styles from './infoStyles'

const ComingSoonMovieInfo = ({ item }) => {
    const { id } = item;
    const [ movieDetails, setMovieDetails ] = useState([])
  
    useEffect(() => {
      getMovieDetails( setMovieDetails, id )
    }, [])
    return (
      <View style={styles.movieScreenInfo}>
        <View style={styles.movieScreenImageView}>
          <Image source={{ uri: movieDetails.image }} style={styles.movieScreenImage} />
        </View>
        <Text style={styles.fullTitle}>{movieDetails.fullTitle}</Text>
        <Text style={styles.releaseDate}>{movieDetails.releaseDate}</Text>
        <Text style={styles.imdbRating}>Genre: {movieDetails.genres}</Text>
        <Text>{movieDetails.plot}</Text>
      </View>
    );
  };

  export default ComingSoonMovieInfo