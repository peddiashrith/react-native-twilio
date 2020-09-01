import React from 'react';
import { Text } from 'react-native';

function VideoCall({ route, navigation }) {
    const { itemId } = route.params;
    const { name } = route.params;
    return (
        <Text>
            Hello From VideoCall {JSON.stringify(itemId)} {name}
        </Text>
    );
}

export default VideoCall;
