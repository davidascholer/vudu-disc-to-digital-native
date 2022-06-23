import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import signInServices from '../controller/signInServices';
import appColors from '../styles/appColors';


export default function SideNavigation({ menuClosed, navigation }) {
    //State
    const [signedIn, setSignedIn] = useState(false);
    //Ref
    const animationValueSlide = useRef(new Animated.Value(0)).current;
    //Local Vars
    const globalTimingValues = {
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: true
    }
    //Effect
    useEffect(() => {
        getUserContent();
    }, []);

    const getUserContent = async () => {
        const user = await signInServices.getUser();
        if (user.jwt)
            setSignedIn(true);
    }

    useEffect(() => {
        if (menuClosed)
            close();

        if (!menuClosed)
            open();
    })

    const open = () => {
        Animated.timing(animationValueSlide, {
            ...globalTimingValues,
            toValue: 0,
        }).start();
    };

    const close = () => {
        Animated.timing(animationValueSlide, {
            ...globalTimingValues,
            toValue: 1,
        }).start();
    };

    const handleSignOut = () => {
        signInServices.signOut();
        const resetAction = CommonActions.reset({
            index: 1,
            routes: [
                { name: 'LoginScreen' },
            ],
        });
        navigation.dispatch(resetAction);
    }

    return (
        <Animated.View style={[styles.container,
        {
            transform: [
                {
                    translateX: animationValueSlide.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, Dimensions.get('window').width / -2]
                    })
                },
            ],
        }
        ]}>

            {signedIn ?
                <>
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("UserMoviesScreen")}><Text style={styles.text}>My Movies</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('PurchaseTokenScreen')}><Text style={styles.text}>Buy Tokens</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("ReceiptScreen")}><Text style={styles.text}>My Orders</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("HowItWorksScreen")}><Text style={styles.text}>How It Works</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => handleSignOut()}><Text style={styles.text}>Sign Out</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("ContactScreen")}><Text style={styles.text}>Contact</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("PoliciesScreen")}><Text style={styles.text}>Privacy & Terms</Text></TouchableOpacity>
                </>
                :
                <>
                    {/* <TouchableOpacity style={styles.textContainer} onPress={() => handleAlertClicked("Login or sign up to view your movies.")}><Text style={styles.text}>My Movies</Text></TouchableOpacity> */}
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("HowItWorksScreen")}><Text style={styles.text}>How It Works</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("LoginScreen")}><Text style={styles.text}>Sign In</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("PoliciesScreen")}><Text style={styles.text}>Privacy & Terms</Text></TouchableOpacity>
                </>
            }

        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 50,
        position: 'absolute',
        left: 0,
        top: 0,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width / 2,
        zIndex: 1
    },
    text: {
        color: appColors.text,
        fontSize: 20,
        fontWeight: '500',
    },
    textTerms: {
        fontSize: 13,
    },
    textTermsContainer: {
        cursor: 'pointer',
        marginTop: 'auto',
        marginBottom: 90,
        textAlign: 'center',
    },
    textContainer: {
        cursor: 'pointer',
        marginTop: 20,
    },

})