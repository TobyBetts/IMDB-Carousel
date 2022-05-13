import React from "react";
import { SafeAreaView, FlatList, Pressable, View, Text } from "react-native";

import top250Data from "../top250Data";
import comingSoonData from "../comingSoonData";
import styles from "../styles";
import Tile from "../components/Tile";

const FlatListScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.carouselHeaders}>Top 250 Movies</Text>
      <View style={styles.carousel}>
        <FlatList
          horizontal={true}
          data={top250Data}
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


      <Text style={styles.carouselHeaders}>Coming Soon</Text>
      <View style={styles.carousel}>
        <FlatList
          horizontal={true}
          data={comingSoonData}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate("ComingSoon", {
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
    </SafeAreaView>
  );
};

export default FlatListScreen;
