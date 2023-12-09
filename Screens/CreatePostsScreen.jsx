import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import MapView, { Marker } from "react-native-maps";

import Cam from "../assets/svg/camera.svg";
import Trash from "../assets/svg/trash.svg";
import MapPin from "../assets/svg/map-pin.svg";
import Btn from "../Components/Button";

const CreatePostScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.addPhotoWrapper}>
            <Camera style={styles.camera} type={type} ref={setCameraRef}>
              <View style={styles.photoView}>
                <TouchableOpacity
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: 10,
                      color: "white",
                    }}>
                    {" "}
                    Flip{" "}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      await MediaLibrary.createAssetAsync(uri);
                    }
                  }}>
                  <View style={styles.takePhotoOut}>
                    <View style={styles.takePhotoInner}></View>
                  </View>
                </TouchableOpacity>
              </View>
            </Camera>
            <Text style={styles.addPhotoText}>Завантажте фото</Text>
          </View>
          <SafeAreaView style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
            />
            <View style={{ position: "relative" }}>
              <MapPin style={styles.icon} />
              <TextInput
                style={[styles.input, { paddingLeft: 28 }]}
                placeholder="Місцевість..."
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  wrapper: {
    paddingTop: 32,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  addPhotoWrapper: {
    marginBottom: 32,
  },
  camera: {
    // display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    height: 240,
    // backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 8,
  },
  photoView: {
    display: "flex",
    backgroundColor: "transparent",
    justifyContent: "flex-end",
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
