import React from 'react'
import { View, Text, Button } from 'react-native'
import tailwind from 'tailwind-rn';
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <View style={tailwind('flex-1 justify-center items-center')}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button onPress={signInWithGoogle} title="Sign In With Google" />
        </View>
    )
}

export default LoginScreen
