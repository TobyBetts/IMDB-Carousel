import React from "react";
import { View, Image, Text } from 'react-native'

const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderWidth: 1,
          padding: 20,
          borderRadius: 20,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image source={{uri: item.url}} style={{width: 200, height: 200}} />
        <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
          {item.name}
        </Text>
      </View>
    );
  };

  export default renderItem