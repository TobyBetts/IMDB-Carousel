import React from "react";
import { SafeAreaView } from "react-native";

import styles from "./ScreenStyles";
import Top250Carousel from "../components/Carousels/Top250Carousel";
import ComingSoonCarousel from "../components/Carousels/ComingSoonCarousel";

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.root}>
      <Top250Carousel navigation={navigation}/>
      <ComingSoonCarousel navigation={navigation}/>
    </SafeAreaView>
  );
};

export default HomeScreen;
