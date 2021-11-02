import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import * as Facebook from 'expo-facebook';

var facebookResponse = {} as any;

async function logIn() {
  try {
    await Facebook.initializeAsync({
      appId: '405166990987939',
    });
    const facebookLoginresult: Facebook.FacebookLoginResult = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (facebookLoginresult.type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response: Response = await fetch(`https://graph.facebook.com/me?access_token=${facebookLoginresult.token}`);
      facebookResponse = await response.json();
      Alert.alert('Logged in!', `Hi ${JSON.stringify(facebookResponse)}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}


export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Welcome to One Tap Post, where you will be able to post</Text>
      <Text>to all your social media platforms with one tap</Text>
      <Button
        onPress={async () => {
          await logIn();
        }}
        title="Login With Facebook"
      />
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
