/**
 * GOOGLE SIGN IN 
 * 
 For implementation, refer to:
 https://ibjects.medium.com/google-signin-tutorial-for-react-native-81a57fb67b18
 */

import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export default function GoogleSignInButton({ createAccount, style }) {

  const handleSignIn = () => {
    GoogleSignin.configure({
      androidClientId: '202219569561-76qdho93msm0majgq2bo7c5pt6q2bb2j.apps.googleusercontent.com',
      iosClientId: '202219569561-4dnh6thlt8rib6bcb17jcfi8uncb8eaa.apps.googleusercontent.com',
    });
    GoogleSignin.hasPlayServices().then((hasPlayService) => {
      if (hasPlayService) {
        GoogleSignin.signIn().then((res) => {

          let { name, id, email } = res.user;
          const fullName = name ?
            name : "NA";
          const userID = id ?
            id : "NA";
          email = email ?
            email : "NA";

          createAccount(fullName, email, null, userID);


        }).catch((e) => {
          console.log("Play services don't exist: " + JSON.stringify(e));
        })
      }
    }).catch((e) => {
      console.log("Couldn't get Google Play services: " + JSON.stringify(e));
    })

  }

  return (
    <TouchableOpacity onPress={() => handleSignIn()} style={[style.container, styles.container]}>
      <Text style={styles.text}>Sign In With Google</Text>
      <Image
        style={[style.image, styles.image]}
        source={require('../../assets/images/google_icon_64.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F81ED',
  },
  image: {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 64,
  },
  text: {
    color: '#fff'
  }
})
