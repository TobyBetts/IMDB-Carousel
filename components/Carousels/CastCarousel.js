import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Pressable } from "react-native";

import ActorTile from "../Tiles/ActorTile";
import styles from "./carouselStyles";

const CastCarousel = ({item}) => {
 
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
    <>
      <Text style={styles.carouselHeaders}>Cast</Text>
      <View style={styles.castCarousel}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={movieDetails.actorList}
          renderItem={({ item }) => (
              <ActorTile item={item} />
          )}
        />
      </View>
    </>
  );
};

export default CastCarousel