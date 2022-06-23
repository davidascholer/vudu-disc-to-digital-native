import React, { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import jwtDecode from 'jwt-decode';
//Component imports
import ConnectionStatus from '../components/ConnectionStatus';
import FormSection from '../components/FormSection';
import AppBackground from '../components/AppBackground';
import MediaButtonContainer from "../components/MediaButtonContainer";
import KeyboardHidden from "../components/KeyboardHidden";
import SquishSafeView from "../components/SquishSafeView";
//Function imports
import createAccount from '../controller/createAccount';
import getAccount from '../controller/getAccount';
import signInServices from '../controller/signInServices';
//Config imports
import AppContext from '../config/context';

export default function LoginScreen({ navigation }) {
  //Global settings
  const appContext = useContext(AppContext);
  //Local vars (stateful)
  const [signInScreen, setSignInScreen] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(true);
  const [loginFailed, setLoginFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //Local vars (stateless)
  const getScreenText = screen => screen ? screenTextOptions[0] : screenTextOptions[1];
  const screenTextOptions = ["Sign In", "Create Account"];
  const errMes = "Please check your wireless connection and try again.";

  useEffect(() => {
    getUserContent();
  }, []);

  const getUserContent = async () => {
    const user = await signInServices.getUser();
    if (user.jwt)
      navigation.replace('MainScreen');
  }

  //Lookup account and set a token if credentials check out
  const handleSignIn = async (id, password) => {

    const user = await getAccount(id, password);

    if (user.error) {
      setErrorMessage(user.error);
      return;
    }

    setUserContent(user);

  }

  const handleCreateAccount = async (name, email, password) => {

    const user = await createAccount(name, email, password);

    if (user.error) {
      setErrorMessage(user.error);
      return;
    }

    setUserContent(user);

  }

  const handleMediaLogin = async (name, email, password, id) => {

    const user = await createAccount(name, email, password, id);

    if (user.error)
      return console.log('error', user.error);

    setUserContent(user);

  }

  const setUserContent = async data => {
    appContext.setUserData(data);
    signInServices.setUser(data);
    navigation.replace('MainScreen');
  }

  return (
    <AppBackground styleSheet={styles.container}>
      <SquishSafeView>
        {/* <ConnectionStatus styleSheet={styles.error}></ConnectionStatus> */}
        {/* <KeyboardHidden> */}
        <View style={styles.header}>
          <Text style={[styles.headerText, styles.headerTextBold]}>VUDU </Text>
          <Text style={[styles.headerText, styles.headerTextLight]}>Disc To Digital</Text>
        </View>
        {/* </KeyboardHidden> */}
        {signInScreen &&
          <View style={styles.viewContainer}>
            <FormSection
              buttonStyles={styles.button}
              buttonTextStyles={styles.buttonText}
              signInScreen={true}
              screenText={getScreenText(true)}
              handleSignIn={handleSignIn}
              createAccountHandler={handleCreateAccount}
              errorMessage={errorMessage}
              errorMessageVisible={loginFailed}
            >
              <TouchableOpacity style={styles.button} onPress={() => setSignInScreen(false)}>
                <Text style={styles.buttonText}>{screenTextOptions[1]}</Text>
              </TouchableOpacity>

              {/* {showForgotPassword && signInScreen && <TouchableOpacity style={styles.button} onPress={forgotPassword}>
              <Text style={[styles.buttonText, { color: 'green' }]}>Forgot Password</Text>
            </TouchableOpacity>} */}
            </FormSection>
          </View>
        }
        {!signInScreen &&
          <View style={styles.viewContainer}>
            <FormSection
              buttonStyles={styles.button}
              buttonTextStyles={styles.buttonText}
              signInScreen={false}
              screenText={getScreenText(false)}
              handleSignIn={handleSignIn}
              createAccountHandler={handleCreateAccount}
              errorMessage={errorMessage}
              errorMessageVisible={loginFailed}
            >
              <TouchableOpacity title={screenTextOptions[0]} style={styles.button} onPress={() => setSignInScreen(true)}>
                <Text style={styles.buttonText}>{screenTextOptions[0]}</Text>
              </TouchableOpacity>

              {/* {showForgotPassword && signInScreen && <TouchableOpacity style={styles.button} onPress={forgotPassword}>
              <Text style={[styles.buttonText, { color: 'green' }]}>Forgot Password</Text>
            </TouchableOpacity>} */}
            </FormSection>
          </View>
        }
        <Text style={styles.error}>{errorMessage}</Text>
        <KeyboardHidden>
          <View style={styles.viewContainer}>
            <MediaButtonContainer createAccount={handleMediaLogin} />
          </View>
          {signInScreen &&
            <Button title="continue without signing in" color='#fff' onPress={() => navigation.navigate('MainScreen')}></Button>
          }
        </KeyboardHidden>
      </SquishSafeView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: "500",
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
  },
  headerTextBold: {
    fontWeight: '700',
  },
  headerTextLight: {
    fontWeight: '200',
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  }
});
