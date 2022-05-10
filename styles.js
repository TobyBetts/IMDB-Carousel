import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    root: {
      flex: 1, 
      justifyContent: 'center'
    },

    carousel: {
      height: 350,
      marginHorizontal: 5,
    },

    tile: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      marginHorizontal: 5,
      justifyContent: 'center',
      width: 220
    },

    image: {
      width: 300,
      height: 300,
      resizeMode: 'contain'
    },

    title: {
      marginVertical: 10, 
      fontSize: 20, 
      fontWeight: 'bold', 
      color: 'black', 
    }

  })

export default styles