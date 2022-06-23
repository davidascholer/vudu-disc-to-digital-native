{/*
STEPS TO CREATING IN APP PAYMENTS

-npm[yarn] install[add] react-native-iap@next

-Android:
--Add new app in Play Console.
--Set package="com.APPNAME" in Play Console.
--Create a signature for app:
  ---
  --Run: /usr/libexec/java_home
  --...on Mac to find java folder
  --Go into javafolder, then bin folder...
  --Generate upload key w command: keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
  --- 
  --Add in android/gradle/gradle.properties:
  MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
  MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
  MYAPP_UPLOAD_STORE_PASSWORD=password_set
  MYAPP_UPLOAD_KEY_PASSWORD=same_password_as_above
  --Move upload key from Java/jdk.x.x.x/bin to android/app/ folder.
  --Add "release" portion, "signingConfig", and "missingDimensionStrategy" to android/app/build.gradle:
  ...
  android {
    ...
    defaultConfig {
      ...
      missingDimensionStrategy ('store', 'play')
    }
    ...
    signingConfigs {
      release {
        if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
          storeFile file(MYAPP_UPLOAD_STORE_FILE)
          storePassword MYAPP_UPLOAD_STORE_PASSWORD
          keyAlias MYAPP_UPLOAD_KEY_ALIAS
          keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
      }
    }
    buildTypes {
      release {
        ...
        signingConfig signingConfigs.release
      }
    }
  }
  ...
  --Add <uses-permission android:name="com.APP.NAME.BILLING" /> in android manifest
  --Generate APK w: cd android && ./gradlew assembleRelease
  --... or generate AAB w: cd android && ./gradlew bundleRelease
  --... or in Android Studio, Build -> Build Bundle(s) / APK(s)
--AAP saved in android/app/build/output/bundle/release

-IOS:
--Create new App in Apple Developer
--Create a new identifier, set bundle id, and select In App Purchases
--Select In-App Purchases -> Manage and create the in-app purchase. This is code is for a Consumable
--Select ios/ folder and run: pod install
--Go to Xcode, click on the app workspace folder and make sure the Bundle Identifier matches the one set up in Apple Developer

-See code below for instantioation.

*/}
import React, { useContext, useEffect, useState } from 'react';
import { Button, Platform, ScrollView } from 'react-native';
import RNIap, {
  purchaseErrorListener,
  purchaseUpdatedListener,
} from 'react-native-iap';

import AppBackground from '../components/AppBackground';
import PurchaseItem from '../components/PurchaseItem';
import BackButton from '../components/BackButton';
import AppAlert from '../components/AppAlert';

import purchaseTokens from '../controller/purchaseTokens';

import AppContext from '../config/context';

const itemSKUs = Platform.select({
  android: [
    "vdtd_1_2",
    "vdtd_3_5",
    "vdtd_8_10",
    "vdtd_20_20",
    "vdtd_60_50",
    "vdtd_u_100"
  ],
  ios: [
    "vdtd_1_2",
    "vdtd_3_5",
    "vdtd_8_10",
    "vdtd_20_20",
    "vdtd_60_50",
    "vdtd_u_100"
  ]
});


const PurchaseTokenScreen = ({ navigation }) => {

  const [products, setProducts] = useState([]);
  const [requestionPurchase, setRequestingPurchase] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [enableIAPToRun, setEnableIAPToRun] = useState(true);

  const { userData, setUserData } = useContext(AppContext);

  useEffect(() => {

    RNIap.initConnection()
      .then(() => {

        fetchMyAPI();

        // // we make sure that "ghost" pending payment are removed
        // // (ghost = failed pending payment that are still marked as pending in Google's native Vending module cache)
        // RNIap.flushFailedPurchasesCachedAsPendingAndroid().catch(() => {
        //   // exception can happen here if:
        //   // - there are pending purchases that are still pending (we can't consume a pending purchase)
        //   // in any case, you might not want to do anything special with the error

        // }
        // )
        //   .then(() => {
        purchaseUpdatedListener((purchase) => {

          if (enableIAPToRun) {
            // sketchyMultipleApiCallsFix();

            const { transactionReceipt } = purchase;
            if (transactionReceipt) {
              saveToAPI(purchase);

              // Tell the store that you have delivered what has been paid for.
              // Failure to do this will result in the purchase being refunded on Android and
              // the purchase event will reappear on every relaunch of the app until you succeed
              // in doing the below. It will also be impossible for the user to purchase consumables
              // again until you do this.
              // If consumable (can be purchased again, 2nd param = true, false if not consumable)
              RNIap.finishTransaction(purchase, true);
              // setShowAlert(true);
            } else {

              console.log('no transaction receipt');
            }
          }
        });

        purchaseErrorListener((error) => {
          // if (!error.message.includes("Payment is Cancelled"))
          //   alert("Unfortunately, your purchase could not be processed at this time.")
          // });
        })
      })

    return () => {
      RNIap.endConnection();
      setIsSubscribed(false);
    }
  }, []);

  async function saveToAPI(purchase) {

    setErrorMessage(null);

    try {
      setRequestingPurchase(false);

      const user = await purchaseTokens(userData.appID, purchase);

      if (user.error)
        return console.log("error: " + user.error);

      setUserData({
        ...userData,
        tokens: user.data.tokens
      });
    } catch {
      console.log("error in api response");
    }
  };

  async function fetchMyAPI() {

    try {
      const productData = await RNIap.getProducts(itemSKUs);

      let tempProducts = [];
      for (let p of productData) {
        const product = {
          productId: p.productId,
          description: p.description,
          price: p.price,
          title: p.title.split('(')[0]

        };
        tempProducts.push(product);
      }

      tempProducts = tempProducts.sort(function (a, b) {
        return parseInt(a.price, 10) - parseInt(b.price, 10);
      });

      if (isSubscribed)
        setProducts(tempProducts);

    } catch (err) {
      setErrorMessage("No Internet Connection");
    }

  };

  const productPressed = (product, title) => {
    try {
      setRequestingPurchase(true);
      console.log("Purchase from user: " + userData.appID + " attempted. " + title);
      RNIap.requestPurchase(product);
    } catch (err) {
      setRequestingPurchase(false);
      alert("Your order could not be processed");
    }
  }

  //react-native-api has a bug in development mode where purchase listener gets called multiple times.
  const sketchyMultipleApiCallsFix = () => {
    setEnableIAPToRun(false);
    setTimeout(() => {
      setEnableIAPToRun(true);
    }, 3000);
  }

  return (
    <AppBackground>
        <BackButton navigation={navigation}/>
      {errorMessage &&
        <>
          <Text>{errorMessage}</Text>
          <Button title={"reload"} onPress={() => fetchMyAPI()}></Button>
        </>
      }
      <ScrollView style={{ flex: 1 }}>
        {products.map(product => (
          <PurchaseItem key={product.productId} description={product.description} title={product.title} price={product.price} clicked={() => productPressed(product.productId, product.title)}></PurchaseItem>
        ))}
      </ScrollView>
      {/* {showAlert &&
        <AppAlert title={"Purchase Successful"}
          message={"Your purchase was successful!\nYour tokens have been updated."}
          okText={"OK cool"}
          onPress={navigation.goBack() }
          style={{zIndex:1}}
        /> 
      } */}
    </AppBackground>
  )
}

export default PurchaseTokenScreen;
// export default withIAPContext(App);

//export PATH=$PATH:~/Library/Android/sdk/platform-tools/

/*
RESPONSE CODES:

ANDROID:
purchaseState-7 purchaseStateAndroid: Already own
purchaseState-4 purchaseStateAndroid:2 Bad
purchaseState-0 purchaseStateAndroid:1 Good
0:good
4:

purchaseTime
purchaseState
purchaseToken


IOS:

transactionReceipt
transactionDate
transactionIdnpm install --global expo-cli


*/