import React from "react";
import { ImageBackground } from "react-native";
import { globalStyles } from "../styles/global";
import ImageBg from "../assets/game_bg.png";

const BackgroundContainer = ({ children }) => (
  <ImageBackground source={ImageBg} style={globalStyles.container}>
    {children}
  </ImageBackground>
);

export default BackgroundContainer;
