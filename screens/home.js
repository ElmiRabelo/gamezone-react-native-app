import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { globalStyles } from "../styles/global";

const Home = props => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screens</Text>
    </View>
  );
};

export default Home;
