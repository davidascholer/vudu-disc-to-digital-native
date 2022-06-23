import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import signInServices from '../controller/signInServices';
import { colorTheme } from '../config/colors';

const TokenCountView = ({ navigation, onPress, style }) => {

    const [signedIn, setSignedIn] = useState(false);
    const [tokenCount, setTokenCount] = useState(0);

    const signedInMsg = "You have " + tokenCount + " tokens remaining";
    const signedInMsgOneLeft = "You have 1 token remaining";
    const signedInMsgNoneLeft = "You are out of tokens"
    const notSignedInMsg = "Sign in for a free token towards a movie!"


    useEffect(() => {
        getUserContent();
    });

    const getUserContent = async () => {
        const user = await signInServices.getUser();
        if (user.jwt){
            setTokenCount(user.tokens);
            setSignedIn(true);
        }
    }

    const resetAction = CommonActions.reset({
        index: 1,
        routes: [
            { name: 'LoginScreen' },
        ],
    });

    return (
        <>
            {signedIn ?
                <TouchableOpacity style={style} onPress={() => { navigation.navigate('PurchaseTokenScreen') }}>
                    <View style={styles.container}>
                        {tokenCount > 1 &&
                            <Text style={styles.text}>
                                {signedInMsg}
                            </Text>
                        }
                        {tokenCount === 1 &&
                            <Text style={styles.text}>
                                {signedInMsgOneLeft}
                            </Text>
                        }
                        {tokenCount < 1 &&
                            <Text style={styles.text}>
                                {signedInMsgNoneLeft}
                            </Text>
                        }
                        <View>
                            <Image style={styles.image} source={require('../assets/images/qr_code.jpg')} />
                        </View>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity style={style} onPress={() => { navigation.dispatch(resetAction) }}>
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            {notSignedInMsg}
                        </Text>
                        <View>
                            <Image style={styles.image} source={require('../assets/images/qr_code.jpg')} />
                        </View>
                    </View>
                </TouchableOpacity>
            }
        </>
    )
}

const styles = StyleSheet.create({

    image: {
        flex: 1,
        height: 65,
        margin: 5,
        width: 65,
    },
    container: {
        alignItems: 'center',
        backgroundColor: colorTheme.background,
        flexDirection: 'row',
        minHeight: 75,
    },
    text: {
        color: 'white',
        flex: 1,
        textAlign: 'center',
    },
})

export default TokenCountView;