import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  movieScreenInfo: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  movieScreenImageView: {
    backgroundColor: "#1c1c1c",
    height: 300,
    width: 428,
    alignItems: "center",
  },

  movieScreenImage: {
    height: 300,
    width: 200,
    alignItems: "center",
  },

  fullTitle: {
    fontWeight: "bold",
    fontSize: 23,
    margin: 7,
  },

  releaseDate: {
    fontStyle: 'italic'
  },

  imdbRating: {
    fontSize: 18,
    fontStyle: "italic",
  },
});

export default styles;
