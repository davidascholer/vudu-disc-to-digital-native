
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View, } from 'react-native';

import AppBackground from '../components/AppBackground';
import AppAlert from '../components/AppAlert';
import TokenCountView from '../components/TokenCountView';
import BackButton from '../components/BackButton';

import redeemToken from '../controller/redeemToken';
import fetchReceipts from '../controller/fetchReceipts';
import signInServices from '../controller/signInServices';

const MovieScreen = ({ navigation, route }) => {

  const [signedIn, setSignedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [alertShown, setAlertShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { movie } = route.params;
  const { format, image, genres, ratings, title, upc, year } = movie;

  useEffect(() => {
    getUserContent();
  }, []);

  const getUserContent = async () => {
    const user = await signInServices.getUser();
    if (user) {
      if (user.jwt) {
        setUserData(user);
        setSignedIn(true);
      }
    }
  }

  const handleRedeemClicked = async () => {
    //Fail safe. The button should be disabled if tokens are out.
    if (userData.tokens < 1)
      return;

    const user = await redeemToken(userData.appID, upc);

    setAlertShown(false);

    if (user)
      if (user.error)
        setErrorMessage('Network Error. Please Try Again.')

    const updatedUserData = {
      ...userData,
      redemptions: user.data.redemptions,
      tokens: user.data.tokens
    }

    setUserData(updatedUserData);
    signInServices.setUser(updatedUserData);

    navigation.replace('BarcodeScreen', {title, upc})

  }

  return (
    <>
      {alertShown &&
        <AppAlert
          title="redeem token"
          message="You are about to redeem a token. Continue?"
          okText="yes please"
          cancelText="no thanks"
          shown={alertShown}
          onPress={() => handleRedeemClicked()}
          setShown={setAlertShown} />
      }
      <AppBackground>
        <BackButton navigation={navigation} />
        <View style={styles.container}>
          <View style={[styles.contentContainer, { flex: 1 }]}>
            <Text style={styles.text}>{title}</Text>
          </View>
          <View style={[styles.contentContainer, { flex: 2 }]}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
          <View style={[styles.contentContainer, { flex: 2, justifyContent: 'space-around' }]}>
            <Text style={styles.text}>{year}</Text>
            <Text style={styles.text}>{ratings}</Text>
            <Text style={styles.text}>{genres}</Text>
            <Text style={styles.text}>{format}</Text>
          </View>
        </View>
        {userData.tokens < 1 ?
          <Button onPress={() => setAlertShown(true)} title='Redeem Token' disabled={true} />
          :
          <Button onPress={() => setAlertShown(true)} title='Redeem Token' disabled={false} />
        }
      </AppBackground>
      <TokenCountView style={styles.tokenView} navigation={navigation} signedIn={signedIn}></TokenCountView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    alignItem: 'center',
    justifyContent: 'center',
  },
  image: {
    maxHeight: 200,
    resizeMode: 'contain',
    width: 200,
    flex: 1,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
})

export default MovieScreen;
