import React from "react";
import { View, Image, Text, Pressable } from 'react-native'

import styles from "./styles";

const renderItem = ({item, navigation }) => {
    return (
      <Pressable onPress={() => navigation.navigate('Movie', {title: item.title, image: item.image} )}>
        <View style={styles.tile}>
          <Image source={{uri: item.image}} style={styles.image} />
          <Text style={styles.title}>
            {item.title}
          </Text>
        </View>
      </Pressable> 
    );
  };

  export default renderItem