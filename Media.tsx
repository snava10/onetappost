import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";

export default function MediaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Select file or open the camera</Text>
      <StatusBar style="auto" />
    </View>
  );
}
