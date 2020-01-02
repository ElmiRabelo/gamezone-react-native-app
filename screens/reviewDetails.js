import React from "react";
import { View, Text } from "react-native";

const ReviewDetails = () => {
  return (
    <View style={styles.container}>
      <Text>ReviewDetails Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  }
});

export default ReviewDetails;
