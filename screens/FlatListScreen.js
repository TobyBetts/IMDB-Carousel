import React from "react";
import { SafeAreaView, FlatList, Pressable, View, Text } from "react-native";

import top250Data from "../data/top250Data";
import comingSoonData from "../data/comingSoonData";
import styles from "../styles";
import FlatListTile from "../components/FlatListTile";

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
              <FlatListTile item={item} />
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
              <FlatListTile item={item} />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatListScreen;
