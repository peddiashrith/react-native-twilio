import React, { useState } from 'react';
import { TextInput, Button, Text } from 'react-native';

function OTP() {
    const [OTP, setOTP] = useState('');
    const [error, setError] = useState('');
    const onSubmit = async () => {
        const resp = await fetch(
            'https://r7hvl6uiue.execute-api.ap-south-1.amazonaws.com/dev/loginotp'
        )
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                console.log(error);
            });
        setError('Wrong OTP!');
    };

    return (
        <>
            <TextInput
                placeholder='Enter OTP'
                keyboardType={'phone-pad'}
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={OTP}
                onChangeText={setOTP}
            />
            <Text>OTP: {OTP}</Text>
            <Text>{error}</Text>
            <Button title='Submit' onPress={onSubmit} />
        </>
    );
}

export default OTP;
