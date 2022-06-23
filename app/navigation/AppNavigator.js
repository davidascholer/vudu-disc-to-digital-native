import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from "../screens/MainScreen";
import MovieScreen from '../screens/MovieScreen';
import PurchaseTokenScreen from '../screens/PurchaseTokenScreen';
import BarcodeScreen from '../screens/BarcodeScreen';
import UserMoviesScreen from "../screens/UserMoviesScreen";
import ReceiptScreen from "../screens/ReceiptScreen";
import HowItWorksScreen from "../screens/HowItWorksScreen";
import ContactScreen from "../screens/ContactScreen";
import PoliciesScreen from "../screens/PoliciesScreen";


const Stack = createNativeStackNavigator();

function AppNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="MainScreen" component={MainScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="MovieScreen" component={MovieScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="PurchaseTokenScreen" component={PurchaseTokenScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="BarcodeScreen" component={BarcodeScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="UserMoviesScreen" component={UserMoviesScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="ReceiptScreen" component={ReceiptScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="HowItWorksScreen" component={HowItWorksScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="ContactScreen" component={ContactScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="PoliciesScreen" component={PoliciesScreen}
                    options={{
                        headerShown: false,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;