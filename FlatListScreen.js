import React from 'react'
import { SafeAreaView, FlatList} from 'react-native';

import renderItem from './renderItem';
import data from './data';
import styles from './styles';


const FlatListScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.root}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={renderItem}
        />
      </SafeAreaView>
    )
}
export default FlatListScreen