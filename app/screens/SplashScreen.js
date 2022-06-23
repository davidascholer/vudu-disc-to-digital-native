import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from 'react-native';
import ConnectionStatus from '../components/ConnectionStatus';
import AppBackground from '../components/AppBackground';

import asyncStorage from '../controller/asyncStorage';

export default function SplashScreen({ navigation }) {

    // const [token, setToken] = useState();

    useEffect(() => {
        retrieveToken();
    }, []);

    const getTokenFromStorage = async () => {
        const userData = await asyncStorage.getDataObject();
        if (userData)
            return userData.jwt;
        else
            return null;
    }

    const verifyToken = async () => {
        const token = await getTokenFromStorage();
        return token;
    }

    const retrieveToken = async () => {
        const token = await verifyToken();
        if (token) {
            navigation.replace('MainScreen')
        } else {
            navigation.replace('LoginScreen')
        }
    }


    return (
        <AppBackground styleSheet={styles.container}>
            <Text>Splash</Text>
        </AppBackground>
    );
}

const styles = StyleSheet.create({

});
