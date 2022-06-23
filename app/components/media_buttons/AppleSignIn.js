/**
 * APPLE SIGN IN 
 * 
https://rossbulat.medium.com/react-native-sign-in-with-apple-75733d3fbc3
*/

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppleButton, appleAuth } from '@invertase/react-native-apple-authentication';


export default function AppleSignIn({ createAccount, style }) {

  async function onAppleButtonPress() {

    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    let { fullName, user, email } = appleAuthRequestResponse;
    fullName = fullName.givenName && fullName.familyName ?
      fullName.givenName + " " + fullName.familyName : "NA";
    const userID =
      user ?
        user : "NA";
    email = email ?
      email : "NA@na.com";

    createAccount(fullName, email, null, userID);

    /** OPTIONAL IN CASE WE NEED GREATER SECURITY.
     * No sensitive data is saved in this app so we'll keep the security equivalent to the Google and Facebook signins.
     
     // get current authentication state for user
     // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
     const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
     
     // use credentialState response to ensure the user is authenticated
     if (credentialState === appleAuth.State.AUTHORIZED) {
       // user is authenticated
      }
      */
  }

  return (
    <TouchableOpacity
      activeOpacity={.8}
      onPress={() => onAppleButtonPress()}
      style={[style.container, styles.container]}
    >
      <Text style={styles.text}>Sign In With Apple</Text>
      <Image
        style={[style.image, styles.image]}
        source={require('../../assets/images/apple_icon_64.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  image: {
    borderRadius: 5,
    maxWidth: 64,
  },
  text: {
    color: '#000'
  }
})