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
        <Image source={{uri: item.image}} style={{width: 300, height: 300}} />
        <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
          {item.title}
        </Text>
      </View>
    );
  };

  export default renderItem