import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    root: {
      flex: 1, 
      backgroundColor: 'purple', 
      justifyContent: 'center',
    },

    tile: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    activeDots: {
      width: 15,
      height: 15,
      borderRadius: 5,
      marginHorizontal: 8,
      backgroundColor: 'orange',
    },

    inactiveDots: {
      backgroundColor: 'white',
    },
  })

export default styles