import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Pressable } from "react-native";

import Tile from "../Tiles/Tile";
import styles from "./carouselStyles";

const Top250Carousel = ({ navigation }) => {

    const [ top250MovieData, setTop250MovieData ] = useState([])
  
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://imdb-api.com/en/API/Top250Movies/k_a457c7lp");
        xhr.send();
        xhr.onload = () => {
          if (xhr.status == 200) {
            let response = JSON.parse(xhr.response)
            setTop250MovieData(response)
    
          }else{
            console.log(`HTTP Request Failed ${xhr.status}`)
          }
        };
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
                navigation.navigate("Movie", {
                  title: item.title,
                  image: item.image,
                  fullTitle: item.fullTitle,
                  imdbRating: item.imDbRating,
                  imDbRatingCount: item.imDbRatingCount,
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
