import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import GlobalContext from "./GlobalContext";

export default function PostScreen({ route, navigation }: any) {
  const { uri } = route.params;
  const [text, onChangeText] = React.useState("");

  const styles = StyleSheet.create({
    input: {
      height: 100,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlign: "left",
      textAlignVertical: "top"
    },
    media: {
      margin: 12,
      height: 300
    },
  });

  const discard = () => {
    navigation.goBack();
  };

  const post = () => {
    console.log("Posting ...");
    navigation.goBack();
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
            <Image source={{ uri: uri }} style={styles.media} resizeMethod='auto' resizeMode='center' />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Button title="Discard" onPress={discard} />
            <Button title="Post" onPress={post} />
          </View>
        </View>
      )}
    </GlobalContext.Consumer>
  );
}
