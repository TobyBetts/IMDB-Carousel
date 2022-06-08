import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Theme from "../../core/Theme";

const styles = StyleSheet.create({
  backButtonContainer: {
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    left: 4,
  },

  backButtonImage: {
    width: 24,
    height: 24,
  },

  background: {
    flex: 1,
    width: "100%",
    backgroundColor: Theme.colors.surface,
  },

  backgroundContainer: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },

  header: {
    fontSize: 21,
    color: Theme.colors.primary,
    fontWeight: "bold",
    paddingVertical: 12,
  },

  logoImage: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },

  paragraphText: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
  },

  textInputContainer: {
    width: "100%",
    marginVertical: 12,
  },

  input: {
    backgroundColor: Theme.colors.surface,
  },

  description: {
    fontSize: 13,
    color: Theme.colors.secondary,
    paddingTop: 8,
  },

  error: {
    fontSize: 13,
    color: Theme.colors.error,
    paddingTop: 8,
  },
});

export default styles;
