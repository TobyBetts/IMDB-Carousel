import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    root: {
      flex: 1, 
      backgroundColor: 'purple',
      justifyContent: 'center'
    },

    tile: {
      flex: 1,
      borderWidth: 2,
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      height: '45%'      
    },

    image: {
      width: 300,
      height: 300
    },

    title: {
      marginVertical: 10, 
      fontSize: 20, 
      fontWeight: 'bold', 
      color: 'black', 
      paddingBottom: 50}

  })

export default styles