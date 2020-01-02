import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = props => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  }
});

export default Home;
