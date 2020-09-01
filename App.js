import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import VideoCall from './src/components/VideoCall';
import LoginScreen from './src/components/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name='Video'
                    component={VideoCall}
                    options={{ title: 'Video Call' }}
                    initialParams={{ itemId: 42 }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
