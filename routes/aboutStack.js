import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About"
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "coral" },
    headerTintColor: "#f6f6f6",
    headerTitleAlign: "center"
  }
});

export default AboutStack;
