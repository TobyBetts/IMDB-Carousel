import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Pressable } from "react-native";
import getMovieDetails from "../../APIs/getMovieDetails";

import ActorTile from "../Tiles/ActorTile";
import styles from "./carouselStyles";

const CastCarousel = ({item}) => {
 
    const { id } = item;
    const [ movieDetails, setMovieDetails ] = useState([])
  
    useEffect(() => {
      getMovieDetails( setMovieDetails, id )
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