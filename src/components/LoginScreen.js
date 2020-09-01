import React, { useEffect, useCallback, useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

function LoginScreen({ route, navigation }) {
    const [phoneNumber, setPhoneNumer] = useState('');
    const [error, setError] = useState('');
    return (
        <>
            <TextInput
                placeholder='Phone Number'
                keyboardType={'phone-pad'}
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={phoneNumber}
                onChangeText={setPhoneNumer}
            />
            <Text>{error}</Text>
            <Button title='Submit' onPress={() => navigation.navigate('OTP')} />

            <Button
                title="Go to Jane's video"
                onPress={() =>
                    navigation.navigate('Video', {
                        itemId: 86,
                        name: 'ashrith',
                    })
                }
            />
        </>
    );
}

export default LoginScreen;
