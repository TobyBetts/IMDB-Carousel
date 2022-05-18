import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";

import styles from './infoStyles'

const ComingSoonMovieInfo = ({ item }) => {
    const { id } = item;
    const [ comingSoonMovieDetails, setComingSoonMovieDetails ] = useState([])
  
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://imdb-api.com/en/API/Title/k_hb5v8ahs/${id}`);
        xhr.send();
        xhr.onload = () => {
          if (xhr.status == 200) {
            let response = JSON.parse(xhr.response)
            setComingSoonMovieDetails(response)
    
          }else{
            console.log(`HTTP Request Failed ${xhr.status}`)
          }
        };
    }, [])
    return (
      <View style={styles.movieScreenInfo}>
        <View style={styles.movieScreenImageView}>
          <Image source={{ uri: comingSoonMovieDetails.image }} style={styles.movieScreenImage} />
        </View>
        <Text style={styles.fullTitle}>{comingSoonMovieDetails.fullTitle}</Text>
        <Text style={styles.releaseDate}>{comingSoonMovieDetails.releaseDate}</Text>
        <Text style={styles.imdbRating}>Genre: {comingSoonMovieDetails.genres}</Text>
        <Text>{comingSoonMovieDetails.plot}</Text>
      </View>
    );
  };

  export default ComingSoonMovieInfo