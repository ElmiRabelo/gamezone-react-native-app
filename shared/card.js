import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#dadada",
    marginVertical: 7,
    padding: 10
  },
  cardContent: {}
});

export default Card;
