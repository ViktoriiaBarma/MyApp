import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Image,
} from "react-native";
import Cross from "../assets/svg/Union.svg";
import bgimg from "../assets/PhotoBG.png";
import userImage from "../assets/User.png";

const ProfileScreen = () => {
  return (
    <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <Image source={userImage} />
            <View style={styles.icon}>
              <Cross />
            </View>
          </View>
          <Text style={styles.title}>Natali Romanova</Text>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    fontFamily: "Roboto-Regular",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 110,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  avatar: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    right: -12.5,
    bottom: 15,
  },
  title: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    paddingBottom: 32,
    paddingTop: 92,
    color: "#212121",
    fontSize: 30,
  },
});
export default ProfileScreen;
