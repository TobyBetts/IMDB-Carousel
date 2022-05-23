import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  movieDetailsRoot: {
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
    margin: 10,
  },

  imdbRating: {
    fontSize: 16,
    fontStyle: "italic",
  },

  genres: {
    fontSize: 16,
    fontStyle: 'italic'
  },

  plot: {
    marginHorizontal: 10,
    marginTop: 10
  }
});

export default styles;
