import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Pressable } from "react-native";

import Tile from "../Tiles/Tile";
import getTopMovies from '../../APIs/getTopMovies'
import styles from "./carouselStyles";

const Top250Carousel = ({ navigation }) => {
    const [ top250MovieData, setTop250MovieData ] = useState([])
    
    useEffect(() => {
     getTopMovies( setTop250MovieData )
    }, [])

    return (
    <>
      <Text style={styles.carouselHeaders}>Top 250 Movies</Text>
      <View style={styles.carousel}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={top250MovieData.items}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate("MovieScreen", {
                  title: item.title,
                  id: item.id
                });
              }}
            >
              <Tile item={item} />
            </Pressable>
          )}
        />
      </View>
    </>
  );
};

export default Top250Carousel
