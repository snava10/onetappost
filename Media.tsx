import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import GlobalContext, { GlobalCtxContent } from './GlobalContext';

export default function MediaScreen({navigation}) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
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
      videoMaxDuration: 0
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <GlobalContext.Consumer>
      {(context: any) => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>You have logged in as {JSON.stringify(context.facebookLogin.user)}</Text>
          <Button title="Pick an image or video" onPress={pickImage} />
          <Button title="Take a photo" onPress={() => launchCamera(ImagePicker.MediaTypeOptions.Images)} />
          <Button title="Film a video" onPress={() => launchCamera(ImagePicker.MediaTypeOptions.Videos)} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      )}
    </GlobalContext.Consumer>
    
  );
}