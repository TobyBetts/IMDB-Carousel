import React from "react";
import { View, Image, Text } from 'react-native'
import styles from "./styles";

const renderItem = ({item}) => {
    return (
      <View
        style={styles.tile}>
        <Image source={{uri: item.image}} style={{width: 300, height: 300}} />
        <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
          {item.title}
        </Text>
      </View>
    );
  };

  export default renderItem