import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
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
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },

  actorTile: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 5,
    justifyContent: "flex-start",
    width: 220,
  },

  actorImage: {
    height: 200,
    width: 220,
  },

  actorName: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },

  characterName: {
    fontSize: 14,
  }
});

export default styles;
