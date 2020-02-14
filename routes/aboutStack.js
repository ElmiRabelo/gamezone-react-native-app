import React from "react";
import Header from "../shared/header";
import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: <Header title="About GameZone" navigation={navigation} />
      };
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "coral",
    headerStyle: { backgroundColor: "coral", height: 60 }
  }
});

export default AboutStack;
