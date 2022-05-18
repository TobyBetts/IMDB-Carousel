import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";

import styles from "./infoStyles";

const Top250MovieInfo = ({ item }) => {
    const { id } = item;
    const [ movieDetails, setMovieDetails ] = useState([])
  
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://imdb-api.com/en/API/Title/k_hb5v8ahs/${id}`);
        xhr.send();
        xhr.onload = () => {
          if (xhr.status == 200) {
            let response = JSON.parse(xhr.response)
            setMovieDetails(response)
    
          }else{
            console.log(`HTTP Request Failed ${xhr.status}`)
          }
        };
    }, [])
    return (
      <View style={styles.movieScreenInfo}>
        <View style={styles.movieScreenImageView}>
          <Image source={{ uri: movieDetails.image }} style={styles.movieScreenImage} />
        </View>
        <Text style={styles.fullTitle}>{movieDetails.fullTitle}</Text>
        <Text style={styles.imdbRating}>
          IMDB Rating: {movieDetails.imDbRating} ({movieDetails.imDbRatingVotes} reviews)
        </Text>
        <Text style={styles.imdbRating}>{movieDetails.genres}</Text>
        <Text>{movieDetails.plot}</Text>
      </View>
    );
  };

  export default Top250MovieInfo