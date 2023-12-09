import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import MapScreen from "../Screens/MapScreen";
import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import Home from "../Screens/Home";
import CommentsScreen from "../Screens/CommentsScreen";

import "react-native-gesture-handler";
import LogOutBtn from "../Components/LogOutBtn";
import Arrow from "../assets/svg/arrow-left.svg";

const MainStack = createStackNavigator();

const MainNav = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Register"
        component={RegistrationScreen}
        options={{
          title: "Реєстрація",
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Логін",
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerBackImage: () => {},
          title: "Публікації",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          headerTintColor: "red",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
            fontSize: 17,
          },
          headerRight: () => <LogOutBtn />,
        }}
      />
      <MainStack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Create"
        component={CreatePostScreen}
        options={{
          headerBackImage: () => {},
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          headerTintColor: "red",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
            fontSize: 17,
          },
        }}
      />
      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // headerBackImage: () => {},
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          headerTintColor: "red",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
            fontSize: 17,
          },
        }}
      />
      <MainStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Мапа",
          headerShown: true,
        }}
      />

      <MainStack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerShown: true,
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNav;
