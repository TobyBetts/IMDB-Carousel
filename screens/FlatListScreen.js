import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Pressable, View, Text } from "react-native";

import top250Data from "../data/top250Data";
import comingSoonData from "../data/comingSoonData";
import styles from "../styles";
import FlatListTile from "../components/FlatListTile";

const FlatListScreen = ({ navigation }) => {

  const [ top250MovieData, setTop250MovieData ] = useState([])
  const [ comingSoonMovieData, setComingSoonMovieData ] = useState([])
  
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
    const xh = new XMLHttpRequest();
    xh.open("GET", "https://imdb-api.com/en/API/ComingSoon/k_a457c7lp");
    xh.send();
    xh.onload = () => {
      if (xh.status == 200) {
        let response = JSON.parse(xh.response)
        setComingSoonMovieData(response)

      }else{
        console.log(`HTTP Request Failed ${xh.status}`)
      }
    };

  }, []);

  return (
    <SafeAreaView style={styles.root}>
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
              <FlatListTile item={item} />
            </Pressable>
          )}
        />
      </View>

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
              <FlatListTile item={item} />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatListScreen;
