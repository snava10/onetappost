import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FacebookLogin, logIn } from './FacebookProxy';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  
  const [facebookLogin, setFacebookLogin] = useState({} as FacebookLogin);
  return (
    <View style={styles.container}>
      <Text>Welcome to One Tap Post, where you will be able to post</Text>
      <Text>to all your social media platforms with one tap</Text>
      <Icon.Button name="facebook" backgroundColor="#3b5998" 
        onPress={async () => { 
          setFacebookLogin(await logIn());
        }}>Login with Facebook
      </Icon.Button>
      {/* <Text>{JSON.stringify(facebookLogin.user)}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

