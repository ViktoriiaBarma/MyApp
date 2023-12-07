import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Camera from "../assets/svg/camera.svg";
import Trash from "../assets/svg/trash.svg";
import MapPin from "../assets/svg/map-pin.svg";
import Btn from "../Components/Button";
const CreatePostScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.addPhotoWrapper}>
            <View style={styles.addPhoto}>
              <View style={styles.iconAddPhoto}>
                <Camera />
              </View>
            </View>
            <Text style={styles.addPhotoText}>Завантажте фото</Text>
          </View>
          <SafeAreaView style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Назва"
              placeholderTextColor="#BDBDBD"
            />
            <View style={{ position: "relative" }}>
              <MapPin style={styles.icon} />
              <TextInput
                style={[styles.input, { paddingLeft: 28 }]}
                placeholder="Місцевість"
                placeholderTextColor="#BDBDBD"
              />
            </View>
          </SafeAreaView>
          <Btn>Опубліковати</Btn>
        </View>
        <View style={styles.deleteIcon}>
          <View style={styles.deleteIconBlock}>
            <Trash />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 32,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingBottom: 24,
  },
  addPhotoWrapper: {
    marginBottom: 32,
  },
  addPhoto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 8,
  },
  iconAddPhoto: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  addPhotoText: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  form: {
    gap: 16,
    marginBottom: 32,
  },
  input: {
    fontSize: 16,
    paddingVertical: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  icon: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -12.5 }],
  },
  deleteIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIconBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    paddingVertical: 10,
    width: 70,
    borderRadius: 20,
  },
});

export default CreatePostScreen;
