import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 20,
    color: "#333"
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#dadada",
    backgroundColor: "#f2f2f2",
    padding: 10,
    fontSize: 18,
    elevation: 1,
    borderRadius: 4
  },
  errorMsg: {
    fontSize: 17,
    marginBottom: 3,
    textAlign: "center",
    color: "#ff1d38"
  }
});
