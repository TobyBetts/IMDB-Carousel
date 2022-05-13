import React from "react";
import { SafeAreaView, FlatList, Pressable, View, Text } from "react-native";

import data from "../data";
import styles from "../styles";
import Tile from "../components/Tile";

const FlatListScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.top250MoviesHeader}> 
          Top 250 Movies
        </Text>
      <View style={styles.carousel}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate("Movie", {
                  title: item.title,
                  image: item.image,
                  fullTitle: item.fullTitle,
                  imdbRating: item.imDbRating,
                  imDbRatingCount: item.imDbRatingCount
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
