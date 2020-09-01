import React, { useEffect, useCallback } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { LocalNotification } from './LocalPushController';

var PushNotification = require('react-native-push-notification');

PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
        console.log('FCM TOKEN:', token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
        console.log('Remote NOTIFICATION:', notification);
    },

    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);
    },

    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err) {
        console.error(err.message, err);
    },

    popInitialNotification: true,
    requestPermissions: true,
});

function LocalNotif() {
    useEffect(() => {
        console.log('********HEllo*************');
    });

    const handleButtonPress = useCallback(() => {
        LocalNotification();
    });

    return (
        <View style={styles.container}>
            <Text>Press a button to trigger the notification</Text>
            <View style={{ marginTop: 20 }}>
                <Button
                    title={'Local Push Notification'}
                    onPress={handleButtonPress}
                />
            </View>
        </View>
    );
}

export default LocalNotif;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
});
