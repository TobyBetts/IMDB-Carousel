import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import renderItem from './renderItem'
import data from './data';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);


const App = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{ backgroundColor: 'purple', height: 'auto', flex: 1, justifyContent: 'flex-end' }}>
    <View style={{marginVertical: 10 }}>
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
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'orange',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
    </View>
  );
};

export default App;