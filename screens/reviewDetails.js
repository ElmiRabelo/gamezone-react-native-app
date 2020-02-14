import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { globalStyles } from "../styles/global";
import { images } from "../utils/utils";
import Card from "../shared/card";
import ImageBg from "../assets/game_bg.png";

const ReviewDetails = ({ navigation }) => {
  const rating = navigation.getParam("rating");
  return (
    <ImageBackground source={ImageBg} style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <View>
          <Text>GameZone rating: </Text>
          <Image source={images[rating]} />
        </View>
      </Card>
    </ImageBackground>
  );
};

export default ReviewDetails;
