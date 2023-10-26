import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import Btn from "../Components/Button";
import bgimg from "../assets/PhotoBG.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
    setIsPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
    setIsEmailFocused(false);
  };

  const handleRegistration = () => {
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
            <Text style={styles.title}>Увійти</Text>
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
          <Btn onPress={handleRegistration}>Увійти</Btn>
          <Text style={styles.singupText}>
            Немає акаунту?{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Зареєструватися
            </Text>
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
    paddingBottom: 110,
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
    marginBottom: 16,
  },
  passwordBlock: {
    marginBottom: 42,
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
    marginBottom: 16,
    // backgroundColor: "#fff",
    // paddingHorizontal: 16,
    // justifyContent: "flex-end",
    // backgroundColor: "#fff",
  },
  singupText: {
    textAlign: "center",
    color: "#1B4371",
    // paddingBottom: 110,
  },
});

export default Login;
