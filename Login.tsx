import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FacebookLogin, logIn } from "./FacebookProxy";
import { styles } from "./Styles";

export default function LoginScreen({ navigation }) {
  const [facebookLogin, setFacebookLogin] = useState({} as FacebookLogin);
  return (
    <View style={styles.container}>
      <Text>Welcome to One Tap Post, where you will be able to post</Text>
      <Text>to all your social media platforms with one tap</Text>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={async () => {
          const fbLogin: FacebookLogin = await logIn();
          if (fbLogin.type === 'success') {
            navigation.navigate('Media');
          }          
        }}
      >
        Login with Facebook
      </Icon.Button>
      {/* <Text>{JSON.stringify(facebookLogin.user)}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}