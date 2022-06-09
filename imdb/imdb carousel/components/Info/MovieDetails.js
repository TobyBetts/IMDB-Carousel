import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";


import getMovieDetails from "../../APIs/getMovieDetails";
import styles from "./infoStyles";

const MovieDetails = ({ item }) => {
    const { id } = item;
    const [ movieDetails, setMovieDetails ] = useState([])
  
    useEffect(() => {
      getMovieDetails( setMovieDetails, id)
    }, [])
    return (
      <View style={styles.movieDetailsRoot}>
        <View style={styles.movieScreenImageView}>
          <Image source={{ uri: movieDetails.image }} style={styles.movieScreenImage} />
        </View>
        <Text style={styles.fullTitle}>{movieDetails.fullTitle}</Text>
        <Text style={styles.imdbRating}>
          IMDB Rating: {movieDetails.imDbRating} ({movieDetails.imDbRatingVotes} reviews)
        </Text>
        <Text style={styles.genres}>{movieDetails.genres}</Text>
        <Text style={styles.plot}>{movieDetails.plot}</Text>
      </View>
    );
  };

  export default MovieDetails