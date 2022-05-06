import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
      flex: 1, 
      backgroundColor: '#e5e5e5', 
      justifyContent: 'center'
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