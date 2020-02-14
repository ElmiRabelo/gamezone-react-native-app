import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={38}
        onPress={() => navigation.openDrawer()}
        style={styles.icon}
      />
      <Image
        source={require("../assets/heart_logo.png")}
        style={styles.headerImage}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#323441",
    letterSpacing: 1
  },
  icon: {
    position: "absolute",
    left: 16
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  }
});
