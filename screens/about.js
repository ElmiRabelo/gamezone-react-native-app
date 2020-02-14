import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { globalStyles } from "../styles/global";
import ImageBg from "../assets/game_bg.png";

export default function About() {
  return (
    <ImageBackground source={ImageBg} style={globalStyles.container}>
      <Text>About Screen</Text>
    </ImageBackground>
  );
}
