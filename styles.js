import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
  },

  carousel: {
    height: 380,
    marginHorizontal: 5,
  },

  top250MoviesHeader: {
    alignItems: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    margin: 20
  },

  tile: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 5,
    justifyContent: "flex-start",
    width: 220,
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  title: {
    marginVertical: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  movieScreenRoot: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
  },

  movieScreenInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  movieScreenImageView: {
    backgroundColor: '#1c1c1c',
    height: 300,
    width: 500,
    alignItems: 'center',
  },

  movieScreenImage: {
    height: 300, 
    width: 200, 
    alignItems: 'center'
  },

  fullTitle: {
    fontWeight: 'bold',
    fontSize: 23,
    margin: 7,
  },

  imdbRating: {
    fontSize: 18,
    fontStyle: 'italic'
  }

});

export default styles;
