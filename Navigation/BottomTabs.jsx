import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "../Screens/PostsScreen";
import CreatePostScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { getHeaderTitle } from "@react-navigation/elements";
import { Text, StyleSheet, View } from "react-native";
import Header from "../Components/Header";
import { useNavigation } from "@react-navigation/native";

import Grid from "../assets/svg/grid.svg";
import Union from "../assets/svg/add.svg";
import User from "../assets/svg/user.svg";
import Arrow from "../assets/svg/arrow-left.svg";

import LogOutBtn from "../Components/LogOutBtn";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,

        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          const buttonStyles = {
            backgroundColor: focused ? "#FF6C00" : "transparent",
            borderRadius: 0,
            width: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          };
          if (route.name === "Posts") {
            icon = (
              <View style={[buttonStyles, { borderRadius: 20 }]}>
                <Grid color={focused ? "white" : "#212121CC"} />
              </View>
            );
          }
          if (route.name === "Create") {
            icon = (
              <View style={[buttonStyles, { borderRadius: 20 }]}>
                <Union color={focused ? "white" : "#212121CC"} />
              </View>
            );
          }
          if (route.name === "Profile") {
            icon = (
              <View style={[buttonStyles, { borderRadius: 20 }]}>
                <User color={focused ? "white" : "#212121CC"} />
              </View>
            );
          }
          return icon;
        },
        tabBarVisible: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: "23%",
          textAlign: "center",
        },
      })}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          tabBarLabel: "center",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
            fontSize: 17,
          },
          headerRight: () => <LogOutBtn />,
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePostScreen}
        options={{
          headerLeft: () => (
            <Arrow
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
          tabBarLabel: "center",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
            fontSize: 17,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <Arrow
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          title: "Профіль ",
          tabBarStyle: { display: "none" },
          tabBarLabel: "center",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
            fontSize: 17,
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
