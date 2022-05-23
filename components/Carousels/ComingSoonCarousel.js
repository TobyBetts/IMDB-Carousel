import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Pressable } from "react-native";
import getComingSoonMovies from "../../APIs/getComingSoonMovies";

import Tile from "../Tiles/Tile";
import styles from "./carouselStyles";

const ComingSoonCarousel = ({ navigation }) => {
  const [comingSoonMovieData, setComingSoonMovieData] = useState([]);

  useEffect(() => {
   getComingSoonMovies( setComingSoonMovieData )
  }, []);

  return (
    <>
      <Text style={styles.carouselHeaders}>Coming Soon</Text>
      <View style={styles.carousel}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={comingSoonMovieData.items}
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

export default ComingSoonCarousel;
