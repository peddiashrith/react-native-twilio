import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import VideoCall from './src/components/VideoCall';
import LoginScreen from './src/components/LoginScreen';
import OTP from './src/components/OTP';

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
                <Stack.Screen
                    name='OTP'
                    component={OTP}
                    options={{ title: 'OTP' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
