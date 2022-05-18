import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Pressable } from "react-native";

import Tile from "../Tiles/Tile";
import styles from "./carouselStyles";

const ComingSoonCarousel = () => {
  const [comingSoonMovieData, setComingSoonMovieData] = useState([]);

  useEffect(() => {
    const xh = new XMLHttpRequest();
    xh.open("GET", "https://imdb-api.com/en/API/ComingSoon/k_a457c7lp");
    xh.send();
    xh.onload = () => {
      if (xh.status == 200) {
        let response = JSON.parse(xh.response);
        setComingSoonMovieData(response);
      } else {
        console.log(`HTTP Request Failed ${xh.status}`);
      }
    };
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
                navigation.navigate("ComingSoonScreen", {
                  title: item.title,
                  image: item.image,
                  fullTitle: item.fullTitle,
                  plot: item.plot,
                  releaseState: item.releaseState,
                  genres: item.genres,
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
