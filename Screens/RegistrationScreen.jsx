import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import SVGImg from "../assets/svg/add.svg";
import bgimg from "../assets/PhotoBG.png";
import Btn from "../Components/Button";

const Registration = () => {
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
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : "height"}>
            <View style={styles.avatar}>
              <View style={styles.icon}>
                <SVGImg style={styles.icon} />
              </View>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.inputBlock}>
              <TextInput
                style={[styles.input, isLoginFocused && styles.inputFocused]}
                onFocus={handleLoginFocus}
                placeholder="Логін"
                value={login}
                onChangeText={(text) => setLogin(text)}
              />
            </View>
            <View style={styles.inputBlock}>
              <TextInput
                style={[styles.input, isEmailFocused && styles.inputFocused]}
                onFocus={handleEmailFocus}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={[styles.inputBlock, styles.passwordBlock]}>
              <TextInput
                style={[styles.input, isPasswordFocused && styles.inputFocused]}
                onFocus={handlePasswordFocus}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Text onPress={handleShowPassword} style={styles.togglePassword}>
                {showPassword ? "Сховати" : "Показати"}
              </Text>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

        <View style={styles.buttonBlock}>
          <Btn onPress={handleRegistration}>Зареєструватися</Btn>
          <Text style={styles.singupText}>
            Вже є акаунт?{" "}
            <Text style={{ textDecorationLine: "underline" }}>Увійти</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto-Regular",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    paddingBottom: 45,
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    paddingBottom: 32,
    paddingTop: 32,
    color: "#212121",
    fontSize: 30,
  },
  avatar: {
    position: "absolute",
    top: -60,
    right: "50%",
    transform: [{ translateX: 30 }],
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
  input: {
    width: "100%",
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
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
    marginBottom: 16,
  },
  passwordBlock: {
    marginBottom: 42,
  },
  togglePassword: {
    position: "absolute",
    right: 15,
    top: 25,
    transform: [{ translateY: -3 }],
    color: "#1B4371",
  },
  buttonBlock: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    paddingBottom: 44,
    width: "100%",
  },
  singupText: {
    textAlign: "center",
    color: "#1B4371",
  },
});

export default Registration;
