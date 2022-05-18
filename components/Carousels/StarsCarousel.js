import React from "react";
import { Text, View, FlatList, Pressable } from "react-native";

import ActorTile from "../Tiles/ActorTile";
import styles from "./carouselStyles";
import top250Data from '../../data/top250Data'

const StarsCarousel = () => {
  return (
    <>
      <Text style={styles.carouselHeaders}>Stars</Text>
      <View style={styles.castCarousel}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={top250Data}
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
              <ActorTile item={item} />
            </Pressable>
          )}
        />
      </View>
    </>
  );
};

export default StarsCarousel