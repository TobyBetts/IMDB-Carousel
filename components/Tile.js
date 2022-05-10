import React from "react";
import { View, Image, Text } from 'react-native'

import styles from "../styles";

const Tile = ({item}) => {
    return (
        <View style={styles.tile}>
            <Image style={styles.image} source={{ uri: item.image}} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )
}

export default Tile
