import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import renderItem from './renderItem'
import data from './data';
import styles from './styles';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);


const App = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={styles.root}>
    <View>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.activeDots}
        tappableDots={true}
        inactiveDotStyle={styles.inactiveDots}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
    </View>
  );
};

export default App;

