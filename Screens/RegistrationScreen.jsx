import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import Btn from "../Components/Button";
import AddPhoto from "../assets/svg/add.svg";
import bgimg from "../assets/PhotoBG.png";
const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginFocus = () => {
    setIsLoginFocused(true);
    setIsEmailFocused(false);
    setIsPasswordFocused(false);
  };
  const handleEmailFocus = () => {
    setIsLoginFocused(false);
    setIsEmailFocused(true);
    setIsPasswordFocused(false);
  };
  const handlePasswordFocus = () => {
    setIsLoginFocused(false);
    setIsEmailFocused(false);
    setIsPasswordFocused(true);
  };

  const handleRegistration = () => {
    console.log("Login:", login);
    console.log("Email:", email);
    console.log("Password:", password);
    setLogin("");
    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <View style={styles.icon}>
              <AddPhoto />
            </View>
          </View>
          <Text style={styles.title}>Реєстрація</Text>

          <View style={styles.inputBlock}>
            <TextInput
              style={[styles.input, isLoginFocused && styles.inputFocused]}
              onFocus={handleLoginFocus}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              value={login}
              onChangeText={(text) => setLogin(text)}
            />
          </View>
          <View style={styles.inputBlock}>
            <TextInput
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              onFocus={handleEmailFocus}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={[styles.inputBlock, styles.passwordBlock]}>
            <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
              behavior={Platform.OS == "ios" ? "padding" : "height"}>
              <TextInput
                style={[styles.input, isPasswordFocused && styles.inputFocused]}
                onFocus={handlePasswordFocus}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </KeyboardAvoidingView>
            <Text onPress={handleShowPassword} style={styles.togglePassword}>
              {showPassword ? "Сховати" : "Показати"}
            </Text>
          </View>
          <View style={styles.buttonBlock}>
            <Btn onPress={handleRegistration}>Зареєструватися</Btn>
            <Text style={styles.loginText}>
              Вже є акаунт?{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => navigation.navigate("Login")}>
                Увійти
              </Text>
            </Text>
          </View>
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
  input: {
    width: "100%",
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    color: "#212121",
    borderRadius: 10,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
  inputBlock: {
    width: "100%",
    position: "relative",
    paddingBottom: 16,
  },
  passwordBlock: {
    paddingBottom: 42,
  },
  togglePassword: {
    position: "absolute",
    right: 15,
    top: 25,
    transform: [{ translateY: -7.5 }],
    color: "#1B4371",
  },
  buttonBlock: {
    width: "100%",
  },
  loginText: {
    textAlign: "center",
    color: "#1B4371",
  },
});
export default RegistrationScreen;
