import React from 'react';
import LoginScreen from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MediaScreen from './Media';
import GlobalContext, { GlobalCtxContent } from './GlobalContext';
const Stack = createNativeStackNavigator();

export default function App() {  
  return (
    <GlobalContext.Provider value={{} as GlobalCtxContent}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'One Tap Post' }}/>
          <Stack.Screen name="Media" component={MediaScreen} options={{ title: 'One Tap Post' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}
