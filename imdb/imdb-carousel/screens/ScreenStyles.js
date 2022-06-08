import { StyleSheet } from "react-native";
import Theme from "../core/Theme";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  movieScreenRoot: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  loginForgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },

  loginRow: {
    flexDirection: "row",
    marginTop: 4,
  },

  loginForgot: {
    fontSize: 13,
    color: Theme.colors.secondary,
  },

  loginLink: {
    fontWeight: "bold",
    color: Theme.colors.primary,
  },

  registerRow: {
    flexDirection: "row",
    marginTop: 4,
  },

  registerLink: {
    fontWeight: "bold",
    color: Theme.colors.primary,
  },
});

export default styles;
