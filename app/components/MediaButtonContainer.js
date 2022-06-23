/*
Expo configurations for logging in w 
Facebook (Android, ios), Google (Android, ios), and Apple (ios only)
*/
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import AppleSignIn from './media_buttons/AppleSignIn';
import FacebookSignIn from './media_buttons/FacebookSignIn';
import GoogleSignInButton from './media_buttons/GoogleSignInButton';

export default function MediaButtonContainer({ createAccount }) {

    return (
        <View style={styles.container}>
            <FacebookSignIn createAccount={createAccount} style={{container:styles.buttonContainer,image:styles.buttonImage,text:styles.buttonText}}/>
            <GoogleSignInButton createAccount={createAccount} style={{container:styles.buttonContainer,image:styles.buttonImage,text:styles.buttonText}}/>
            {Platform.OS === "ios" && <AppleSignIn  createAccount={createAccount}  style={{container:styles.buttonContainer,image:styles.buttonImage,text:styles.buttonText}} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'75%'
    },
    buttonContainer: {
        alignItems: 'center',
        borderRadius:5,
        cursor:'pointer',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginBottom:10,
        padding: 5,
        width: '100%',
    },
    buttonImage: {
        height:32,
        // marginLeft:'10%',
        // marginRight:'10%',
        padding:5,
        width:32,
    },
    buttonText: {
        color:"#fff",
        flex:1,
        letterSpacing:1.5,
        textAlign:'center',
    },

});
