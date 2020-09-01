import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

function LoginScreen({ route, navigation }) {
    return (
        <Button
            title="Go to Jane's video"
            onPress={() =>
                navigation.navigate('Video', { itemId: 86, name: 'ashrith' })
            }
        />
    );
}

export default LoginScreen;
