import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Button, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import GlobalContext from "./GlobalContext";
import * as ImagePicker from "expo-image-picker";

export default function PostScreen({ navigation }: any) {
  const [text, onChangeText] = React.useState("");
  const [image, setImage] = React.useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const launchCamera = async (mediaType: ImagePicker.MediaTypeOptions) => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: mediaType,
      videoMaxDuration: 0,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const styles = StyleSheet.create({
    input: {
      height: 100,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlign: "left",
      textAlignVertical: "top",
    },
    media: {
      margin: 12,
      height: 300,
    },
  });

  const post = () => {
    console.log("Posting ...");
    setImage(null);
  };

  return (
    <GlobalContext.Consumer>
      {(context: any) => (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flex: 0.9,
            }}
          >
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              multiline={true}
              placeholder="What's on your mind?"
            />
            <Image
              source={{ uri: image }}
              style={styles.media}
              resizeMethod="auto"
              resizeMode="center"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              title="Photo"
              onPress={() => launchCamera(ImagePicker.MediaTypeOptions.Images)}
            />
            <Button
              title="Film"
              onPress={() => launchCamera(ImagePicker.MediaTypeOptions.Videos)}
            />
            <Button title="File" onPress={pickImage} />
            <Button title="Post" onPress={post} color="green" />
          </View>
        </View>
      )}
    </GlobalContext.Consumer>
  );
}
