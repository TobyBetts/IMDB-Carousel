import React from "react";
import { View, Image, Text } from 'react-native'
import styles from "./styles";

const renderItem = ({item}) => {
    return (
      <View style={styles.tile}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.title}>
          {item.title}
        </Text>
      </View>
    );
  };

  export default renderItem