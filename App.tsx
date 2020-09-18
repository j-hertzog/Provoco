import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Clipboard } from 'react-native'
import LandingPage from './LandingPage.tsx';
import AlarmPage from './AlarmPage.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name = "Home"
                component = {LandingPage}
                options = {{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name = "Alarms"
                component = {AlarmPage}
                options = {{
                    headerStyle: {
                        backgroundColor: '#282a36',
                        height: 60,
                    },
                    headerTintColor: '#bd93f9',
                }}
            />
        </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;
// HACK: Prevent "Expo pasted from CoreSimulator" notification from spamming continuously (caused by iOS14) will be resolved in SDK 39
if (__DEV__) {
  Clipboard.setString('')
}

