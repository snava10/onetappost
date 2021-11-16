import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import GlobalContext from "./GlobalContext";

export default function PostScreen({ route, navigation }: any) {
  const { uri } = route.params;
  const [text, onChangeText] = React.useState("");

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
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
            justifyContent: "space-around",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <Image source={{ uri: uri }} style={{ width: 200, height: 200 }} />
          <View>
            <Button title="Discard" onPress={discard} />
            <Button title="Post" onPress={post} />
          </View>
        </View>
      )}
    </GlobalContext.Consumer>
  );
}
