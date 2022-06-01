import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
  tile: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'white',
    marginHorizontal: 7,
    justifyContent: "flex-start",
    width: 200,
    borderRadius: 12,
  },

  image: {
    width: 200,
    height: 274,
    resizeMode: "contain",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },

  title: {
    marginVertical: 7,
    fontSize: 16,
    fontWeight: '700',
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
    fontWeight: "600",
    color: "black",
  },

  characterName: {
    fontSize: 14,
    fontStyle: 'italic'
  }
});

export default styles;
